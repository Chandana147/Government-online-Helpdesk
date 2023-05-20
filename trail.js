let inputElement=document.getElementById('passwordId');
let capitalElement=document.getElementById('capitalId');
let lowerElement=document.getElementById('lowerId');
let specialElement=document.getElementById('specialId');
let digitElement=document.getElementById('digitId');
let lengthElement=document.getElementById('lengthId');
let outputElement=document.getElementById("output");


inputElement.addEventListener("keydown",function(event){
	//outputElement.textContent=event.key;
	let a=event.key;
	let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
	outputElement.textContent=Number(a);
	if(a.length === 1){
		if(Number(a)== a){
		digitElement.style.color="green";
		}
		else if(a.match(format)){
			specialElement.style.color="green";
		}
		else if(toUpperCase(a)=== "true"){
			capitalElement.style.color="green";
		}
		else if(a.toLowerCase()===a){
			lowerElement.style.color="green";
		}
		
	}
	
	
	

});





