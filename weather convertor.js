const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertToUnitSelect = document.getElementById('convert-to-unit');
const convertButton = document.getElementById('convert');

convertButton.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    const convertToUnit = convertToUnitSelect.value;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature');
        return;
    }

    let convertedTemperature;

    switch (unit) {
        case 'celsius':
            switch (convertToUnit) {
                case 'fahrenheit':
                    convertedTemperature = temperature * 9/5 + 32;
                    alert(`${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`);
                    break;
                case 'kelvin':
                    convertedTemperature = temperature + 273.15;
                    alert(`${temperature}°C is equal to ${convertedTemperature.toFixed(2)}K`);
                    break;
                default:
                    alert('No conversion needed');
            }
            break;
        case 'fahrenheit':
            switch (convertToUnit) {
                case 'celsius':
                    convertedTemperature = (temperature - 32) * 5/9;
                    alert(`${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`);
                    break;
                case 'kelvin':
                    convertedTemperature = (temperature - 32) * 5/9 + 273.15;
                    alert(`${temperature}°F is equal to ${convertedTemperature.toFixed(2)}K`);
                    break;
                default:
                    alert('No conversion needed');
            }
            break;
        case 'kelvin':
            switch (convertToUnit) {
                case 'celsius':
                    convertedTemperature = temperature - 273.15 ;
                    alert(`${temperature}K is equal to ${convertedTemperature.toFixed(2)}°C`);
                    break;
                case 'fahrenheit':
                    convertedTemperature = (temperature - 273.15) * 9/5 + 32;
                    alert(`${temperature}K is equal to ${convertedTemperature.toFixed(2)}°F`);
                    break;
                default:
                    alert('No conversion needed');
            }
            break;
    }
});