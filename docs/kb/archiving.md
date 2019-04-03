# Archivace

## Program tar

- V podstatě defaultní utilita k archivaci na unixových operačních systémech
- Rozdílné formáty, rozdílna paměťová náročnost
- Nepracuje s více vlákny
- Možnost paralelizace

```bash
# tar
tar cfv archive.tar some-folder
tar xfv archive.tar

# tar.gz
tar zcfv archive.tar.gz some-folder
tar zxfv archive.tar.gz

# tar.bz2
tar cvfj archive.tar.bz2 some-folder
tar xvfj archive.tar.bz2
```

## Program p7zip

- Použití rozžířeného formátu zip

```bash
sudo apt install p7zip-full

7z a archive.7z some-folder
7z x archive.7z
```
