
    // enables/ disables textboxes based on radio button selection
        let radioBtns = document.getElementsByName('radAnswer')
        Array.from(radioBtns).forEach(function (el) {
          el.onchange = function (e) {
            if (document.getElementById("cashbtn").checked)
            {
                document.getElementById("cardam").disabled = true;
                document.getElementById("giftcheck").disabled = false;
                document.getElementById("casham").disabled = false;
        
            }
            else if (document.getElementById("cardbtn").checked)
            {
                document.getElementById("casham").disabled = true;
                document.getElementById("giftcheck").disabled = false;
                document.getElementById("cardam").disabled = false;
        
            }
            else if (document.getElementById("cashwcardbtn").checked)
            {
                document.getElementById("giftcheck").disabled = true;
                document.getElementById("casham").disabled = false;
                document.getElementById("cardam").disabled = false;  
            }
          }
        }) 
    
    
    // check values in textboxes are less than 0
    
    if(docuemnt.getElementById("amounttxt").value < 0){
      docuemnt.getElementById("amounttxt").value = 0;
    }
    
    if(docuemnt.getElementById("giftcheck").value < 0){
      docuemnt.getElementById("giftcheck").value = 0;
    }
    
    if(docuemnt.getElementById("casham").value < 0){
      docuemnt.getElementById("casham").value = 0;
    }
    
    if(docuemnt.getElementById("cardam").value < 0){
      docuemnt.getElementById("cardam").value = 0;
    }
    
    
    // disables submit button until conditions are met
    
    
    document.getElementById("sumbitbtn").disabled = true;
    
    var val1 = document.getElementById("cardam").value + document.getElementById("casham").value;
    var val2 = document.getElementById("cardam").value + document.getElementById("casham").value;
    
    if(document.getElementById("amounttxt").value > val1){
    
      document.getElementById("submitbtn").disabled = false;
    
    }
    if(document.getElementById("amounttxt").value > val2){
    
      document.getElementById("submitbtn").disabled = false;
    
    }