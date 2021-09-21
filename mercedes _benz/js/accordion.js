 const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')



btns.forEach((btn,index)=>{
    btn.addEventListener('click', () => {
    btns.forEach((BtnItem, idx)=>{
      
        if(BtnItem === btn){
         BtnItem.classList.toggle('feature__link_active')
          lists[idx].classList.toggle('hidden')
        }
        else{
          BtnItem.classList.remove('feature__link_active')
          lists[idx].classList.add('hidden')
        }
    })
   
       
    })
})