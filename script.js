let buttons = document.querySelectorAll('.button');
let resultDisplay = document.getElementById('result');
let input="";
for(let button of buttons){
    button.addEventListener("click",function(event){
        let button_value=event.target.textContent;
     
        switch(button_value){
            case "c":
                resultDisplay.textContent="";
                input="";
                break;
            case "=":
                try{
                    let result=eval(input);
                    resultDisplay.textContent=result;
                    input=result.toString();
                }
                catch(error){
                    resultDisplay.textContent="Error";
                    input=""
                    
                }
                break;
            case "":
                input=input.slice(0,1);
                resultDisplay.textContent=resultDisplay.textContent.slice(0,-1);
                break;
            case "x":
                resultDisplay.textContent+=button_value;
                input+="*";
                break;
            case "/":
            case "%":
            case "-":
            case "+":
                resultDisplay.textContent+=button_value;
                input+=button_value;
                break;
            default:
                resultDisplay.textContent+=button_value;
                input+=button_value;
                break;
        }
    })
}
