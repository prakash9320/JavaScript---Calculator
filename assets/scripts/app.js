 const defaultResult = 0;
let currentResult =  defaultResult;
 let result;
 let logEntries = [];

           // Get Input from Input Feild
         const getUserNumberInput = () =>{
             // ParseInt is convert to String to integer 
             return parseInt(usrInput.value);
         }
          //  Generates And Write Calculation log 
          const createAndWriteOutPut = (operator,resultBeforeCalc,calcNumber)=>{
            const  calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
            outputResult(currentResult,calcDescription); // from Vender File
          }

 const add = (  ) =>{
       const enteredNumber = getUserNumberInput();
       const initialResult = currentResult;
       currentResult +=  enteredNumber ;
        createAndWriteOutPut('+',initialResult,enteredNumber);
        const logEntry = {
            operation :'ADD',
            prevResult: initialResult,
            Number :enteredNumber,
            result: currentResult
        }
          logEntries.push(logEntry);
          console.log(logEntry.operation)
          console.log(logEntries[0]);
 }

   const subtract = () =>{ 
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
        currentResult -=  enteredNumber ;
        createAndWriteOutPut('-',initialResult,enteredNumber);
   }

    const multiply = () =>{
        const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
        currentResult *=  enteredNumber ;
        createAndWriteOutPut('*',initialResult,enteredNumber);

    }

    const divide = () =>{
        const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
        currentResult /=  enteredNumber ;
        createAndWriteOutPut('/',initialResult,enteredNumber);
    }
     // add Action Event on the button 
 addBtn.addEventListener('click',add);
 subtractBtn.addEventListener('click',subtract);
 multiplyBtn.addEventListener('click',multiply);
 divideBtn.addEventListener('click',divide);

