function todoList() {
    var item = document.getElementById('todoInput').value
    var text = document.createTextNode(item)
	var newItem = document.createElement('li')
    newItem.appendChild(text)
	document.getElementById('todoList').appendChild(newItem)
    
    let btn = document.createElement("button");
    btn.innerHTML = "X";
    document.body.appendChild(btn);
    newItem.appendChild(btn);
    btn.style.backgroundColor = "#ff000080";
    btn.style.borderBottom = "red";
    btn.style.borderTop = "red";
    btn.style.borderLeft = "red";
    btn.style.borderRight = "red";
    btn.style.position = "relative";
    btn.style.bottom = "10px";
    btn.style.left = "10px";
    btn.onmouseover = function(){
        btn.style.backgroundColor = "red";
    };
    btn.onmouseout = function(){
        btn.style.backgroundColor = "#ff000080";
    };
    btn.onclick = function() {
        btn.remove();
        newItem.remove();
    };

}
function removeAll(){
    document.getElementById("todoList").innerHTML = "";
    
}


