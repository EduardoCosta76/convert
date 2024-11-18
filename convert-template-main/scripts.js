// Currency of the day
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtaining the elements
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulating the input amount to receive only numbers
amount.addEventListener('input', () => {
    
    const hasCharartersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharartersRegex, "")
})

// Capturing the submit event in the form
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, "US$")
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Function to convert the currency
function convertCurrency(amount, price, symbol) {
    try {
        // Showing the selected currency.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calculate the total.
        let total = amount * price


        // Verify if the result is not a number.
        if (isNaN(total)) {
            return alert('Please, enter the correct number.')
        }
            

        // Formating the total value.
        total = formatCurrencyBRL(total).replace('R$', '')

        // Show the total result.
        result.textContent = `${total} Reais`
        
        // Apply the class that show the footer to show the result.
        footer.classList.add("show-result")

    } catch (error) {
        // Remove the class from the footer to hide the result.
        footer.classList.remove("show-result")
        
        console.log(error)
        alert('It was not possible to make the convertion. Try again later.')
    }
}


// Formating the currency in Brazilian Real
function formatCurrencyBRL(value) {
    // Converting to number to use the toLocaleString to show the BRL pattern (R$ 0.00).
    return Number(value).toLocaleString("pt-BR", {
        style: 'currency',
        currency: 'BRL',
    })
}

