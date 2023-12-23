module.exports = {
  chainID: 'migaloo-1',
  lcd: 'https://lcd-migaloo.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: { uwhale: 1 },
  prefix: 'migaloo',
  coinType: '118',
  baseAsset: 'uwhale',
  name: 'Migaloo',
  icon: process.env.CF_PAGES_URL + '/img/chains/Migaloo.svg',
  alliance: true,
  channels: {
    'phoenix-1': 'channel-0',
    'chihuahua-1': 'channel-10',
    'comdex-1': 'channel-12',
    'kaiyo-1': 'channel-8',
    'osmosis-1': 'channel-5',
    'pacific-1': 'channel-52',
    'injective-1': 'channel-3',
  },
  explorer: {
    address: 'https://ping.pub/Migaloo/account/{}',
    tx: 'https://ping.pub/Migaloo/tx/{}',
    validator: 'https://ping.pub/Migaloo/staking/{}',
    block: 'https://ping.pub/Migaloo/block/{}',
  },
  tokens: [
    {
      token: 'uwhale',
      symbol: 'WHALE',
      name: 'Whale',
      icon: process.env.CF_PAGES_URL + '/img/coins/Whale.svg',
      decimals: 6,
    },
    {
      token:
        'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
      symbol: 'ampWHALE',
      name: 'ERIS Amplified WHALE',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampWHALE.svg',
      decimals: 6,
      lsd: 'uwhale',
    },
    {
      token:
        'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
      symbol: 'bWHALE',
      name: 'boneWHALE',
      icon: process.env.CF_PAGES_URL + '/img/coins/bWHALE.png',
      decimals: 6,
      lsd: 'uwhale',
    },
    {
      token:'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      symbol: 'mUSDC',
      name: 'mUSDC',
      icon: process.env.CF_PAGES_URL + '/img/coins/mUSDC.svg',
      decimals: 6
    },
    {
      token:'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
      symbol: 'ASH',
      name: 'ASH',
      icon: process.env.CF_PAGES_URL + '/img/coins/ash.svg',
      decimals: 6
    },
    {
      token:'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
      symbol: 'RAC',
      name: 'RAC',
      icon: process.env.CF_PAGES_URL + '/img/coins/RAC.png',
      decimals: 6
    }
  ],
}
