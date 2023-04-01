const tabb= document.querySelectorAll(".btn");
const tabp= document.querySelectorAll(".flex-container");

      tabb.forEach((tab, index)=>{
        tab.addEventListener('click', ()=>{
      tabb.forEach(tab=>{tab.classList.remove('active')})      
         tab.classList.add('active');
      tabp.forEach(content=>{content.classList.remove('active')})
         tabp[index].classList.add('active');
        })
      })





      

