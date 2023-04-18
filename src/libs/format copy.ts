const currencyFormat = (value: number, currency: string = "USD") => {
    return new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency,
            minimumFractionDigits: 0
        }).format(value)
}


export {
    currencyFormat
}