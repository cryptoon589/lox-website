/* Edit these values before publishing. Do not guess or invent official URLs. */
window.LOX_CONFIG = {
  links: {
    firstledger: 'https://firstledger.net/token/r9kzhatDuUyAxAYbbsZAbs8nLr3t7sa6Wk/LOX',
    x: 'https://x.com/Live_off_XRP',
    telegram: 'https://t.me/Live_off_XRP',
    dex: 'https://dexscreener.com/xrpl/lox.r9kzhatduuyaxaybbszabs8nlr3t7sa6wk_xrp',
    dexApi: 'https://api.dexscreener.com/latest/dex/pairs/xrpl/lox.r9kzhatduuyaxaybbszabs8nlr3t7sa6wk_xrp',
    coinmun: 'https://coinmun.com/coins/live-off-xrp',
    nfts: '', // Upcoming LOX Legacy NFTs — no link announced yet
    locks: '', // Official LOCKS NFT/holder information URL
    explorer: 'https://livenet.xrpl.org/'
  },
  xrpl: {
    websocket: 'wss://xrplcluster.com/',
    burnWallet: 'raKfXmtH4QL89YEfijD5wRrJe1dDDtDk1Q', // Designated LOX reserve wallet for future burns
    burnWalletIsProvablyInaccessible: false, // This is a reserve wallet, NOT a provably inaccessible burn address
    issuer: 'r9kzhatDuUyAxAYbbsZAbs8nLr3t7sa6Wk', // From supplied First Ledger URL
    currency: 'LOX', // From supplied First Ledger URL
    originalSupply: 1000000, // Historical reference; confirm with issuer documentation
    // Verified permanent burns only. Never infer burned supply from issuer outstanding obligations alone.
    verifiedBurns: [
      // { amount: 10000, txHash: '64_CHARACTER_TRANSACTION_HASH', date: '2026-01-01', note: 'Burn #1' }
    ]
  }
};