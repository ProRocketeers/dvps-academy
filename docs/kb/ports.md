# TCP/IP porty a protokoly

## Porty a protokoly

- Definované porty jsou v systému do čisla 1000
- Otevření portu nižšího než tisíc potřebuje práva root
- Následující čiselne porty nejsou pevně dané, pouze zavedené

* 80 / 443 (http/https)
* 22 (ssh)
* 20 / 21 (ftp)
* 25 (smtp)
* 53 (dns)
* 445 (samba)
* 546 / 547 (dhcp)

## Scanování otevřených portů nějakého stroje

K tomu využijeme utilitu `nmap`

```bash
nmap seznam.cz
```

```
Starting Nmap 7.70 ( https://nmap.org ) at 2018-11-16 14:51 CET
Nmap scan report for seznam.cz (77.75.79.53)
Host is up (0.064s latency).
rDNS record for 77.75.79.53: www.seznam.cz
Not shown: 997 filtered ports
PORT    STATE  SERVICE
80/tcp  open   http
113/tcp closed ident
443/tcp open   https

Nmap done: 1 IP address (1 host up) scanned in 17.94 seconds
```
