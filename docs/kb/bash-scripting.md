# Bash Scripting

> Work In Progress

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
