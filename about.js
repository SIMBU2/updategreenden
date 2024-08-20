a=document.querySelector("#threedot")
b=document.querySelector("#xnavbar")
c=document.querySelector("#navs-bar")

a.addEventListener("click",function(){
c.style.right=0;
})
b.addEventListener("click",function(){
  c.style.right="-50%";  
})


product=document.querySelector("#product-container")
searchengine=document.querySelector("#searchboxx")
divs=product.querySelectorAll("div")

searchengine.addEventListener("keyup",function(){
  enteredvalue=event.target.value.toUpperCase()


for(count=0;count<divs.length;count=count+1)
  {
  productname=divs[count].querySelector("h5").textContent
  if(productname.toUpperCase().indexOf(enteredvalue)<0){
    divs[count].style.display="none"

  }
  else{
    divs[count].style.display="block"
  }
}
})