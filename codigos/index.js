// Função para converter Celsius em Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Função para converter Fahrenheit em Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Função principal
function main() {
    console.log("Bem-vindo ao conversor de temperaturas!");

    // Pergunta ao usuário qual conversão ele deseja fazer
    const tipoConversao = prompt("Escolha o tipo de conversão: \n1. Celsius para Fahrenheit \n2. Fahrenheit para Celsius");

    let tempConvertida;

    if (tipoConversao === "1") {
        // Solicita a temperatura em Celsius ao usuário
        const tempC = parseFloat(prompt("Digite a temperatura em Celsius: "));
        if (isNaN(tempC)) {
            console.log("Por favor, insira um número válido.");
            return;
        }
        // Converte para Fahrenheit e exibe o resultado
        tempConvertida = celsiusToFahrenheit(tempC);
        console.log(`${tempC}°C é igual a ${tempConvertida}°F`);
    } else if (tipoConversao === "2") {
        // Solicita a temperatura em Fahrenheit ao usuário
        const tempF = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
        if (isNaN(tempF)) {
            console.log("Por favor, insira um número válido.");
            return;
        }
        // Converte para Celsius e exibe o resultado
        tempConvertida = fahrenheitToCelsius(tempF);
        console.log(`${tempF}°F é igual a ${tempConvertida}°C`);
    } else {
        console.log("Opção inválida. Por favor, escolha 1 ou 2.");
    }
}

// Executa a função principal
main();
