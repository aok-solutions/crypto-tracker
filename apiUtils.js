let CryptoCompare = CryptoCompare || {}

CryptoCompare.STATIC = CryptoCompare.STATIC || {}

CryptoCompare.STATIC.TYPE = {
  'TRADE': '0',
  'FEEDNEWS': '1',
  'CURRENT': '2',
  'LOADCOMPLETE': '3',
  'COINPAIRS': '4',
  'CURRENTAGG': '5',
  'TOPLIST': '6',
  'TOPLISTCHANGE': '7',
  'ORDERBOOK': '8',
  'FULLORDERBOOK': '9',
  'ACTIVATION': '10',
  'FULLVOLUME': '11',
  'TRADECATCHUP': '100',
  'NEWSCATCHUP': '101',
  'TRADECATCHUPCOMPLETE': '300',
  'NEWSCATCHUPCOMPLETE': '301',
  'BADFORMAT': '401'
}

CryptoCompare.PRICEUP = 1
CryptoCompare.PRICEDOWN = 2

CryptoCompare.CURRENT = CryptoCompare.CURRENT || {}
CryptoCompare.CURRENT.KEYS = "SubscriptionId~ExchangeName~FromCurrency~ToCurrency~Flag~Price~LastUpdate~LastVolume~LastVolumeTo~LastTradeId~Volume24h~Volume24hTo~LastMarket"


CryptoCompare.FULLVOLUME = CryptoCompare.FULLVOLUME || {}
CryptoCompare.FULLVOLUME.KEYS = "Type~ExchangeName~FromCurrency~ToCurrency~Flag~Price~LastUpdate~LastVolume~LastVolumeTo~LastTradeId~Volume24h~Volume24hTo~MaskInt"


export default CryptoCompare
