const PATH_PREFIX = '/kb'
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/dvps-academy/' : '/'

module.exports = {
  base: BASE_PATH,
  title: 'DevOps Academy KB',
  description: 'ProRocketeers DevOps Academy Knowledge Base',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  dest: 'public',
  themeConfig: {
    nav: [{ text: 'KB', link: '/' }],
    sidebar: [
      ['/', 'Úvod'],
      [`${PATH_PREFIX}/linux-installation`, 'Úvod a instalace'],
      [`${PATH_PREFIX}/linux-file-handling`, 'Práce se soubory'],
      [`${PATH_PREFIX}/archiving`, 'Archivace'],
      [`${PATH_PREFIX}/ports`, 'TCP/IP porty a protokoly'],
      [`${PATH_PREFIX}/cron-systemd`, 'Cron, systémové služby'],
      [`${PATH_PREFIX}/configs`, 'Typy konfiguračních souborů'],
      [`${PATH_PREFIX}/git`, 'Git'],
      [`${PATH_PREFIX}/node`, 'Node.js'],
      [`${PATH_PREFIX}/nginx`, 'Nginx'],
      [`${PATH_PREFIX}/centos`, 'CentOS'],
      [`${PATH_PREFIX}/dhcp-dns`, 'DHCP, DNS'],
      [`${PATH_PREFIX}/bash-scripting`, 'Bash Scripting'],
      [`${PATH_PREFIX}/ansible`, 'Ansible'],
    ],
  },
}
