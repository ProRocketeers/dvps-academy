# Git

## Vysvětlení

- Nejrozšířenější VCS (nástroj pro správu verzí)
- Slouží k uchovávání historie veškerých změn (sledování změn ve zdrojových kódech během vývoje)
- Protokoly:
  - ssh:// - port 22
  - git:// - port 9418
  - http:// - port 80
  - https:// - port 443
- Budeme používat příkazovou řádku
- Možné grafické nadstavby
  - V rámci IDE (InteliJ Idea, Visual Studio Code)
  - Git Kraken
  - Sublime Merge
- Jiné VCS:
  - Apache SVN
  - Mercurial

## Registrace

- Vytvoření účtu na Gitlabu (gitlab.com/users/sign_in#register-pane)

## Vytvoření SSH klíče

- Hovoříme o páru privátní-veřejný klíč
- Privátní klíč (dešifrování dat) zůstává na serveru a nikdy jej nezvěřejňujeme. Sdělením může dojít ke kompromitaci
- Veřejný klíč (šifrování dat) používáme k autorizaci. Můžeme jej bez obav sdílet
- Klíč vytvoříme pomocí utility `ssh-keygen`
- Vygenerovaný veřejný klíč přiřadíme k účtu na Gitlabu (gitlab.com/profile/keys)

## Instalace

```bash
sudo apt install git
```

## Nastavení identity

**Uživatelské jméno**

```bash
git config --global user.name "Jmeno Prijmeni"
```

**Emailová adresa (přiřazená k účtu na Gitlabu)**

```bash
git config --global user.email jmeno@example.com
```

**Defaultní editor**

```bash
git config --global core.editor nano
```

Více informací [tady](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

## Forknutí projektu

- Repozitář: [https://gitlab.com/prorocketeers/prg-academy/prorockektears](https://gitlab.com/prorocketeers/prg-academy/prorockektears)
- Klikněte na tlačítko `fork`

## Práce s repozitářem

- Naklonujeme si repositář lokálně pomocí příkazu `git clone $URL`
- Provedeme úpravy, poté

```bash
git add .
git commit -m "Nejaky popis prace"
git push origin
```

## Větvení (branches)

- Odloučení od hlavní vývojové větve
- Oddělená práce na zdrojovém kódu

```bash
# Nova branch
git checkout -b nova-branch

# Existující branch
git checkout existujici-branch
```

## Merge/pull requests

- Požadavek pro nasazení změn do cílové větve, nebo v případě forknutého projektu do výchozího repozitáře
- Vytváří se v grafickém rozhraní

```bash
# Lokalni merge
git merge --no-ff nova-branch

# Rebase na vychozi vetev
git rebase vychozi-branch
```
