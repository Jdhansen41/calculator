var result="";
var display = $("#calcResult");
var operations = '*/.%+-';



//Returns number of decimal places in the result
function retr_dec(numStr) {
    var pieces = numStr.split(".");
   if(pieces[1]){
     return pieces[1].length;
   }else{
     return 0;
   }
    
}

function clearVal(){
  result = "";
  display.html("");
}
function addToDisplay(num){
  display.html(function(i, val){
    return val + num;
  });
}

//Used on digits
function math(val){
  if(display.html().length < 10){
  addToDisplay(val);
  result+=val;
  }
}

//Used on operators
function displayOper(val){
  display.html(val);
  //Safeguard for if user presses the same operator more than once in a row
  if(result[result.length-1] !== val){
   
  result+=val;
  }
 
}

function calculate(){
  var calc= eval(result);
  console.log(calc);
  
  try{
   //if the number isn't a large number but has lots of decimals, limit to 5
    if(retr_dec(calc.toString()) > 4 && calc < 99999){
    calc = calc.toFixed(5);
    display.html(calc);
    } if(calc.toString().length > 10){
      //Display "too large" error for calculations longer than 10 digits 
      display.html("Too large");
    }
   else{
       display.html(calc);
    } 
}
  catch(err){
    display.html();
}
}