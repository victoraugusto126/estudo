// Conversor de Temperatura: Celsius para Fahrenheit

// Função para converter Celsius em Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Função principal
function main() {
    console.log("Bem-vindo ao conversor de temperaturas!");

    // Solicita a temperatura em Celsius ao usuário
    const tempC = parseFloat(prompt("Digite a temperatura em Celsius: "));
    if (isNaN(tempC)) {
        console.log("Por favor, insira um número válido.");
        return;
    }

    // Converte para Fahrenheit e exibe o resultado
    const tempF = celsiusToFahrenheit(tempC);
    console.log(`${tempC}°C é igual a ${tempF}°F`);
}

// Executa a função principal
main();
