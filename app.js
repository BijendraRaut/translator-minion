var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json?text=";

function errorHandler() {
  console.log("error occured", error);
  alert("something wrong with server! try after sometime");
}

btnTranslate.addEventListener("click", function fetchData() {
  var inputValue = txtInput.value;
  fetch(url + inputValue)
    .then((res) => res.json())
    .then((json) => (txtOutput.innerText = json.contents.translated))
    .catch(errorHandler);
});
