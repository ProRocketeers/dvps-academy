# Úvod a instalace

## Výběr instalace

- Přimo na HW (pouze Linux nebo dual boot s jiným operačním systémem)
- Virtualizace (Virtualbox, VMWare, KVM)
- Kontejnery (Docker, LXC, rkt)

## Výběr distribuce

- Vybíráme větsinou dle doporučeni / rozšiření
- RedHat (resp. CentOS, Fedora)
- SUSE
- Ubuntu (resp. samotný Debian)
- Alpine Linux (5 MB)
- Raspbian (Raspberry PI)

## Stažení a instalace

- Stažení poslední verze distribuce Ubuntu [tady](https://www.ubuntu.com/download/desktop)

## Něco o systému

- Linux je pouze jádro (tvůrce Linus Torvalds 1991)
- GNU operačni system (Richard Stallman 1983). Obsahuje spoustu různých aplikací, se kterými se setkáme např. v kontejnerech nebo MacOS
- Rozděleni dle distribuce
- Dříve se použival SysV init system (zavaděni sluzeb za ruznych kroku systemu)
- Nyni se používá systemd (OpenRC alpine)
- Různé souborové systémy (ext2-4, btrfs, zfs). Na ntfs (Windows) zapomeňte

## Vykreslovací server

- Xorg
- Wayland

## Struktura systému

- / (ROOT)
  - /home
  - /bin
  - /boot
  - /dev
  - /etc
  - /lib
  - /media
  - /mnt
  - /opt
  - /proc
  - /root
  - /sbin
  - /srv
  - /sys
  - /tmp
  - /usr
  - /var

## Absolutní cesta vs. relativní cesta

```
/tmp/cool-folder/hereiam.txt
# vs
./cool-folder/hereiam.txt
```
