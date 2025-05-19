function calculateTax(income: number, taxYear = 2022) : number{
    if (taxYear < 2022)
        return income*1.2;
    return income*1.5;
}

calculateTax(10000, 2023)