const https = require('https');

// Функція для отримання даних з API та обробки їх
function getExchangeRate() {
    // URL для отримання курсу долара
    const url = 'https://api.nbp.pl/api/exchangerates/rates/A/USD/?format=json';

    // Виконуємо запит GET до API
    https.get(url, (response) => {
        let data = '';

        // Отримуємо дані по частинах
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Обробляємо отримані дані після завершення отримання
        response.on('end', () => {
            // Парсимо отримані дані
            const jsonData = JSON.parse(data);
            // Отримуємо курс долара
            const exchangeRate = jsonData.rates[0].mid;
            console.log('Курс долара:', exchangeRate);
        });
    }).on('error', (error) => {
        console.error('Помилка запиту:', error.message);
    });
}

// Викликаємо функцію для отримання курсу долара
getExchangeRate();
