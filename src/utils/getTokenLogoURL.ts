import { ChainId } from '@vanilla-swap/sdk'

// KYLE-TODO look into how this works to get token pictures

const getTokenLogoURL = (address: string) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  let append = ''
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    append = '-test'
  } else if (parseInt(chainId, 10) === ChainId.DEVNET) {
    append = '-dev'
  }
  return `https://github.com/VanillaSwap/vanilla-swap-assets/tree/master/blockchains/velas${append}/assets/${address.toLowerCase()}/logo.png?raw=true`
}

export default getTokenLogoURL
