import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x73DE7CaDE543ed3d10930615E56D600e2bEeeB66',
    },
    token: tokens.syrup,
    quoteToken: tokens.syrup,
  },
  // {
  //   pid: 1,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
  //     56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
    {
    pid: 2,
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
