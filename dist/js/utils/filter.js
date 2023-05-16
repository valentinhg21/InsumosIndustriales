export const filter = () => {
   let filtros = document.querySelectorAll('.filter')
   let items = document.querySelectorAll('.item')
   let select = document.querySelector('.select')
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

   select.addEventListener('click', () => {
      let ul = select.nextElementSibling
      ul.classList.toggle('active');
      filtros.forEach((el) => {
         let input  = document.getElementById('input')
         el.addEventListener('click', () => {
            ul.classList.remove('active');
            input.value = el.textContent
         })
      })
   })
}