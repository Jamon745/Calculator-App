
const inputField = document.getElementById("result");
const btnEl = document.querySelectorAll("button");

for (let x = 0; x < btnEl.length; x++){
    btnEl[x].addEventListener("click", () => {
    const buttonValue = btnEl[x].textContent;
    if(buttonValue === "C"){
        clearResult ()
    }else if (buttonValue === "="){
        calculateResult ()
    }else{
        appendValue(buttonValue);
    }
   
  });
  
}  

function clearResult (){
    inputField.value = "";
}

function calculateResult (){
    inputField.value = eval(inputField.value);
}

function appendValue (buttonValue){
    inputField.value += buttonValue;
}

