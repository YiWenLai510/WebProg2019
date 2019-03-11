var input = document.getElementById("todo-input");
var todoList=[];
input.addEventListener("keyup", event => {
    if (event.keyCode === 13 && event.target.value !== '')  {

        createTODOs(event,todoList,event.target.value);

    }
  });
function onclickfunction(newItem){
    node = newItem.node.childNodes[1];
    if(newItem.isComplete == false){
        node.style.textDecoration = "line-through";
        node.style.opacity = 0.5;
        newItem.isComplete = true;
    }
    else{
        node.style.textDecoration = "";
        node.style.opacity = 1;
        newItem.isComplete = false;
    }

   update_count();
}
function update_count(){
    todoCount = document.getElementById("todo-count");
    //console.log(x);
    todoCount.innerHTML = todoList.filter(ele => !ele.isComplete).length ;
    todoCount.innerHTML += " left";
}
function print_todoList(){
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    for(x = 0 ; x < todoList.length ; x++){
        myNode.appendChild(todoList[x].node);
    }
}
function print_activeList(){    
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    actList = todoList.filter(ele => !ele.isComplete);
    for(x = 0 ; x < actList.length ; x++){
        myNode.appendChild(actList[x].node);
    }
}
function print_CompleteList(){
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    actList = todoList.filter(ele => ele.isComplete);
    for(x = 0 ; x < actList.length ; x++){
        myNode.appendChild(actList[x].node);
    }
}
function clear_complete(){
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    actList = todoList.filter(ele => ele.isComplete);
    while(actList.length > 0){
        for(z = 0 ; z < todoList.length ; z++){
            if(todoList[z].isComplete == true){
                var pos = todoList.indexOf(todoList[z]);
                todoList.splice(pos,1);
                break;
            }
        }
        actList = todoList.filter(ele => ele.isComplete);
    }
    
    for(l = 0 ; l < todoList.length ; l++){
        myNode.appendChild(todoList[l].node);
    }
    
}
function removeItemFrom_todoList(newItem,value){
    var pos = todoList.indexOf(newItem);
    todoList.splice(pos,1);
    var node = document.getElementById(value)
    var this_root = node.parentNode;
    this_root.remove();
    
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    for(l = 0 ; l < todoList.length ; l++){
        myNode.appendChild(todoList[l].node);
    }
    update_count();


}
function createTODOs(e,todoList,value){
        
        
        var itemNode = document.createElement("LI");
        itemNode.setAttribute("class","todo-app__item");

        var newItem = {node:itemNode, isComplete: false};
        todoList.push(newItem);
        i = todoList.length;
    
        var wrapper = document.createElement("DIV");
        wrapper.setAttribute("class","todo-app__checkbox")


        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("class","todo-app__checkbox input")
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", i);
        checkbox.onclick = function(){ onclickfunction(newItem,value) };

        var label = document.createElement("LABEL");
        label.setAttribute("for",i)
       
        var todos = document.createElement("H1");
        todos.setAttribute("class","todo-app__item-detail");
        var t = document.createTextNode(value);
        todos.setAttribute("id",value);
        todos.appendChild(t);
        
        var img = document.createElement("img");
        img.src ="./img/x.png";
        img.setAttribute("class","todo-app__item-x")
        img.onclick = function(){removeItemFrom_todoList(newItem,value)};
        
        
        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        itemNode.appendChild(wrapper);
        itemNode.appendChild(todos);
        itemNode.appendChild(img);

        var myNode = document.getElementById("todo-list");
        myNode.appendChild(itemNode);
    
        event.target.value='';
        update_count();

   //
}


