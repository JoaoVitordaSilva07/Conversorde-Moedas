const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // moeda a converter
    const currencyValueConverted = document.querySelector(".currency-value") // moeda convertida


    const dolarToday = 5.16
    const euroToday = 5.95
    const libraToDay = 6.99
    const bitcoinToDay = 330000

    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        //se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToDay)
    }

    if (currencySelect.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-Br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToDay)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dólar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)