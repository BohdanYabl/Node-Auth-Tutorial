const fetch = require('node-fetch');

async function getCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,litecoin,cardano,polkadot&vs_currencies=usd');
        const data = await response.json();
        
        // Виведення курсу криптовалют в консоль
        console.log("Ціни криптовалют:");
        console.log("Bitcoin (BTC):", data.bitcoin.usd);
        console.log("Ethereum (ETH):", data.ethereum.usd);
        console.log("Ripple (XRP):", data.ripple.usd);
        console.log("Litecoin (LTC):", data.litecoin.usd);
        console.log("Cardano (ADA):", data.cardano.usd);
        console.log("Polkadot (DOT):", data.polkadot.usd);
    } catch (error) {
        console.error('Помилка при отриманні курсу криптовалют:', error);
    }
}

// Виклик функції для отримання курсу криптовалют
getCryptoPrices();