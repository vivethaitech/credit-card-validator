const button = document.getElementById('btn')

button.addEventListener('click',
    function valid(){
        //let number = parseInt(document.getElementById('num').value)
        //let numberString = number.toString();
       // let numberArray = numberString.split('');
       // a = numberArray.map(number);
       // let result = document.getElementById('result')
       let number = document.getElementById('num').value;
       let numberArray = number.split('').map(Number);
       let result = document.getElementById('result');  
       if (numberArray.some(isNaN)) {
           result.innerHTML = "Please enter a valid number";
           return;
       }
       let sum = 0;
       for (let i = 0; i < numberArray.length; i++) {
           let num = numberArray[numberArray.length - 1 - i];
           if (i % 2 === 1) {
               num *= 2;
               if (num > 9) {
                   num -= 9;
               }
           }
           sum += num;
       }
        if (sum % 10 == 0) {
            result.innerHTML="This is a valid credit card number";
        } else {
            result.innerHTML="This is not a valid credit card number";
        }
    }
)