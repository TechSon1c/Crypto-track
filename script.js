const cryptoUrl =  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,bitcoin-cash,cardano,polkadot,chainlink,solana,binancecoin,stellar,dogecoin,usd-coin,uniswap,terra&vs_currencies=usd'



const btc = document.getElementById('btc')
const eth = document.getElementById('eth')
const rip = document.getElementById('rip')
const lit = document.getElementById('lit')
// new coins
const car = document.getElementById('car')
const pol = document.getElementById('pol')
const chain = document.getElementById('chain')
const sola = document.getElementById('sola')
const doge = document.getElementById('doge')


async function crypto () {
    try {
        
        const cryptoApi = await fetch(cryptoUrl)
        const cryptoData = await cryptoApi.json();
        
        //fetching the only data i need which is prices
    
        const bitcoinPrice = cryptoData.bitcoin.usd;
        const ethereumPrice = cryptoData.ethereum.usd;
        const litecoinPrice = cryptoData.litecoin.usd;
        const ripplePrice = cryptoData.ripple.usd;
        // some new cryptos
        const cardano = cryptoData.cardano.usd;
        const polkadot = cryptoData.polkadot.usd;
        const chainlink = cryptoData.chainlink.usd;
        const solana = cryptoData.solana.usd;
        const dogecoin = cryptoData.dogecoin.usd;
    
        btc.textContent = "Bitcoin: " + bitcoinPrice + "$"
        eth.textContent = "Etherum: " + ethereumPrice + "$"
        rip.textContent = "Litecoin: " + litecoinPrice + "$"
        lit.textContent = "Ripple: " + ripplePrice + "$"
        // new coins
        car.textContent = "Cardano: " + cardano + "$"
        pol.textContent = "Polkadot: " + polkadot + "$"
        chain.textContent = "ChainLink: " + chainlink + "$"
        doge.textContent = "Dogecoin: " + solana + "$"
        sola.textContent = "Solana: " + dogecoin + "$"

                
        
    }catch (error) {
        errorr.textContent = "Error at fetching crypto, Please wait or refresh page", error 
    }


}

// scroll // 









crypto()















