a=document.querySelector("#threedot")
b=document.querySelector("#xnavbar")
c=document.querySelector("#navs-bar")

a.addEventListener("click",function(){
c.style.right=0;
})
b.addEventListener("click",function(){
  c.style.right="-50%";  
})