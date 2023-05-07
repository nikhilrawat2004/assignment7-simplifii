var index = 0;

function changeColors(){
    var colors = ["#ff0000","#ff7300","#fffb00","#48ff00","#00ffd5","#002bff","#7a00ff","#ff00c8"];
    var color = ["#ff0000","#ffffff","#48ff00","#ff0000","#00ffd5","#002bff","#7a00ff","#ff00c8","#ff0000"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    document.getElementsByTagName("h1")[0].style.color = color[index];

    if(index > colors.length - 1){
        index = 0;
    }
}