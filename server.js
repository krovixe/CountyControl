const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const contentType = ext === '.html' ? 'text/html' : 'text/plain';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fs.readFileSync(filePath));
    } else {
        res.writeHead(404);
        res.end('404');
    }
});

const wss = new WebSocket.Server({ server });

const browsers = new Set();
const privateServers = new Map(); // psCode => WebSocket

wss.on('connection', (ws) => {
    browsers.add(ws);

    ws.on('message', (raw) => {
        try {
            const msg = JSON.parse(raw);

            // Private Server meldet sich an
            if (msg.type === 'register' && msg.psCode) {
                privateServers.set(msg.psCode, ws);
                ws.send(JSON.stringify({ status: 'ok' }));
                console.log(`[PS] Verbunden: ${msg.psCode}`);
                return;
            }

            // Befehl vom Browser
            if (msg.type === 'cmd' && msg.psCode && privateServers.has(msg.psCode)) {
                privateServers.get(msg.psCode).send(JSON.stringify({
                    type: 'run',
                    cmd: msg.cmd
                }));
            }

            // Antwort vom PS → alle Browser
            if (msg.type === 'output') {
                browsers.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(msg));
                    }
                });
            }
        } catch (e) {
            console.log('Bad JSON');
        }
    });

    ws.on('close', () => {
        browsers.delete(ws);
        for (const [code, socket] of privateServers) {
            if (socket === ws) {
                privateServers.delete(code);
                console.log(`[PS] Getrennt: ${code}`);
                break;
            }
        }
    });
});

server.listen(8080, () => {
    console.log('CountyControl läuft!');
    console.log('→ Browser: http://127.0.0.1:8080');
    console.log('→ Client: node client.js');
});