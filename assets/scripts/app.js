 const defaultResult = 0;
let currentResult =  defaultResult;
 let result;

         const getUserNumberInput = () =>{
             return parseInt(usrInput.value);
         }

          const createAndWriteOutPut = (operator,resultBeforeCalc,calcNumber)=>{
            const  calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
            outputResult(currentResult,calcDescription);
          }

 const add = (  ) =>{
       const enteredNumber = getUserNumberInput();
       const initialResult = currentResult;
       currentResult = currentResult + enteredNumber ;
        createAndWriteOutPut('+',initialResult,enteredNumber)
        
 }

   const subtract = () =>{ 
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
        currentResult = currentResult - enteredNumber ;
        createAndWriteOutPut('-',initialResult,enteredNumber);
   }

    const multiply = () =>{
        const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
        currentResult = currentResult * enteredNumber ;
        createAndWriteOutPut('*',initialResult,enteredNumber);

    }

    const divide = () =>{
        const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
        currentResult = currentResult / enteredNumber ;
        createAndWriteOutPut('/',initialResult,enteredNumber);
    }
    
 addBtn.addEventListener('click',add);
 subtractBtn.addEventListener('click',subtract);
 multiplyBtn.addEventListener('click',multiply);
 divideBtn.addEventListener('click',divide);

