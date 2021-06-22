import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: '123swap',
  description:
    'The most popular AMM on BSC by user count! Earn 123b through yield farming or win it in the Lottery, then stake it in Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by 123swap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: '123swap Easter Battle',
    description: 'Register now for the 123swap Easter battle!',
    image: 'https://pancakeswap.finance/images/easter-battle.png',
  },
}
