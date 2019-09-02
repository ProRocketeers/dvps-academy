# Nginx

## Vysvětlení

- Webový server
- Pracuje s protokoly HTTP, HTTPS, SMTP, POP3, IMAP

## Instalace

```bash
sudo apt install nginx
```

- Pomocí systemctl zjistíme, zda služba běží
- V prohlížeči (nebo příkazem `curl`) zobrazíme http://localhost

## Pracovní složky

- Servírované dokumenty: /var/www/html
- Nastavení vlastnictví a permisí `sudo chown -R $USER:$USER /var/www/html` a `sudo chmod -R 755 /var/www/html`
- Konfigurační soubory: /etc/nginx (hlavní konfigurační soubor `/etc/nginx/nginx.conf`)

## Nastavení reversní proxy

- Nahradíme defaulní server blok - na Ubuntu nalezneme v `/etc/nginx/sites-enabled/default`

```nginx
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  server_name localhost;
  
  location /api {
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $http_connection;
    proxy_set_header Host $host:$server_port;
    proxy_set_header X-Forwarded-Server $host;
    proxy_pass http://127.0.0.1:3333;
  }
  location / {
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $http_connection;
    proxy_set_header Host $host:$server_port;
    proxy_set_header X-Forwarded-Server $host;
    proxy_pass http://127.0.0.1:3331;
  }
}

```

- Více informací o reversní proxy [tady](https://www.root.cz/clanky/nginx-jako-reverzni-proxy-pro-apache)
- Více informací o server blocích [tady](https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks)
