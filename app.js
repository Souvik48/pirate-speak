var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

//outputDiv.innerText = "Souvik Das" 
//if you want to write value then use id.innerText

//if you want to read value then use id.value

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/pirate.json";


function getTranslationURL(text){
    return serverURL + "?"+"text="+text
}


function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something wrong with server.Try again after some time!")
}

btnTranslate.addEventListener("click",clickEventHandler) 
function clickEventHandler(){
    //console.log("Clicked!");
   //    console.log("input",txtInput.value)
   //outputDiv.innerText = "sdsaddaa " + txtInput.value 

   var inputText = txtInput.value;

   fetch(getTranslationURL(inputText)).
   then(response => response.json()).
   then(json => {
       var translatedText = json.contents.translated;
       outputDiv.innerText = translatedText;
}).catch(errorHandler)
};


