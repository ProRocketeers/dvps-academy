const fs = require('fs')
const path = require('path')
const { format } = require('date-fns')
const { publish } = require('gh-pages')
require('dotenv').config()

const GITHUB_PAGES = 'https://prorocketeers.github.io/dvps-academy'
const GITHUB_REPO = 'github.com:ProRocketeers/dvps-academy.git'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const DEST_PATH = path.join(process.cwd(), 'public')

if (!GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN is undefined or empty')
}

if (!fs.existsSync(DEST_PATH)) {
  console.log('Dest path is absent. Skipping...')
  return 0
}

publish(
  DEST_PATH,
  {
    repo: `https://${GITHUB_TOKEN}@${GITHUB_REPO}`,
    message: `Deploy ${format(new Date(), 'DD/MM/YYYY')}`,
    silent: true,
  },
  () => {
    console.log(`Successfully deployed to ${GITHUB_PAGES}`)
  }
)
