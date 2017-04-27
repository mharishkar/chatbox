function send() {

    // create a element in sender side
    var divi = document.createElement("div");
    divi.className = "container";
    var text = document.getElementById("text").value;
    var node = document.createElement("div");
    var data = document.createTextNode(text);
    node.appendChild(data);
    node.appendChild(divi);
    node.className = "red";
    var place = document.getElementById("send");
    place.appendChild(node); 
   



    // create a element in receiver side
    var divi1 = document.createElement("div");
    divi1.className = "container";
    var text1 = document.getElementById("text").value;
    var node1 = document.createElement("div");
    var data1 = document.createTextNode(text1);
    node1.appendChild(data1);
    node1.appendChild(divi1);
    node1.className = "red1";
    var place1 = document.getElementById("receive");
    place1.appendChild(node1);

    // clear the textbox

    var clear = document.getElementById("text");
     var btn = document.getElementById("sendbtn");
    clear.value = "";
    clear.setAttribute("style","font-size:14px");
    clear.setAttribute("rows","1");
    btn.setAttribute("disabled","disabled");

}

// Receiver side

function receive() {
    var divi = document.createElement("div");
    divi.className = "container";
    var text = document.getElementById("text1").value;
    var node = document.createElement("div");
    var data = document.createTextNode(text);
    node.appendChild(data);
    node.appendChild(divi);
    node.className = "red";
    var place = document.getElementById("receive");
    place.appendChild(node); 

    var divi1 = document.createElement("div");
    divi1.className = "container";
    var text1 = document.getElementById("text1").value;
    var node1 = document.createElement("div");
    var data1 = document.createTextNode(text1);
    node1.appendChild(data1);
    node1.appendChild(divi1);
    node1.className = "red1";
    var place1 = document.getElementById("send");
    place1.appendChild(node1);

    // clear the textbox

    var clear = document.getElementById("text1");
    clear.value = "";

}

function able() {
      var text = document.getElementById("text");
      var btn = document.getElementById("sendbtn");
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

      if ( len > 70 ) 
      {
          
          text.setAttribute("rows","2");
      }
      else { 
          text.setAttribute("rows","1");
      }
     
}
