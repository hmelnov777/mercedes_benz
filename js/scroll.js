 const linksHead = document.querySelectorAll('.menu-list__link')
 const mainScroll = document.querySelectorAll('.main__scroll')
 

 linksHead.forEach(link =>{
    link.addEventListener('click', (event) => {
     event.preventDefault() 

     const ID = event.target.getAttribute('href').substr(1)
     console.log(ID)
     document.getElementById(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'

     })
    })
})

mainScroll.forEach(link =>{
    link.addEventListener('click', (event) => {
     event.preventDefault() 

     const ID = event.target.getAttribute('href').substr(1)
     console.log(ID)
     document.getElementById(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'

     })
    })
})