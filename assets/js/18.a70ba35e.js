(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{222:function(a,e,t){"use strict";t.r(e);var s=t(2),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[a._v("#")]),a._v(" Git")]),a._v(" "),t("h2",{attrs:{id:"vysvetleni"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vysvetleni","aria-hidden":"true"}},[a._v("#")]),a._v(" Vysvětlení")]),a._v(" "),t("ul",[t("li",[a._v("Nejrozšířenější VCS (nástroj pro správu verzí)")]),a._v(" "),t("li",[a._v("Slouží k uchovávání historie veškerých změn (sledování změn ve zdrojových kódech během vývoje)")]),a._v(" "),t("li",[a._v("Protokoly:\n"),t("ul",[t("li",[a._v("ssh:// - port 22")]),a._v(" "),t("li",[a._v("git:// - port 9418")]),a._v(" "),t("li",[a._v("http:// - port 80")]),a._v(" "),t("li",[a._v("https:// - port 443")])])]),a._v(" "),t("li",[a._v("Budeme používat příkazovou řádku")]),a._v(" "),t("li",[a._v("Možné grafické nadstavby\n"),t("ul",[t("li",[a._v("V rámci IDE (InteliJ Idea, Visual Studio Code)")]),a._v(" "),t("li",[a._v("Git Kraken")]),a._v(" "),t("li",[a._v("Sublime Merge")])])]),a._v(" "),t("li",[a._v("Jiné VCS:\n"),t("ul",[t("li",[a._v("Apache SVN")]),a._v(" "),t("li",[a._v("Mercurial")])])])]),a._v(" "),t("h2",{attrs:{id:"registrace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registrace","aria-hidden":"true"}},[a._v("#")]),a._v(" Registrace")]),a._v(" "),t("ul",[t("li",[a._v("Vytvoření účtu na Gitlabu (gitlab.com/users/sign_in#register-pane)")])]),a._v(" "),t("h2",{attrs:{id:"vytvoreni-ssh-klice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vytvoreni-ssh-klice","aria-hidden":"true"}},[a._v("#")]),a._v(" Vytvoření SSH klíče")]),a._v(" "),t("ul",[t("li",[a._v("Hovoříme o páru privátní-veřejný klíč")]),a._v(" "),t("li",[a._v("Privátní klíč (dešifrování dat) zůstává na serveru a nikdy jej nezvěřejňujeme. Sdělením může dojít ke kompromitaci")]),a._v(" "),t("li",[a._v("Veřejný klíč (šifrování dat) používáme k autorizaci. Můžeme jej bez obav sdílet")]),a._v(" "),t("li",[a._v("Klíč vytvoříme pomocí utility "),t("code",[a._v("ssh-keygen")])]),a._v(" "),t("li",[a._v("Vygenerovaný veřejný klíč přiřadíme k účtu na Gitlabu (gitlab.com/profile/keys)")])]),a._v(" "),t("h2",{attrs:{id:"instalace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalace","aria-hidden":"true"}},[a._v("#")]),a._v(" Instalace")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v("\n")])])]),t("h2",{attrs:{id:"nastaveni-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nastaveni-identity","aria-hidden":"true"}},[a._v("#")]),a._v(" Nastavení identity")]),a._v(" "),t("p",[t("strong",[a._v("Uživatelské jméno")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Jmeno Prijmeni"')]),a._v("\n")])])]),t("p",[t("strong",[a._v("Emailová adresa (přiřazená k účtu na Gitlabu)")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.email jmeno@example.com\n")])])]),t("p",[t("strong",[a._v("Defaultní editor")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global core.editor "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v("\n")])])]),t("p",[a._v("Více informací "),t("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup",target:"_blank",rel:"noopener noreferrer"}},[a._v("tady"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"forknuti-projektu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#forknuti-projektu","aria-hidden":"true"}},[a._v("#")]),a._v(" Forknutí projektu")]),a._v(" "),t("ul",[t("li",[a._v("Repozitář: "),t("a",{attrs:{href:"https://gitlab.com/prorocketeers/prg-academy/prorockektears",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitlab.com/prorocketeers/prg-academy/prorockektears"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("Klikněte na tlačítko "),t("code",[a._v("fork")])])]),a._v(" "),t("h2",{attrs:{id:"prace-s-repozitarem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prace-s-repozitarem","aria-hidden":"true"}},[a._v("#")]),a._v(" Práce s repozitářem")]),a._v(" "),t("ul",[t("li",[a._v("Naklonujeme si repositář lokálně pomocí příkazu "),t("code",[a._v("git clone $URL")])]),a._v(" "),t("li",[a._v("Provedeme úpravy, poté")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Nejaky popis prace"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin\n")])])]),t("h2",{attrs:{id:"vetveni-branches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vetveni-branches","aria-hidden":"true"}},[a._v("#")]),a._v(" Větvení (branches)")]),a._v(" "),t("ul",[t("li",[a._v("Odloučení od hlavní vývojové větve")]),a._v(" "),t("li",[a._v("Oddělená práce na zdrojovém kódu")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Nova branch")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b nova-branch\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Existující branch")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout existujici-branch\n")])])]),t("h2",{attrs:{id:"merge-pull-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-pull-requests","aria-hidden":"true"}},[a._v("#")]),a._v(" Merge/pull requests")]),a._v(" "),t("ul",[t("li",[a._v("Požadavek pro nasazení změn do cílové větve, nebo v případě forknutého projektu do výchozího repozitáře")]),a._v(" "),t("li",[a._v("Vytváří se v grafickém rozhraní")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Lokalni merge")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge --no-ff nova-branch\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Rebase na vychozi vetev")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase vychozi-branch\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);