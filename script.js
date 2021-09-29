const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

const convertor = ()=>{
    const currencyone = currencyOne.value;
    const currencytwo = currencyTwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/ad1d6b9961730a412d567217/latest/${currencyone}`)
    .then(response => response.json())
    .then(data => {
        const price = data.conversion_rates[currencytwo]
        rate.innerText = `1 ${currencyone} = ${currencytwo} of ${price}`
        amountTwo.value = (amountOne.value * price).toFixed(2)
        })
        .catch(err => {
            console.error(err)
        })
}
   



currencyOne.addEventListener('change', convertor)

amountOne.addEventListener('input',convertor)

currencyTwo.addEventListener('change',convertor)

amountTwo.addEventListener('input',convertor) 

swap.addEventListener('click', () => {
   const swapping = currencyOne.value
   currencyOne.value = currencyTwo.value
   currencyTwo.value = swapping
   convertor();
})
convertor();