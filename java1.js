const ta= document.querySelectorAll(".btn2");
const tp= document.querySelectorAll(".final");

      ta.forEach((tab, index)=>{
        tab.addEventListener('click', ()=>{
      ta.forEach(tab=>{tab.classList.remove('act')})      
          tab.classList.add('act');
      tp.forEach(content1=>{content1.classList.remove('act')})
          tp[index].classList.add('act');
         })
      })