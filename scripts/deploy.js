const fs = require('fs')
const path = require('path')
const { format } = require('date-fns')
const { publish } = require('gh-pages')
require('dotenv').config()

const PAGES_DOMAIN = 'devops.cosik.cz'
const DEST_PATH = path.join(process.cwd(), 'public')

if (!fs.existsSync(DEST_PATH)) {
  console.log('Dest path is absent. Skipping...')
  return 0
}

fs.writeFileSync(`${path.join(DEST_PATH, 'CNAME')}`, PAGES_DOMAIN)
console.log(`Created CNAME file pointing to ${PAGES_DOMAIN}`)

publish(
  DEST_PATH,
  {
    message: `Deploy ${format(new Date(), 'DD/MM/YYYY')}`,
  },
  () => {
    console.log(`Successfully deployed to ${PAGES_DOMAIN}`)
  }
)
