import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x843819dF7e79C48C5F9Ca84e371c1B4464AB77BD',
      56: '0x843819dF7e79C48C5F9Ca84e371c1B4464AB77BD',
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
