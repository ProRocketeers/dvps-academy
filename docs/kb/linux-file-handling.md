# Práce se soubory

## Vypsání obsahu složky

```bash
ls slozka
```

## Změna aktuální pracovní složky

```bash
cd slozka
```

## Vypsání aktuální pracovní složky

```bash
pwd
```

## Vytvoření nové složky

```bash
mkdir moje_slozka
```

## Vytvoření prázdného souboru

```bash
touch muj_soubor
```

## Přejmenování nebo přesunutí souboru nebo složky

```bash
mv muj tvuj
```

## Vytvoření kopie souboru nebo složky

```bash
cp tvuj muj
```

## Smazání souboru

```bash
rm -f soubor
```

## Smazání složky

```bash
rm -rf slozka
```

## Vyhledání výrazu v souboru

```bash
grep "slovo" soubor
```

## Nahrazení textu v souboru

```bash
sed 's/slovo/slovo2/g' soubor
```

## Vyhledání souboru podle názvu

```bash
find . -name soubor
```

## Zápis do souboru

- Pomocí příkazu `echo`

```bash
echo "nejaky text" >> soubor
```

- Pomocí příkazu `cat`

```bash
cat > /tmp/file << EOF
neco
EOF
```

## Získání obsahu souboru

- Pomocí příkazu `cat`

```bash
cat soubor
```

- Pomocí příkazu `less`

```bash
less soubor
```
