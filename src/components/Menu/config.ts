import {MenuEntry} from '@123swap/uikit'

const config: MenuEntry[] = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "https://exchange.123swap.finance/",
    },
    {
        label: "123swap",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.123swap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.123swap.finance/#/pool",
            },
        ],
    },
    {
        label: "123yield",
        icon: "PoolIcon",
        items: [
            {
                label: "Farms",
                href: "/farms",
            },
            {
                label: "Pools",
                href: "/syrup",
            },
        ]
    },

    {
        label: "123bridge",
        icon: "BridgeIcon",
        href: "#",
    },
    {
        label: "123nft",
        icon: "NftIcon",
        href: "#",
    },
    {
        label: "123lend&borrow",
        icon: "BorrowIcon",
        href: "#",
    },
    {
        label: "123gov",
        icon: "GovIcon",
        href: "#",
    },
    {
        label: 'More',
        icon: 'MoreIcon',
        items: [
            // {
            //   label: 'Contact',
            //   href: 'https://docs.pancakeswap.finance/contact-us',
            // },
            // {
            //   label: 'Voting',
            //   href: 'https://voting.pancakeswap.finance',
            // },
            {
                label: 'Github',
                href: 'https://github.com/123swapProject',
            },
            // {
            //   label: 'Docs',
            //   href: 'https://docs.pancakeswap.finance',
            // },
            // {
            //   label: 'Blog',
            //   href: 'https://pancakeswap.medium.com',
            // },
            // {
            //   label: 'Merch',
            //   href: 'https://pancakeswap.creator-spring.com/',
            // },
        ],
    },
]

export default config

