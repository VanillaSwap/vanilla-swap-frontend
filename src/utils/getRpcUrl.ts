import sample from 'lodash/sample'
import { ChainId } from '@vanilla-swap/sdk'
import NETWORK_URLS from 'config/constants/networks'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE]

const getNodeUrl = () => {
  return NETWORK_URLS[process.env.REACT_APP_CHAIN_ID]
}

export default getNodeUrl
