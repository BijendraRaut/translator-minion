var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

btnTranslate.addEventListener("click", function () {
  var inputValue = txtInput.value;
  txtOutput.innerHTML =
    "fsssss fsfsfsfsf sfsfsf" + "this is the translated one of - " + inputValue;
});
