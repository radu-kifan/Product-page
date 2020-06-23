$(document).ready(function(){
$('#infoLink').mouseover(function() { 
    $(this).css({"background-color": "#D8BFD8"});
});
     $('#infoLink').mouseout(function(){
   $(this).css({"background-color": "#696969"});
  });	 



 $('.creioaneImg').click(function(){
 	 
 	  $(this).each(function(){
 		$('#imageDisplayFrame').empty();   
 		 $(this).clone().prependTo('#imageDisplayFrame').width("35.2em").height("36.5em").css('border','none');	
 		 });
 	  });
 		
$('#infoLink').click(function(){
	 $('#infoSection') 
     .css({"display":"block"}); 
});
 

$('#close').click(function(){
	 $('#infoSection')
	 .css({"display":"none"})
    
 });  


     
  });   
         
 

 


  

      function showPrice(){

      	 var a = document.getElementById("prices").value;

          

	if(a == 1){

		document.getElementById("product").innerHTML=("18.98");
		 
	}

	 else if (a == 2){
		document.getElementById("product").innerHTML=("37.96");
		 
	}

	 else if (a == 3){
		document.getElementById("product").innerHTML=("56.94");
		 
	}
}  

	function finalPrice(){
 
    var z = document.getElementById("product").innerHTML;
         
    var y = document.getElementById("number").value;

    var cvt = y.toString();

    if((cvt.indexOf('.')>-1)||(y<1)||(y>100)){
    	alert("Eroare!!!  Introdu un numar intre 1 si 100,fara punct sau minus");
    }

    else{

    var res = z * y;
    
    var fin = res.toFixed(2);
   
    var t = document.getElementById("pretFinal"); 

    t.innerHTML = fin;

    
return t;
}

}

  

function displayTotal(){

  document.getElementById("imagineLink").style.visibility="hidden";

  document.getElementById("productInvoice").style.visibility="visible";

  document.getElementById("sumFooter").style.visibility="visible";


       
	 
   var indNum = document.getElementById("prices").selectedIndex;

   var indText = document.getElementById("prices").options;

   var prod = indText[indNum].text; 

   var qty = document.getElementById("number").value;

	var pric = document.getElementById("product").innerHTML;

	var pricFin = document.getElementById("pretFinal").innerHTML;  

	var where = document.getElementById("invoiceTemplate");

	var trw = document.createElement("tr");

 var ct = document.getElementById("invoiceTable").childElementCount; 
 

trw.innerHTML = ("<td class='invoiceBorder'>"+ct+"</td>"+"<td class='invoiceBorder'>"+prod+"</td>"+"<td class='invoiceBorder'>"+qty+"</td>"+"<td class='invoiceBorder'>"+pric+"</td>"+"<td class='invoiceBorder'>"+pricFin+"</td>"+"<td class='invoiceBorder'>"+"<button id='cancelButton' onclick='deleteRow()'>"+"X"+"</button>"+"</td>");

 
 document.getElementById("invoiceTable").appendChild(trw);

 
}



function deleteRow(){
    var rIndex,table = document.getElementById("invoiceTable");
    for (var i = 1; i<table.rows.length; i++){
        table.rows[i].onclick=function(){
            rIndex = this.rowIndex;
          table.deleteRow(rIndex);
   }
  }
}


function totalSum(){
var table = document.getElementById("invoiceTable") , sum = 0;

 
 
for (var i = 1; i<table.rows.length;i++){
      var rw = document.getElementById("invoiceTable").rows[i].cells[4];
           
          sum = sum + parseFloat(rw.innerHTML);


         
    }          
   document.getElementById("totalSum").innerHTML = sum;         
} 
     
 function sendForm(){
  
 


  var divTable = document.getElementById("productInvoice").innerHTML;

  localStorage.setItem("textvalue",divTable);
   
 location.href="formular.html" 

}

 function getForm(){

var loc = localStorage.getItem("textvalue"); 

document.getElementById("place").innerHTML = loc;

}

function validateForm(){

  var nm = document.forms["myForm"]["nume"].value;
  var tl = document.forms["myForm"]["numar"].value; 
      tlstr = tl.toString();
  var adr = document.forms["myForm"]["adresa"].value;
  var loc = document.forms["myForm"]["localitate"].value;
  var jd = document.getElementById("judet").value;  
  var pl = document.getElementById("plata").value;
  


   if (nm == "") {
    alert("Completati va rog numele!!!");
   
  }
  if (tlstr.length<9){
    alert("Completati va rog un numar de telefon valid!!!");
       } 
   if (adr == "") {
    alert("Completati va rog o adresa!!!");
  
  }
  if (loc == "") {
    alert("Completati va rog o localitate!!!");
    
  }

  if (jd == "") {
    alert("Alegeti va rog un judet!!!");
    
  }

if (pl == "") {
    alert("Alegeti va rog o modalitate de plata!!!");
    
  }


  
   
  else{
  document.write(nm+" "
      +"VA MULTUMIM CA ATI CUMPARAT DE LA NOI, COMANDA VA FI PROCESATA IN CEL MAI SCURT TIMP!");
    return true; 
  }


} 

 
 
 
 

 
 
  

    



 
  
 
  



 

 

 
 
 
  
 
	
 


 






  
 
    

 
  
           


        


 
 


  

 