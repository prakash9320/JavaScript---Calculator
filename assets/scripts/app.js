 const defaultResult = 0;
let currentResult =  defaultResult;
 let result;

         const getUserNumberInput = () =>{
             return parseInt(usrInput.value);
         }



 const add = (  ) =>{
       const enteredNumber = getUserNumberInput();
      const  calcDescription = `${currentResult} + ${enteredNumber}`
          currentResult = currentResult + enteredNumber ;
          outputResult(currentResult,calcDescription);
 }
    
 addBtn.addEventListener('click',add);
 

