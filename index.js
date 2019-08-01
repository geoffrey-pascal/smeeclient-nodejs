const SmeeClient = require('smee-client')

const SMESOURCE=process.env.SMEESOURCE
const HTTPTARGET=process.env.HTTPTARGET

const smee = new SmeeClient({
  source: SMEESOURCE,
  target: HTTPTARGET,
  logger: console
})

const events = smee.start()

// Stop forwarding events
//events.close()
