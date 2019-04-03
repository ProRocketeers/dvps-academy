# CentOS

## Začínáme

- Na adrese centos.org si stáhněte Minimal ISO
- Na Virtualboxu vytvořte virtuální stroj
- Nastavíte 2 síťovky. První je NAT, druhá Host-Only
- Pomocí grafického instalátoru nainstalujte

## Správce balíčku

- V CentOS a Red Hat Linuxu se používá Yum
- Možnost použít DNF z Fedory

## Připojení na stroj pomocí SSH

- Zjistíte si Host-Only interface IP adresu (pravděpodobně enp0s8)

```bash
ip a
```

- Pokud interface nemá přiřazenou IP adresu, musíte ji přiřadit pomocí DHCP

```bash
dhclient enp0s8
```

- Připojíte se pomocí SSH

```bash
ssh uzivatel@192.168.56.101
```

## Povolení EPEL repozitáře

- Extra Packages for Enterprise Linux
- Nainstalujeme pomocí instrukcí na fedoraproject.org/wiki/EPEL

## Instalace balíčků

- Less, Nano, Nginx, Tcpdump, Net-tools
- Node.js (+ Yarn)

```bash
yum install less nano nginx tcpdump net-tools

# Install Node.js (+ NPM)
curl -sL https://rpm.nodesource.com/setup_11.x | bash -
yum install nodejs
```

## Zobrazení volného místa na disku

- Využijte utilitku df

```bash
df -h
```

## Práce s hosts

- Lokální DNS záznamy
- Mapuje název hostitele na IP adresu
- Nastavte si záznam rocket.local ukazující na 127.0.0.1

```bash
nano /etc/hosts
```

## Práce s resolv.conf

- Slouží k nastavování DNS resolveru
- Nastavte si resolver na DNS od Cloudflare (1.1.1.1) nebo Google (8.8.8.8)

```bash
nano /etc/resolv.conf
```

## Práce s tracepath

```bash
tracepath rocket.local
```

## Práce s tcpdump

- Naslouchání příchozích a odchozích paketů na nějakém síťovém rozhraním

```bash
systemctl stop firewalld

tcpdump -i enp0s8 -v port 80
```
