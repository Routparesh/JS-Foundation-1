const customerCart = [{
    'item':1,
    'unitPrice': 32,
    'Quantity': 10
},{
    'item':2,
    'unitPrice': 22,
    'Quantity': 12  
},{
    'item':3,
    'unitPrice': 42,
    'Quantity': 21
}]

const totalBill = customerCart.reduce((acc, item) => {
    return acc + item.unitPrice * item.Quantity;
}, 0);

console.log(`Total Bill: ${totalBill}`);


