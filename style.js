let totalPrice = 0;
let discount = 20;
let total = 0;
    function getProduct(product){
        const productPrice = product.children[3].innerText.split(' ')[0]
        const prductValue = Number( productPrice)
        const productAmount = document.getElementById('totalPrice')
        totalPrice += prductValue;
        productAmount.innerText = totalPrice.toFixed(2);

        const productValue =  product.children[2].innerText
        const p = document.createElement('p');
        const productName = document.getElementById('productName');
        const count = productName.childElementCount;
        p.innerHTML =`${count + 1}. ${productValue}`
        productName.appendChild(p);
        
        const totalAmount = document.getElementById('total');
        totalAmount.innerText = totalPrice.toFixed(2);

        if(totalPrice > 0){
            const buttonMake = document.getElementById('makeButton')
            buttonMake.disabled = false;
            buttonMake.style.backgroundColor ='#E527B2'
        }
        if(totalPrice >= 200){
            const couponNumber = document.getElementById('coupon');
            couponNumber.style.backgroundColor = '#E527B2'
            couponNumber.disabled = false;
        }
    }
    document.getElementById('coupon').addEventListener('click', function(){

        const cuponField = document.getElementById('coupon-filed');
        const cuponValue = cuponField.value;
        cuponField.value = ''
        if(cuponValue === "SELL200"){
            const TotalValueNum = document.getElementById('total');
        const totalAmountValue = (totalPrice *(100 - discount)) /100;
        TotalValueNum.innerText = totalAmountValue.toFixed(2);

        const discountValueNum = document.getElementById('discountPrice');
        const discountTk = totalPrice - totalAmountValue;
        discountValueNum.innerText = discountTk.toFixed(2);
        }
        cuponField.value = ''
    })

    // document.getElementById("productClick1").addEventListener('click', function(){
    //     const cardName = document.getElementById("productName");
    //     const cardvalue = cardName.innerText;
    //     const li = document.createElement("p");
    //     li.innerText = cardvalue;
    //     const selectedItemContainer = document.getElementById("selected-items");
    //     selectedItemContainer.appendChild(li);
    
    //    const sumTk = document.getElementById('productPrice')
    // //    console.log(sumTk.parentNode.childNodes[7].innerText.split(' ')[0])
    //    const sumTkValue = sumTk.innerText.split(' ')[0];
    // //    console.log(sumTkValue);
    //    const productPriceNumber = Number(sumTkValue);
    //    const totalPriceAmount = document.getElementById('totalPrice');
    //    totalValue += productPriceNumber;
    //    totalPriceAmount.innerText = totalValue.toFixed(2);
    //    const totalTk = document.getElementById("totalPrice");
    // //    console.log(totalTk);
    //    totalTk.innerText = sumTkValue;

    //    if(totalValue>0){
    //     const makechase = document.getElementById('makeButton');
    //     makechase.disabled = false;
    //     makechase.style.backgroundColor='#E52782';
    //     makechase.style.cursor= 'pointer';
    //    }

    //    if(totalValue>=200){
    //     const cuponValue = document.getElementById('cuponCode');
    //     cuponValue.disabled = false;
    //     cuponValue.style.backgroundColor = "#E52782";
    //     cuponValue.style.cursor = 'pointer';
    //    }

    //    document.getElementById("cuponCode").addEventListener('click',function(){
    //     console.log('fffff')
    //     const inputValue = document.getElementById('inputFleld');
    //     const inputFleldValue = inputValue.value;
    //     if(inputValue === ''){
    //         alert('Please Enter a Valid CuponCode');
    //     } 
    //     else if(inputFleldValue ===SELL200){
    //         const totalvalue = document.getElementById('totalAmount');
    //         const totalvalueAndDiscount = totalValue * (100 - totalDiscount) /100;
    //         totalvalue.innerText = totalvalueAndDiscount.toFixed(2);
    //         const discountValue = document.getElementById('discountAmount');
    //         const discountAmountValue = totalValue - totalvalueAndDiscount;
    //         discountValue.innerText = discountAmountValue.toFixed(2); 
    //     }
    //    })
     
    
    // })
    // document.getElementById("productClick2").addEventListener('click', function(){
    //     const productvalueName = document.getElementById('productName2');
    //     const productvalue = productvalueName.innerText;
    //     const li = document.createElement("li");
    //     li.innerText = productvalue;
    //     const selectedItemContainer1 = document.getElementById("selected-items");
    //     selectedItemContainer1.appendChild(li);
    
    //    const sumTk1 = document.getElementById('productPrice2')
    //     // console.log(sumTk1.parentNode.childNodes[5].innerText.split(' ')[0])
    //    const SumTkValue2 = sumTk1.innerText.split(" ")[0];
    //    const productPriceNubber = Number(SumTkValue2);
    //    const TotalTk1 = document.getElementById("totalPrice");
    //    totalValue += productPriceNubber;
    //    TotalTk1.innerText = totalValue.toFixed(2);
    
    //    const TotalTk = document.getElementById("totalPrice");
    //    TotalTk.innerText = SumTkValue2;
    
    
    // })

    // document.getElementById("productClick3").addEventListener('click', function(){
    //     const productvalueName = document.getElementById('productName3');
    //     const productvalue = productvalueName.innerText;
    //     const li = document.createElement("li");
    //     li.innerText = productvalue;
    //     const selectedItemContainer1 = document.getElementById("selected-items");
    //     selectedItemContainer1.appendChild(li);
    
    //    const sumTk1 = document.getElementById('productPrice3')
    //     // console.log(sumTk1.parentNode.childNodes[5].innerText.split(' ')[0])
    //    const SumTkValue2 = sumTk1.parentNode.childNodes[5].innerText.split(" ")[0];
    //    const productPriceNubber = Number(SumTkValue2);
    //    const TotalTk1 = document.getElementById("totalPrice");
    //    totalValue += productPriceNubber;
    //    TotalTk1.innerText = totalValue.toFixed(2);
    
    //    const TotalTk = document.getElementById("totalPrice");
    //    TotalTk.innerText = SumTkValue2;
    
    
    // })

    // document.getElementById("productClick4").addEventListener('click', function(){
    //     const productvalueName = document.getElementById('productName4');
    //     const productvalue = productvalueName.innerText;
    //     const li = document.createElement("li");
    //     li.innerText = productvalue;
    //     const selectedItemContainer1 = document.getElementById("selected-items");
    //     selectedItemContainer1.appendChild(li);
    
    //    const sumTk1 = document.getElementById('productPrice4')
    //     // console.log(sumTk1.parentNode.childNodes[5].innerText.split(' ')[0])
    //    const SumTkValue2 = sumTk1.parentNode.childNodes[5].innerText.split(" ")[0];
    //    const productPriceNubber = Number(SumTkValue2);
    //    const TotalTk1 = document.getElementById("totalPrice");
    //    totalValue += productPriceNubber;
    //    TotalTk1.innerText = totalValue.toFixed(2);
    
    //    const TotalTk = document.getElementById("totalPrice");
    //    TotalTk.innerText = SumTkValue2;
    
    
    // })

    // document.getElementById("productClick5").addEventListener('click', function(){
    //     const productvalueName = document.getElementById('productName5');
    //     const productvalue = productvalueName.innerText;
    //     const li = document.createElement("li");
    //     li.innerText = productvalue;
    //     const selectedItemContainer1 = document.getElementById("selected-items");
    //     selectedItemContainer1.appendChild(li);
    
    //    const sumTk1 = document.getElementById('productPrice5')
    //     // console.log(sumTk1.parentNode.childNodes[5].innerText.split(' ')[0])
    //    const SumTkValue2 = sumTk1.parentNode.childNodes[5].innerText.split(" ")[0];
    //    const productPriceNubber = Number(SumTkValue2);
    //    const TotalTk1 = document.getElementById("totalPrice");
    //    totalValue += productPriceNubber;
    //    TotalTk1.innerText = totalValue.toFixed(2);
    
    //    const TotalTk = document.getElementById("totalPrice");
    //    TotalTk.innerText = SumTkValue2;
    
    // })

    // document.getElementById("productClick6").addEventListener('click', function(){
    //     const productvalueName = document.getElementById('productName6');
    //     const productvalue = productvalueName.innerText;
    //     const li = document.createElement("li");
    //     li.innerText = productvalue;
    //     const selectedItemContainer1 = document.getElementById("selected-items");
    //     selectedItemContainer1.appendChild(li);
    
    //    const sumTk1 = document.getElementById('productPrice6')
    //     // console.log(sumTk1.parentNode.childNodes[5].innerText.split(' ')[0])
    //    const SumTkValue2 = sumTk1.parentNode.childNodes[5].innerText.split(" ")[0];
    //    const productPriceNubber = Number(SumTkValue2);
    //    const TotalTk1 = document.getElementById("totalPrice");
    //    totalValue += productPriceNubber;
    //    TotalTk1.innerText = totalValue.toFixed(2);
    
    //    const TotalTk = document.getElementById("totalPrice");
    //    TotalTk.innerText = SumTkValue2;
    
    
    // })





    




























// addCalcalculationEntry('k.acccc')
// function addCalcalculationEntry(araype){
//     const calculationEntry = document.getElementById('Kitchenware');
//     const count = calculationEntry.childElementCount
//     const num = document.createElement('num');
//     num.innerHTML = `${count}. ${araype}`

// }




























// console.log(itemName)
// // const li = document.createElement("li");
// // li.innerText = itemName;
// // const selectedItemContainer = document.getElementById("selected-items");
// // selectedItemContainer.appendChild(li);

// const cards = document.querySelectorAll('#card');
// const totalPrice = document.getElementById('totalPrice');
// let currentTotalPrice = 0;
// currentTotalPrice += parseInt(cards);
// totalPrice.textContent = currentTotalPrice;


