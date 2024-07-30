function change(){
    var imgElement = document.getElementById("demo");
    if(imgElement.src.endsWith("images/sisu.jpg")){
        imgElement.src="images/siyu.jpg"
    }
    else{
        imgElement.src="images/sisu.jpg"
    }
}
