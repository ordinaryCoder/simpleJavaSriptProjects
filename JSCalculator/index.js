 function getHistory() {
	 return document.getElementById("history-value").innerText;
 }
 
 function displayHistory(num){
	 document.getElementById("history-value").innerText=num;
 }
 
 
 function getInput(){
	 return document.getElementById("input-value").innerText;
 }
 
 
 function displayInput(num){
	 if(num=="")
		document.getElementById("input-value").innerText=num;
	else
		document.getElementById("input-value").innerText=getFormatterNumber(num);
 }
 
 function getFormatterNumber(num){
	 if(num=="-")
		return "";
	 else
		  return Number(num).toLocaleString("en");
 }

  function reverseNumberFormat(num){
	  return Number(num.replace(/,/g,''));
  }
 
 var operator = document.getElementsByClassName("operator");
 for(var i=0;i<operator.length;i++){
	 operator[i].addEventListener('click', function(){
		if(this.id=="clear"){
			displayHistory("");
			displayInput("");
		}
		else if(this.id=="backspace"){
			var input=reverseNumberFormat(getInput()).toString(); 
			if(input){
				input=input.substr(0,input.length-1);
				displayInput(input);
			}
		}
		else{
			var input = getInput();
			var History = getHistory();
			if(input=="" && History!=""){
				 if(isNaN(History[History.length-1]))
					History=History.substr(0,History.length-1);
		}
			if(input!="" || History!=""){
				input=(input=="")?input:
				input=reverseNumberFormat(input);
				History=History+input
				if(this.id=="="){
					var result=eval(History);
					displayInput(result);
					displayHistory("")
				}
				else{
					History=History+this.id;
					displayHistory(History)
					displayInput("")
				}
			}
				
		}
	 })
 }
 
var numbers = document.getElementsByClassName("number");
 for(var i=0;i<operator.length;i++){
	 numbers[i].addEventListener('click', function(){
		var input = reverseNumberFormat(getInput());
		if(input!=NaN){
			input = input+this.id;
			displayInput(input);
		}
	})
 } 
 