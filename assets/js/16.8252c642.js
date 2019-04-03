(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{219:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("h2",{attrs:{id:"vysvetleni"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vysvetleni","aria-hidden":"true"}},[a._v("#")]),a._v(" Vysvětlení")]),a._v(" "),s("ul",[s("li",[a._v("Webový server")]),a._v(" "),s("li",[a._v("Pracuje s protokoly HTTP, HTTPS, SMTP, POP3, IMAP")])]),a._v(" "),s("h2",{attrs:{id:"instalace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalace","aria-hidden":"true"}},[a._v("#")]),a._v(" Instalace")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n")])])]),s("ul",[s("li",[a._v("Pomocí systemctl zjistíme, zda služba běží")]),a._v(" "),s("li",[a._v("V prohlížeči (nebo příkazem "),s("code",[a._v("curl")]),a._v(") zobrazíme http://localhost")])]),a._v(" "),s("h2",{attrs:{id:"pracovni-slozky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pracovni-slozky","aria-hidden":"true"}},[a._v("#")]),a._v(" Pracovní složky")]),a._v(" "),s("ul",[s("li",[a._v("Servírované dokumenty: /var/www/html")]),a._v(" "),s("li",[a._v("Nastavení vlastnictví a permisí "),s("code",[a._v("sudo chown -R $USER:$USER /var/www/html")]),a._v(" a "),s("code",[a._v("sudo chmod -R 755 /var/www/html")])]),a._v(" "),s("li",[a._v("Konfigurační soubory: /etc/nginx (hlavní konfigurační soubor "),s("code",[a._v("/etc/nginx/nginx.conf")]),a._v(")")])]),a._v(" "),s("h2",{attrs:{id:"nastaveni-reversni-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nastaveni-reversni-proxy","aria-hidden":"true"}},[a._v("#")]),a._v(" Nastavení reversní proxy")]),a._v(" "),s("ul",[s("li",[a._v("Nahradíme defaulní server blok - na Ubuntu nalezneme v "),s("code",[a._v("/etc/nginx/sites-enabled/default")])])]),a._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("server_name")]),a._v(" academy"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("jmeno"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cosik"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("For "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Upgrade "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_upgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Connection "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$server_port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Více informací o reversní proxy "),s("a",{attrs:{href:"https://www.root.cz/clanky/nginx-jako-reverzni-proxy-pro-apache",target:"_blank",rel:"noopener noreferrer"}},[a._v("tady"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("Více informací o server blocích "),s("a",{attrs:{href:"https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks",target:"_blank",rel:"noopener noreferrer"}},[a._v("tady"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);