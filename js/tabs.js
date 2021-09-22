const TabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')

for(let btn of TabsHandlerElems) {
    btn.addEventListener('click', () => {
        TabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
            btn.classList.add('design-list__item_active')
           
            tabsContentElems.forEach(content => {
                if (content.dataset.tabsField === btn.dataset.tabsHandler){
                    content.classList.remove('hidden')
                } else{
                    content.classList.add('hidden')
                }
            })
    })
}