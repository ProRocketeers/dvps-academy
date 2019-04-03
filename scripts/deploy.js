const fs = require('fs')
const path = require('path')
const { format } = require('date-fns')
const { publish } = require('gh-pages')
require('dotenv').config()

const GITHUB_PAGES = 'http://devops.cosik.cz'
const DEST_PATH = path.join(process.cwd(), 'public')

if (!fs.existsSync(DEST_PATH)) {
  console.log('Dest path is absent. Skipping...')
  return 0
}

publish(
  DEST_PATH,
  {
    message: `Deploy ${format(new Date(), 'DD/MM/YYYY')}`,
  },
  () => {
    console.log(`Successfully deployed to ${GITHUB_PAGES}`)
  }
)
