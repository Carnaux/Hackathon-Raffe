var config;
var database;
var valor;
var a = true;
var qrcode = new QRCode("qrcode");
var b, c;
var code; 
var bool = false;

function Init(){// Initialize Firebase

console.log("init");
  
    config = {
		apiKey: "AIzaSyC2Lhzr1gryBRNSe5Hjzz_2kHHQaFGWxGQ",
		databaseURL: "https://hack-6d4d3.firebaseio.com",
		projectId: "hack-6d4d3",
		storageBucket: "",
		messagingSenderId: "142327007764"
		};
		firebase.initializeApp(config);
  // Get a reference to the database service
  database = firebase.database();
  
  makeCode();

  setInterval(writeUserData, 1000);

  
   
  

}


function writeUserData() {
  console.log("a");
  
  c = involt.pin.A[19];
  
    firebase.database().ref('turbidez').set({
      valor: c
    });
  
  
  document.getElementById('turb').innerHTML ="Valor: " + c;

  b = involt.pin.A[17];
  
    firebase.database().ref('temperatura').set({
      valor: b
    });
  
  document.getElementById('temp').innerHTML = "Valor: " + b;

  }
  

 

  function makeCode () {   
      
    //console.log(c);
    
    if(code != null){
      code.makeCode(document.getElementById("qrtext").value);
    }else{
      code = new QRCode(document.getElementById("qrcode"), document.getElementById("qrtext").value );
      console.log(code);
      bool = true;
    }
  }
  
  

  //window.onload = Init;