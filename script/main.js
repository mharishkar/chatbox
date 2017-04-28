
function send() {
    
    var userinput   = document.getElementById("textarealeft").value;
    child           = document.createElement("div"),
    msgarealeft     = document.getElementById("msgarealeft"),
    parent          = document.createElement("div");
    child.appendChild(document.createTextNode(userinput));
    parent.className = "container-fluid";
    parent.appendChild(child);
    child.className  = "red";
    msgarealeft.appendChild(parent); 

    

    var childr   = document.createElement("div"),
    parentr      = document.createElement("div"),
    msgarearight = document.getElementById("msgarearight");
    childr.appendChild(document.createTextNode(userinput));
    parentr.className = "container-fluid";
    parentr.appendChild(childr);
    childr.className  = "red1";
    msgarearight.appendChild(parentr); 

     if (msgarealeft.scrollHeight > 580) {
        msgarealeft.scrollTop += 100;
        msgarealeft.scrollLeft += 100;        
    }

    if (msgarearight.scrollHeight > 580) {
        msgarearight.scrollTop += 100;
        msgarearight.scrollLeft += 100;        
    }
    
  
    var textarealeft = document.getElementById("textarealeft"),
    btn          = document.getElementById("btnleft");
    textarealeft.value = "";
    textarealeft.setAttribute("style","font-size:14px");
    textarealeft.setAttribute("rows","1");
    btn.setAttribute("disabled","disabled");
}


function receive() {
    var userinput   = document.getElementById("textarearight").value;
    var child           = document.createElement("div"),
    msgarearight     = document.getElementById("msgarearight"),
    parent          = document.createElement("div");
    child.appendChild(document.createTextNode(userinput));
    parent.className = "container-fluid";
    parent.appendChild(child);
    child.className  = "red";
    msgarearight.appendChild(parent); 

    var childl   = document.createElement("div"),
    parentl      = document.createElement("div"),
    msgarealeft = document.getElementById("msgarealeft");
    childl.appendChild(document.createTextNode(userinput));
    parentl.className = "container-fluid";
    parentl.appendChild(childl);
    childl.className  = "red1";
    msgarealeft.appendChild(parentl); 
  
    var textarearight = document.getElementById("textarearight"),
    btn               = document.getElementById("btnright");
    textarearight.value = "";
    textarearight.setAttribute("style","font-size:14px");
    textarearight.setAttribute("rows","1");
    btn.setAttribute("disabled","disabled");

    if (msgarealeft.scrollHeight > 580) {
        msgarealeft.scrollTop += 200;
        msgarealeft.scrollLeft += 100;        
    }

    if (msgarearight.scrollHeight > 580) {
        msgarearight.scrollTop += 200;
        msgarearight.scrollLeft += 100;        
    }
}

function able() {
      var text = document.getElementById("textarealeft");
      var btn = document.getElementById("btnleft");
      var len = text.value.length;
      console.log(len);
      
      if ( len > 0 ) {

        btn.removeAttribute("disabled");

      }
      else {

        btn.setAttribute("disabled","disabled");

      }

      if ( len > 15 )
      {
         
          text.setAttribute("style","font-size:11px");
      }
      else {

          text.setAttribute("style","font-size:14px");
      }

      if ( len > 75 && len < 139 ) 
      {
          
          text.setAttribute("rows","2");
      }
      else  if ( len > 140 ) 
      {
          
          text.setAttribute("rows","3");
      }
      else { 
          text.setAttribute("rows","1");
      }
      
       
}

function ableright() {
      var text = document.getElementById("textarearight");
      var btn = document.getElementById("btnright");
      var len = text.value.length;
      console.log(len);
      
      if ( len > 0 ) {

        btn.removeAttribute("disabled");

      }
      else {

        btn.setAttribute("disabled","disabled");

      }

      if ( len > 15 )
      {
         
          text.setAttribute("style","font-size:11px");
      }
      else {

          text.setAttribute("style","font-size:14px");
      }

      if ( len > 75 && len < 139 ) 
      {
          
          text.setAttribute("rows","2");
      }
      else  if ( len > 140 ) 
      {
          
          text.setAttribute("rows","3");
      }
      else { 
          text.setAttribute("rows","1");
      }
      
}
