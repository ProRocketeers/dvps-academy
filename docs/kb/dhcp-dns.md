# DHCP, DNS

## DHCP

- Dynamic Host Configuration Protocol
- Server běží portu 67, klient běží na portu 68
- Přidělení IP adresy, výchozí brány a DNS serverům klientům

```
dhclient enp0s8
```

## DNS

- Domain Name System
- Služba běží na port 53
- Překlad názvů domén na IP adresy
- Překládá se nejdříve podle záznamů v /etc/hosts, poté se posílají požadavky na nastavené DNS servery v /etc/resolv.conf

## bind9

- Vlastní DNS server
- Instalace služby

```bash
sudo yum install bind bind-utils
```

- Nastavíme náš DNS server v /etc/resolv.conf
- Hlavní konfigurační soubor je /etc/named.conf

```
sudo nano /etc/named.conf
```

- Nastavíme forwardování na Google DNS

```
acl goodclients {
        192.0.2.0/24;
        localhost;
        localnets;
};

options {
        directory "/var/cache/bind";

        recursion yes;
        allow-query { goodclients; };

        forwarders {
                8.8.8.8;
                8.8.4.4;
        };
        forward only;

        dnssec-validation auto;

        auth-nxdomain no;    # conform to RFC1035
        listen-on-v6 { any; };
};
```

- Restartujeme službu
- Otestujeme

```
sudo systemctl restart named
ping uxes.cz
```
