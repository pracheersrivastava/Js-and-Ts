const cart = ['shoes', 'socks', 'pants', 'shirts'];


function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            const err = new Error('Invalid cart');
            reject(err);
        }
        const orderId = 12345;
        if(orderId) {
            resolve(orderId);
        }
    }) 
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if(!orderId) {
            const err = new Error('Invalid order ID');
            reject(err);
        }
        // Simulate payment processing
        setTimeout(() => {
            resolve(`Payment successful for order ID: ${orderId}`);
        }, 2000);
    });
}

function showOrderSummary(orderId) {
    return new Promise((resolve, reject) => {
        if(!orderId) {
            const err = new Error('Invalid order ID');
            reject(err);
        }
        // Simulate showing order summary
        setTimeout(() => {
            resolve(`Order summary for order ID: ${orderId}`);
        }, 1000);
    });
}

function updateWallet(orderId) {
    return new Promise((resolve, reject) => {
        if(!orderId) {
            const err = new Error('Invalid order ID');
            reject(err);
        }
        // Simulate updating wallet
        setTimeout(() => {
            resolve(`Wallet updated for order ID: ${orderId}`);
        }, 1500);
    });
}


function validateCart(cart) {
    return true;
}


createOrder(cart)
    .then((orderId) => {
        console.log(`Order created with ID: ${orderId}`);
        // Pass both orderId and paymentMessage forward
        return proceedToPayment(orderId).then((paymentMessage) => {
            console.log(paymentMessage);
            return orderId; // pass orderId forward
        });
    })
    .then((orderId) => {
        return showOrderSummary(orderId).then((summaryMessage) => {
            console.log(summaryMessage);
            return orderId; // pass orderId forward
        });
    })
    .then((orderId) => {
        return updateWallet(orderId).then((walletMessage) => {
            console.log(walletMessage);
        });
    })
    .catch((error) => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Order process completed.');
    });
