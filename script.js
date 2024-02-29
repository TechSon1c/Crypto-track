const cryptoUrl =  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,bitcoin-cash&vs_currencies=usd'


const btc = document.getElementById('btc')
const eth = document.getElementById('eth')
const rip = document.getElementById('rip')
const lit = document.getElementById('lit')
const errorr = document.getElementById('error')


async function crypto () {
    try {
        const cryptoApi = await fetch(cryptoUrl)
        const cryptoData = await cryptoApi.json();
        
        //fetching the only data i need which is prices
    
        const bitcoinPrice = cryptoData.bitcoin.usd;
        const ethereumPrice = cryptoData.ethereum.usd;
        const litecoinPrice = cryptoData.litecoin.usd;
        const ripplePrice = cryptoData.ripple.usd;
    
        btc.textContent = "Bitcoin: " + bitcoinPrice + "$"
        eth.textContent = "Etherum: " + ethereumPrice + "$"
        rip.textContent = "Litecoin: " + litecoinPrice + "$"
        lit.textContent = "Ripple: " + ripplePrice + "$"

                
        
    }catch (error) {
        errorr.textContent = "Error at fetching crypto, Please wait or refresh page", error 
    }


}


function typeText () {
    const display = document.getElementById('displayText')
    const input = document.getElementById('input')
    let value = input.value
    display.textContent = value;
}




function submit() {
    typeText()
    
}



function DisplayEth () {
    const displayTextEth = document.getElementById('displayTextEth')
    const inputeth = document.getElementById('inputeth')
    let value = inputeth.value
    displayTextEth.textContent = value
}

function submiteths() {
    DisplayEth()
}


crypto()















