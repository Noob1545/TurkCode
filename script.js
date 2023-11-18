setInterval(function(){
    document.getElementById("merhaba").style.fontWeight = "bold"
},1000)
setInterval(function(){
    document.getElementById("merhaba").style.fontWeight = "normal"
},2000)
document.body.style.background = "white"
setInterval(function(){
    if(document.body.style.backgroundColor == "white"){
        document.getElementById("buton").onclick = function(){
            document.body.style.transition = "all 0.3s ease"
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            document.getElementById("buton").textContent = "Click for background white"
        }
    }
    if(document.body.style.backgroundColor == "black"){
        document.getElementById("buton").onclick = function(){
            document.body.style.transition = "all 0.3s ease"
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            document.getElementById("buton").textContent = "Click for background black"
        }
    }
})
