const faqSections = document.querySelectorAll('.faq-section')


faqSections.forEach((faqSection)=>{
    faqSection.addEventListener('click',()=>{
        faqSections.forEach((item)=>{
            if(faqSection != item){
                item.classList.remove('active')
            }
        })
        faqSection.classList.toggle('active')
    })
    
})