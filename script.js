function showPage(id){

document.querySelectorAll("section").forEach(s=>s.style.display="none")

document.getElementById(id).style.display="block"

}

function showAnswer(){

document.getElementById("answer").innerText=

"Thực vật C4 có enzyme PEP carboxylase giúp cố định CO2 nên giảm quang hô hấp."

}

function searchContent(){

let input=document.getElementById("search").value.toLowerCase()

let items=document.querySelectorAll("#docList li")

items.forEach(li=>{

if(li.innerText.toLowerCase().includes(input)){

li.style.display="list-item"

}else{

li.style.display="none"

}

})

}

showPage("docs")
