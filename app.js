function upadateNumber(product, price, isIncreasing){
    const fruit2Input = document.getElementById(product + '-number');
    let fruit2Number = fruit2Input.value;
            if(isIncreasing){
                fruit2Number = parseInt(fruit2Number) + 1;
            }
            
    else if(fruit2Number > 0){
        fruit2Number = parseInt(fruit2Number) - 1;
         }
        
         fruit2Input.value = fruit2Number;
    // update case total 
    const fruit2Total = document.getElementById(product + '-total');
    fruit2Total.innerText = fruit2Number * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const fruit1Total = getInputvalue('fruit1') * 100;
        const fruit2Total = getInputvalue('fruit2') * 60;
        const fruit3Total = getInputvalue('fruit3') * 50;
        const fruit4Total = getInputvalue('fruit4') * 60;
        const fruit5Total = getInputvalue('fruit5') * 40;
        const subTotal = fruit1Total + fruit2Total+fruit3Total+fruit4Total+fruit5Total;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }

  document.getElementById('fruit1-plus').addEventListener('click',function(){
        upadateNumber('fruit1',100, true);
    });
    
    
    document.getElementById('fruit1-minus').addEventListener('click',function(){
        upadateNumber('fruit1',100 , false);
    });

document.getElementById('fruit2-plus').addEventListener('click',function(){
       
   upadateNumber('fruit2', 60 ,true);
});

document.getElementById('fruit2-minus').addEventListener('click',function(){
    

upadateNumber('fruit2', 60, false);
});



document.getElementById('fruit3-plus').addEventListener('click',function(){
   
upadateNumber('fruit3', 50 ,true);
});

document.getElementById('fruit3-minus').addEventListener('click',function(){

upadateNumber('fruit3', 50, false);
});



document.getElementById('fruit4-plus').addEventListener('click',function(){
   
upadateNumber('fruit4',60 ,true);
});

document.getElementById('fruit4-minus').addEventListener('click',function(){

upadateNumber('fruit4', 60, false);
});


document.getElementById('fruit5-plus').addEventListener('click',function(){
    
upadateNumber('fruit5', 40 ,true);
});

document.getElementById('fruit5-minus').addEventListener('click',function(){

upadateNumber('fruit5', 40, false);
});


