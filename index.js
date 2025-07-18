


function calculate(){
    let amount = document.getElementById("bill").valueAsNumber
    let perc = document.getElementById("tip").valueAsNumber
    console.log(amount);
    console.log(perc);
    let answer = (perc/100 * amount +amount);
    console.log(answer)
    document.getElementById('total').innerText= "Total:" + answer

}