# CountyControl – Pure JS/TS Remote Console für ER:LC Private Server

**Die schnellste, leichteste und komplett PHP-freie Remote-Console für Emergency Response: Liberty County Private Server**

Funktioniert perfekt mit Roblox-Links wie:  
`roblox://placeId=2534724415&launchData={"psCode":"NRWNET"}`

**Kein PHP · Keine Datenbank · Nur Node.js + WebSocket · Läuft überall**

---

## ✨ Features

- ⚡ Automatisch `psCode` aus jedem Roblox Private-Server-Link extrahieren
- 🎮 Live-Befehle an deinen echten ER:LC Server senden
- 💻 100 % JavaScript / TypeScript
- 🔄 Auto-Reconnect (Client & Server)
- 🪶 Minimaler Ressourcenverbrauch (< 50 KB)
- 🌍 Läuft auf Windows, Linux, VPS, Raspberry Pi, etc.
- 🚀 Keine Abos, keine Melonly, keine Limits – volle Kontrolle!

---

## 🚀 Schnellstart (15 Sekunden)

```bash
git clone https://github.com/DeinName/CountyControl.git
cd CountyControl
npm install
npm start
```

Öffne deinen Browser: [http://127.0.0.1:8080](http://127.0.0.1:8080)  
Füge deinen Roblox Private-Server-Link ein → Verbinden → Dominieren!

---

## 🎯 Auf deinem ER:LC Private Server starten

```bash
node client.js
```

**Ändere nur diese zwei Zeilen in `client.js`:**

```js
const SERVER_IP = '127.0.0.1';        // oder deine öffentliche IP / Domain
const PS_CODE   = 'NRWNET';           // dein psCode aus dem Roblox-Link
```

---

## 🎮 Beispiel-Befehle (die du später einbaust)

```text
say Willkommen auf NRWNET!
kick Troll123 Griefing
giveall money 500000
godmode on
fly all
shutdown
```

---

## 📁 Projektstruktur

```
CountyControl/
├── server.js          # WebSocket + HTTP Server (Node.js)
├── index.html         # Web-Console mit roblox:// Link Parser
├── client.js          # Läuft auf deinem echten Private Server
├── package.json
├── README.md          # ← du bist hier
└── .gitignore
```

---

## 🔥 Für Profis – TypeScript + React Version

Du willst:
- Mehrere Server gleichzeitig steuern?
- Command-History + Auto-Complete?
- Dark/Light Mode + schickes Design?
- Login mit Passwort?

→ Sag einfach **„React Version"** und ich schick dir die komplette Next.js + TypeScript Version mit Tailwind!

---

## 🔒 Sicherheitstipps

- 🛡️ Öffne Port `8080` nur für dich (Firewall!)
- 🌐 Bei öffentlichem Server: Ngrok, Cloudflare Tunnel oder Reverse Proxy mit Passwort
- 🔐 Nutze starke, lange `psCode`s (z.B. `x7K9pLmN2qWz`)

---

## 📜 Lizenz

**MIT License** – Mach damit was du willst  
Aber ein Stern ⭐ wäre fresh

---

**Made with 💙 für die echte ER:LC Private Server Community**  
Keine Abos. Keine Limits. Nur pure Power.

> **Du bist jetzt der wahre Admin von Liberty County.**

---

### 🌟 Star das Repo · Teile es mit deinen Jungs · Werde unsterblich!

**Noch Fragen? Issues? Pull Requests?**  
→ [GitHub Issues](https://github.com/DeinName/CountyControl/issues)
