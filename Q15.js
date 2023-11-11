const percentage = (pecentage,totalValue)=>{
    const price = Math.round((pecentage*totalValue)/100) ;
    const discountPrice = totalValue-price;
    console.log(`Product origin price: ${totalValue}, discount price: ${discountPrice}`)
}

percentage(30,599)