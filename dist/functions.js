"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.5;
}
calculateTax(10000, 2023);
