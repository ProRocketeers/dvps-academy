(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{220:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("h2",{attrs:{id:"vysvetleni"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vysvetleni"}},[t._v("#")]),t._v(" Vysvětlení")]),t._v(" "),s("ul",[s("li",[t._v("Webový server")]),t._v(" "),s("li",[t._v("Pracuje s protokoly HTTP, HTTPS, SMTP, POP3, IMAP")])]),t._v(" "),s("h2",{attrs:{id:"instalace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalace"}},[t._v("#")]),t._v(" Instalace")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])]),s("ul",[s("li",[t._v("Pomocí systemctl zjistíme, zda služba běží")]),t._v(" "),s("li",[t._v("V prohlížeči (nebo příkazem "),s("code",[t._v("curl")]),t._v(") zobrazíme http://localhost")])]),t._v(" "),s("h2",{attrs:{id:"pracovni-slozky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pracovni-slozky"}},[t._v("#")]),t._v(" Pracovní složky")]),t._v(" "),s("ul",[s("li",[t._v("Servírované dokumenty: /var/www/html")]),t._v(" "),s("li",[t._v("Nastavení vlastnictví a permisí "),s("code",[t._v("sudo chown -R $USER:$USER /var/www/html")]),t._v(" a "),s("code",[t._v("sudo chmod -R 755 /var/www/html")])]),t._v(" "),s("li",[t._v("Konfigurační soubory: /etc/nginx (hlavní konfigurační soubor "),s("code",[t._v("/etc/nginx/nginx.conf")]),t._v(")")])]),t._v(" "),s("h2",{attrs:{id:"nastaveni-reversni-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nastaveni-reversni-proxy"}},[t._v("#")]),t._v(" Nastavení reversní proxy")]),t._v(" "),s("ul",[s("li",[t._v("Nahradíme defaulní server blok - na Ubuntu nalezneme v "),s("code",[t._v("/etc/nginx/sites-enabled/default")])])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3333")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3331")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("Více informací o reversní proxy "),s("a",{attrs:{href:"https://www.root.cz/clanky/nginx-jako-reverzni-proxy-pro-apache",target:"_blank",rel:"noopener noreferrer"}},[t._v("tady"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Více informací o server blocích "),s("a",{attrs:{href:"https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("tady"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);