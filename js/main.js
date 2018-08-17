var input = document.getElementById('input');
var form = document.getElementById('commands');

function processForm(e) {

    if (e.preventDefault) e.preventDefault();
    start(input.value, out)
    return false;

}

if (form.attachEvent) {
    form.attachEvent("submit", processForm)
}
else {
    form.addEventListener("submit", processForm)
}

var output = document.getElementById('output');

var out = function (outtext) {

    console.log(outtext);
    var newPara = document.createElement('p');
    var paraText = document.createTextNode(outtext);
    newPara.appendChild(paraText);
    output.appendChild(newPara);

}

function start(invar, outvar) {
    if (invar == "") {
        outvar("Sorry I didn't get that")
    }
    if (invar == "Hi") {
        outvar("Hello")
    }
    if (invar == "How are you?") {
        outvar("I'm doing pretty good, you?")
    }
    if (invar == "What time is it?") {
        outvar("I'm sorry, I cannot currently tell time. That will be coming in a future update.")
    }
    if (invar == "Do you have voice control?") {
        outvar("I do not currently have voice recognition, but it is currently being worked on!")
    }
    if (invar == "What is your name?") {
        outvar("My name is Zec. I am your digital assistant.")
    }
    if (invar == "Order a pizza") {
        outvar("Here are some pizza places:");
        outvar("1. https://www.dominos.com")
        outvar("2. https://www.mariospizzaonline.com")
    }
    if (invar == "Clear") {
        output.removeChild(newPara)
    }
    if (invar == "Who is Cortana?") {
        outvar("Cortana is a virtual assistant created by Microsoft Inc.")
    }
}

