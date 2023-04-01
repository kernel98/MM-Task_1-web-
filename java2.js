const tab2= document.querySelectorAll(".lo");
const tap2= document.querySelectorAll(".dre");

      tab2.forEach((tab, index)=>{
        tab.addEventListener('click', ()=>{
      tab2.forEach(tab=>{tab.classList.remove('ac')})      
         tab.classList.add('ac');
      tap2.forEach(content2=>{content2.classList.remove('ac')})
         tap2[index].classList.add('ac');
        })
      })