const textBox=document.getElementById("textBox");
const tofahrenheit=document.getElementById("tofahrenheit");
const tocelsius=document.getElementById("tocelsius");
const submit=document.getElementById("submit");
const res=document.getElementById("res");

let temp;

function convert() {
    if(tofahrenheit.checked){
      temp=Number(textBox.value)
        temp =temp*(9/5) +32;
        res.textContent = temp.toFixed(0) + "°F";
    }
    else if(tocelsius.checked){
        temp=Number(textBox.value)
        temp =(temp-32)*(5/9);
        res.textContent = temp.toFixed(0) + "°C";
    }
    else{
        res.textContent = "Select a Unit";
    }
}
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    convert();
});
