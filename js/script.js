document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    let result;
    if (unit === 'celsius') {
        result = celsiusToFahrenheit(temperatureInput);
    } else {
        result = fahrenheitToCelsius(temperatureInput);
    }

    document.getElementById('result').innerHTML = `Result: ${result}`;
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
