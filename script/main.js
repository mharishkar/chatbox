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
    clear.value = "";
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






