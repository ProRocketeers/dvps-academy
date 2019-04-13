const KB_PATH_PREFIX = '/kb'
const HOMEWORK_PATH_PREFIX = '/homework'
const SIDEBARS = {
  default: [
    [`${KB_PATH_PREFIX}/linux-installation`, 'Instalace'],
    [`${KB_PATH_PREFIX}/linux-file-handling`, 'Práce se soubory'],
    [`${KB_PATH_PREFIX}/archiving`, 'Archivace'],
    [`${KB_PATH_PREFIX}/ports`, 'TCP/IP porty a protokoly'],
    [`${KB_PATH_PREFIX}/cron-systemd`, 'Cron, systémové služby'],
    [`${KB_PATH_PREFIX}/configs`, 'Typy konfiguračních souborů'],
    [`${KB_PATH_PREFIX}/git`, 'Git'],
    [`${KB_PATH_PREFIX}/node`, 'Node.js'],
    [`${KB_PATH_PREFIX}/nginx`, 'Nginx'],
    [`${KB_PATH_PREFIX}/centos`, 'CentOS'],
    [`${KB_PATH_PREFIX}/dhcp-dns`, 'DHCP, DNS'],
    [`${KB_PATH_PREFIX}/bash-scripting`, 'Bash Scripting'],
    [`${KB_PATH_PREFIX}/ansible`, 'Ansible'],
    [`${KB_PATH_PREFIX}/gitlab`, 'Gitlab CI/CD'],
  ],
  homework: [[`${HOMEWORK_PATH_PREFIX}/1`, 'První sada']],
}

module.exports = {
  title: 'DevOps Academy KB',
  description: 'ProRocketeers DevOps Academy Knowledge Base',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  dest: 'public',
  themeConfig: {
    nav: [
      { text: 'KB', link: '/' },
      { text: 'Domácí úkoly', link: `${HOMEWORK_PATH_PREFIX}/` },
    ],
    sidebar: {
      '/homework/': SIDEBARS.homework,
      '/': SIDEBARS.default,
    },
  },
}
