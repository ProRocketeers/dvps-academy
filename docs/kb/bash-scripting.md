# Bash Scripting

## Bash script

- Sekvence příkazů, které interpret příkazu (Bash) postupně spouští

## Hashbang

- Indikuje umíštění interpreta. Hlavička se doporučuje psát, není všek povinná

```bash
#!/bin/bash
```

## Proměnné

- V bashi neexistují datové typy
- S obsahem se vždy pracuje jako se stringem

```bash
NAME="Adam"
echo "Jmenuji se $NAME"
```

## Argumenty

- Argumenty jsou reprezentovány proměnnými $1, $2, \$3 atd.
- Proměnná \$0 schovává název spouštěného scriptu (třeba /home/ondra/script.sh)

```bash
echo "Ahoj $1"
```

- Spuštění pak

```bash
./script.sh svete
```

## Uložení výstupu programu do proměnné

- Anglicky command substitution
- Výstup se získává pro pozdější manipulaci

```bash
# Starší varianta
PATH=$(pwd)

# Novější varianta, doporučeno pro složitější příkazy a příkazy s regulárními výrazy
PATH=`pwd`
```

## Podmíněné příkazy

- Podmíněné spuštění příkázu podle exit statusu předchozího příkazu
- Používáme logické operátory `&&` (exit status zero, příkaz prošel) a `||` (exit status non-zero, příkaz selhal)

```bash
# Spusti git push v případě, že git commit prošel
git commit && git push

# Spusti echo v případě, že git commit selhal (exit status je non-zero)
git commit || echo "Commit selhal"
```

## Funkce

- Sada příkazu, kterou lze po dobu vykonávaní scriptu opakovaně volat

```bash
get_name() {
  echo "Míša"
}

echo "Jmenuji se $(get_name)"
```

## Indexovaná pole

- Pole jsou v postatě napamované prvky na klíče
- V případě indexovaných polí představují klíče tzv. indexy, což jsou přirozená čísla

```bash
Stuff=('pomeranč' 'vetřelec' 'zásuvka')

# Vypíše n-tý prvek
echo ${Stuff[n]}

# Vypíše všechny prvky
echo ${Stuff[@]}

# Vypíše počet prvků v poli
echo ${#Stuff[@]}
```

## Podmínky

- Podmínky využívají příkaz if
- if, elif, else
- Nesmíme zapomínat na klíčové slovo `then`

```bash
## Kontrola připojení k intermetu
if ping -c 1 seznam.cz; then
  echo "Internety jedou!!!"
fi

## Kontrola proměnné (stringu)
TOP="kek"
if [[ -z "$TOP" ]]; then
  echo "Proměnná je prázdná"
elif [[ -n "$TOP" ]]; then
  echo "Proměnná je naplněná"
fi

## Kontrola existence souboru
if [[ -e "/tmp/soubor.txt" ]]; then
  echo "Soubor existuje!"
fi
```

## Cykly

- Cykly umožňují opakované spouštění příkazu specifikovaných v těle cyklu
- Používáme for, while (dokud pravda) a until (dokud nepravda)

```bash
# Cyklus v rozsahu 1 až 5
for i in {1..5}; do
  echo $i
done

# Nekonečný cyklus
while true; do
  echo "Smůla"
done

# Procházení jednotlivých řádku v souboru
< soubor.txt | while read line; do
  echo $line
done

# Opakováný pokus o provedení git pull
until git pull &> /dev/null
do
  echo "Git repozitář není dostupný, opakuji ..."
  sleep 1
done
```

## Subshells

- Subshells jsou oddělené instance v shell prostředí
- Jedná se v podstatě o otevření shell instance v rámci již existující shell instance (v našem případě bash)

```bash
(cd /tmp; echo "Nyní se nacházím v $PWD")
pwd # /home/ondra
```

## Pokročilá práce s bashem

### Souborové deskriptory

- Souborový deskriptor je klíč identifikující otevřený soubor nebo datový tok. Předává se jednotlivým procesům
- 0 představuje vstup (stdin), 1 normální výstup (stdout) a 2 chybový výstup (stderr)
- Se souborovými deskriptory lze manipulovat

```bash
# Přesměruje stdout do soubor.txt
find / -name linux 1>soubor.txt

# Přesměruje stderr do soubor.txt
find / -name linux 2>soubor.txt

# Přesměruje stderr do stdout
find / -name linux 2>&1
```

### Rozdíl mezi > a >>

- Operátor `>` přesměruje stdout a stderr do souboru, původní obsah je smazán
- Operátor `>>` přesměruje stdout a stderr do souboru, původní obsah je zanechán

```bash
# Původní obsah je smazán
find / -name linux > soubor.txt

# Původní obsah je zanechán
find / -name linux >> soubor.txt
```

### Pipes

- Pomocí pipes můžeme vzít výstup z jednoho programu a použit jej jako vstup k jinému programu
- Používáme svislou čáru `|` (pipe)

```bash
curl -s https://reqres.in/api/users | jq
```
