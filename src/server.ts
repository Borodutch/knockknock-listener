import 'module-alias/register'
import 'source-map-support/register'

import { Gpio } from 'onoff'
import contract from '@/helpers/contract'

void (async () => {
  console.log('Started the listener...')
  contract.on(contract.filters.Knock, async (from) => {
    console.log(`Got knock from ${from}, unlocking the door...`)
    try {
      const pin = new Gpio(17, 'out')
      pin.writeSync(1)
      setTimeout(() => {
        console.log('Locking the door...')
        try {
          pin.writeSync(0)
        } catch (e) {
          console.log('Unable to connect with GPIO, cannot lock the door...')
        }
      }, 5000)
    } catch (e) {
      console.log('Unable to connect with GPIO, cannot unlock the door...')
    }
  })
  console.log('Listener started')
})()
