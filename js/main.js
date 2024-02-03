document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("para").style.color= "red"
    document.getElementById("div1").style.backgroundColor= "green"
    document.getElementById("div1").style.padding= "30px"
})

document.getElementById("btn").addEventListener("dblclick", function(){
    document.getElementById("para").style.fontSize= "30px"
})

document.getElementById("btn").addEventListener("mouseenter", function(){
    document.getElementById("para").style.fontStyle= "italic"
})

document.getElementById("btn").addEventListener("mouseleave", function(){
    document.getElementById("para").style.fontFamily= "cursive"
})