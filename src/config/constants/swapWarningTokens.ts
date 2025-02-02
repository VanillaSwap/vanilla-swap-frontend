import { Token } from '@vanilla-swap/sdk'
import tokens from 'config/constants/tokens'

const { bondly, safemoon } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{}

export default SwapWarningTokens
