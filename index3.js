const textBox=document.getElementById("textBox").innerHTML;
const toFahrenheit=document.getElementById("toFahrenheit").innerHTML;
const toCelsius=document.getElementById("toCelsius").innerHTML;
const result=document.getElementById("result").innerHTML;
let temp;
function convert(){
    if(toFahrenheit.cheked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp+"F"
    }
    else if(toCelsius.cheked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp+"C"
    }
    else{
        result.textContent="select a unit";
    }
}

