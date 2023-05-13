export const filter = () => {
   let filtros = document.querySelectorAll('.filter')
   let items = document.querySelectorAll('.item')
   filtros.forEach((el, i) => {
        if(i == 0){
          el.classList.add('active')
          items.forEach(el => {
            el.classList.remove('d-none')
            el.classList.add('scale-in-center')
            setTimeout(() => {
               el.classList.remove('scale-in-center')

            }, 500);
          });
        }

        el.addEventListener('click', e => {
            filtros.forEach(el => {
               el.classList.remove('active')
            });
            el.classList.add('active')
            let type = el.dataset.filter
            items.forEach(item => {
               
               if(type == 'all'){
                  item.classList.remove('d-none')
                  item.classList.add('scale-in-center')

               }else{
                  if(item.dataset.type === type){
                     item.classList.remove('d-none')
                     item.classList.add('scale-in-center')
                  }else{
                     item.classList.add('d-none')

                  }
               }

               items.forEach(item => {
                  setTimeout(() => {
                     item.classList.remove('scale-in-center')

                  }, 500);
               })

            });
        })

        
   })
}