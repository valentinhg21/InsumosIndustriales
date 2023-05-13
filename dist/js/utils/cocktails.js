export const redirection = () => {
    let cocktails = document.querySelectorAll('.item__img-hover');
    if(cocktails.length > 0){
        cocktails.forEach((cock) => {
            cock.addEventListener('click', e => {
                let url  = cock.parentElement.parentElement.parentElement.firstElementChild.getAttribute("href")
                window.location.href = `${url}`;
            })
        })
    }
}

