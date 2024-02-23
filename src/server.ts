import 'module-alias/register'
import 'source-map-support/register'

import contract from '@/helpers/contract'

void (async () => {
  console.log('Started the listener...')
  contract.on(contract.filters.Knock, async (from) => {
    // Put the code to open the door here
    console.log(`Got knock from ${from}`)
  })
  console.log('Listener started')
})()
