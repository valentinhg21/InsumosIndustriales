export const according = () => {
    let buttons = document.querySelectorAll('.accor-title')
    if(buttons.length > 0){
        buttons.forEach(btn => {
            btn.addEventListener('click', e => {
                let content = btn.parentElement
                let info = content.querySelectorAll('.accor-info');

          

                if(content.classList.contains('active')){
                    content.classList.remove('active')
                    info.forEach(text => {
                        text.style.maxHeight = null
                    })
                }else{
                    content.classList.add('active')
                    info.forEach(text => {
                        console.log(text.scrollHeight);
                        text.style.maxHeight = text.scrollHeight + "px";
                    })
                }

               
            })
        });
    }
}