

function takeUserInput(num1,num2,operator){
    let addition
    let subtraction
    let multiplication
    let division
               if(operator=='+'){
                addtion= num1+num2
                return addition
               }
               if(operator=='-'){
                subtraction= num1-num2
                return subtraction
               }
               if(operator=='*'|| operator =='x'){
                multiplication= num1+num2
                return multiplication
               }
               if(operator=='/'){
                division= num1/num2
                return division
               }
}