# Node.js

## Vysvětlení

- Rapidní development webových aplikací (backend i frontend)
- Umožňuje spouštět Javascript mimo webový prohližeč
- Založený na Chrome V8 Engine
- Pro správu balíčku používá NPM (eventuelně Yarn)

## Instalace

**Node.js a NPM**

```bash
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt install nodejs
```

**Yarn**

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn
```
