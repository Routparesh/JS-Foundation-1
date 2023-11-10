function bill (totalDishPrice, totalPerson){
    var total={
        'Total Bill ': totalDishPrice,
        'perPerson': totalDishPrice /totalPerson
    }

    return total;
};


console.log(bill(1000, 5))