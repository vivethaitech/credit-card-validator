const button = document.getElementById('btn')

button.addEventListener('click', (e) => {
    e.preventDefault();
     valid();
})

    function valid(){
       let number = document.getElementById('num').value;

       if (number === "") {
        alert('Number is required.');
        return;
    }
       let numberArray = number.split('').map(Number);
       let result = document.getElementById('result');  
 
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
  
