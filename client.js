const WebSocket = require('ws');

// Hier nur ändern!
const SERVER_IP = '127.0.0.1';     // oder deine echte IP/Domain
const PS_CODE   = 'NRWNET';        // dein psCode aus dem Roblox-Link

const ws = new WebSocket(`ws://${SERVER_IP}:8080`);

ws.on('open', () => {
    console.log(`Verbunden als ${PS_CODE}`);
    ws.send(JSON.stringify({ type: 'register', psCode: PS_CODE }));
});

ws.on('message', (data) => {
    const msg = JSON.parse(data);
    if (msg.type === 'run') {
        console.log('Befehl:', msg.cmd);

        // HIER DEIN ROBLOX CODE REIN
        const result = `Befehl "${msg.cmd}" wurde auf ${PS_CODE} ausgeführt!`;

        ws.send(JSON.stringify({
            type: 'output',
            output: result
        }));
    }
});

ws.on('close', () => {
    console.log('Getrennt – reconnect in 3s...');
    setTimeout(() => new WebSocket(`ws://${SERVER_IP}:8080`), 3000);
});