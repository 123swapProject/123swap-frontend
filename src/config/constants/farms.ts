import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0xe484CDBAC2C220BE60cDAeDe794FDeFD425B6B0B',
      56: '0xe484CDBAC2C220BE60cDAeDe794FDeFD425B6B0B',
    },
    token: tokens.syrup,
    quoteToken: tokens.syrup,
  },
    {
    pid: 1,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0xb6c6e2763dced1f769958840a3edd7c36ffa05bd',
      56: '0xb6c6e2763dced1f769958840a3edd7c36ffa05bd',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
]

export default farms
