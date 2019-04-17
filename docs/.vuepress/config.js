const KB_PATH_PREFIX = '/kb'
const HOMEWORK_PATH_PREFIX = '/homework'
const SIDEBARS = {
  default: [
    {
      title: 'První část',
      collapsable: false,
      children: [
        `${KB_PATH_PREFIX}/linux-installation`,
        `${KB_PATH_PREFIX}/linux-file-handling`,
        `${KB_PATH_PREFIX}/archiving`,
        `${KB_PATH_PREFIX}/configs`,
        `${KB_PATH_PREFIX}/cron-systemd`,
        `${KB_PATH_PREFIX}/bash-scripting`,
      ],
    },
    {
      title: 'Druhá část',
      collapsable: false,
      children: [
        `${KB_PATH_PREFIX}/centos`,
        `${KB_PATH_PREFIX}/dhcp-dns`,
        `${KB_PATH_PREFIX}/ports`,
        `${KB_PATH_PREFIX}/ssh`,
        `${KB_PATH_PREFIX}/nginx`,
        `${KB_PATH_PREFIX}/git`,
        `${KB_PATH_PREFIX}/node`,
      ],
    },
    {
      title: 'Třetí část',
      collapsable: false,
      children: [
        `${KB_PATH_PREFIX}/ansible`,
        `${KB_PATH_PREFIX}/gitlab`,
        `${KB_PATH_PREFIX}/docker`,
      ],
    },
  ],
  homework: [`${HOMEWORK_PATH_PREFIX}/1`],
}

module.exports = {
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  locales: {
    '/': {
      lang: 'cs-CZ',
      title: 'DevOps Academy KB',
      description: 'ProRocketeers DevOps Academy Knowledge Base',
    },
  },
  dest: 'public',
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'KB', link: '/' },
          { text: 'Domácí úkoly', link: `${HOMEWORK_PATH_PREFIX}/` },
        ],
        sidebar: {
          '/homework/': SIDEBARS.homework,
          '/': SIDEBARS.default,
        },
      },
    },
  },
}
