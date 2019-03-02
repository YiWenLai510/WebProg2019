var Image_List = ["images/00.jpg","images/01.JPG","images/02.jpg"
                    ,"images/03.jpg","images/04.JPG","images/05.jpg"] ;

console.log(Image_List)
var counter = 0;
if(counter == 0){
    document.getElementById("pre").classList.add( "disabled");
}

function PreImg(){
    
    if(counter > 0){
        counter -= 1;
        document.getElementById("display").src = Image_List[counter];
        document.getElementById("next").classList.remove("disabled");
        if(counter == 0){
            document.getElementById("pre").classList.add( "disabled");
        }
    }
    
}
function NextImg(){
    
    if(counter < 5){
        counter += 1;
        document.getElementById("display").src = Image_List[counter];
        document.getElementById("pre").classList.remove( "disabled");
        if(counter == 5){
            document.getElementById("next").className = "disabled";
        }
    }
    
}
