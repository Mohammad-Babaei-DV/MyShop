let menutoggle = document.getElementById('menutoggle')
let menu = document.getElementById('menu')
m = 0
menutoggle.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  if (m % 2) {
    menutoggle.classList.remove('icon-cancel-1')
    menutoggle.classList.add('icon-menu')
    menu.classList.add('right-[-300%]')
    menu.classList.remove('right-0')
    m++
  } else {
    menutoggle.classList.add('icon-cancel-1')
    menutoggle.classList.remove('icon-menu')
    menu.classList.remove('right-[-300%]')
    menu.classList.add('right-0')
    m++
  }

})
window.addEventListener('click', () => {
  menu.classList.add('right-[-300%]')
  menu.classList.remove('right-0')
  menutoggle.classList.remove('icon-cancel-1')
  menutoggle.classList.add('icon-menu')
  m = 0
})



let scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

window.addEventListener('scroll', () => {
  let scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.pageYOffset > 500) {

    scrollToTopBtn.classList.add('lg:flex')
  } else {
    scrollToTopBtn.classList.remove('lg:flex')

  }
});

let basketBtn = document.querySelectorAll("#basketBtn")
let basketpage = document.getElementById("basketpage")
let closepage = document.getElementById('closepage')

let b = 1
basketBtn.forEach((val) => {
  val.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    if (b % 2) {
      basketpage.classList.remove('right-[-150%]')
      basketpage.classList.add('right-0')
      b++
    } else {
      basketpage.classList.add('right-[-150%]')
      basketpage.classList.remove('right-0')
      b++
    }
  })
})

closepage.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  basketpage.classList.add('right-[-150%]')
  basketpage.classList.remove('right-0')
  b = 1
})
window.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  basketpage.classList.add('right-[-150%]')
  basketpage.classList.remove('right-0')
  b = 1
})





let product = document.getElementById('product')


async function getData() {
  let x = await fetch('https://fakestoreapi.com/products?limit=20')
  let y = await x.json()
  y.map((val) => {
    let _div = document.createElement('div')
    _div.innerHTML = `
    <div id="targetparent" data-num="${val.id}" class="relative rounded-[15px] overflow-hidden w-[280px] mx-[10px] my-[15px] h-[400px] group border-[2px] hover:shadow-md hover:shadow-slate-500 duration-[.2s] flex flex-wrap justify-center   ">
                            <div id="detailparent" class="w-full h-full duration-[.4s] absolute z-[1] top-[150%] left-0 flex flex-wrap justify-center content-start  border bg-white rounded-[10px] px-[10px] py-[5px] ">
                                    <span  id="dclose" class="w-full flex justify-end items-start"><i class="icon-cancel w-[25px] h-[25px] flex justify-center items-center p-[2px] rounded-[5px] text-[25px] text-black hover:text-white border-[2px] border-[#5C8374] hover:bg-[#93B1A6] cursor-pointer duration-[.4s] "></i></span>
                                <div class="w-full h-[70px] flex flex-wrap justify-end items-start ">
                                        <span class="w-full">Rate: ${val.rating.rate}</span>
                                        <span class="w-full">Category: ${val.category}</span>
                                </div>
                                <div class="w-full justify-center overflow-hidden text-[15px]">${val.description}</div>
                            </div>
     
                            <figure class="relative w-full h-[200px] flex justify-center  items-start overflow-hidden border-b  ">
                                <img class="w-full h-full object-contain p-[10px]" src="${val.image}" alt="">
                                <figcaption class="absolute w-full h-full flex justify-center items-end group-hover:bg-[#040d1263] duration-[.4s]">
                                       <div class=" relative w-full h-[70px]">
                                           <i id="addto" data-num="${val.id}" data-src="${val.image}" data-title="${val.title}" data-price="${val.price}"  class="absolute hover:scale-[.9] rounded-[10px] p-[10px] bg-[#93B1A6] text-[30px] text-[#183D3D] cursor-pointer flex items-center left-[15%] bottom-[-80px] group-hover:bottom-[20px] hover:text-white duration-[.4s] icon-basket" title="Add To Basket"></i>
                                           <i id='like' data-like="off" class="absolute hover:scale-[.9] rounded-[10px] p-[10px] bg-[#93B1A6] text-[30px] text-[#183D3D] cursor-pointer flex items-center left-[40%] bottom-[-80px] group-hover:bottom-[20px] hover:text-white duration-[.6s] icon-heart-2" title="Favorite"></i>
                                           <i id='details' class="absolute hover:scale-[.9] rounded-[10px] p-[10px] bg-[#93B1A6] text-[30px] text-[#183D3D] cursor-pointer flex items-center left-[65%] bottom-[-80px] group-hover:bottom-[20px] hover:text-white duration-[.8s] icon-clipboard" title="Details"></i>
                                       </div>
                                </figcaption>
                            </figure>
                            <div class="w-full h-[200px] flex flex-wrap justify-center items-center">
                                <div class="w-[80%] h-[80%] text-[25px] flex justify-start items-start py-[10px] capitalize overflow-hidden">${val.title}</div>
                                <div class="w-[80%] h-[20%] text-[20px] flex justify-start items-center capitalize">$${val.price}</div>
                            </div>
                        </div>

    `
    product.appendChild(_div)

  })
 
  let addto = document.querySelectorAll('#targetparent>figure>figcaption>div>#addto')
  let like = document.querySelectorAll('#targetparent>figure>figcaption>div>#like')
  let details = document.querySelectorAll('#targetparent>figure>figcaption>div>#details')
  let dclose = document.querySelectorAll('#dclose')
  let selected = document.getElementById('selected')
  let basketnumber = document.querySelectorAll('#basketnumber')
  
  p = 1
  g = 0 
 
  addto.forEach((val) => {

    
   


    val.addEventListener('click', (r) => {
      
      if (p == 1) {
        g++
        r.target.classList.remove('flex')
        r.target.classList.add('hidden')
        numberrr(g)
        let divv = document.createElement('div')
        divv.classList.add('w-full', 'flex', 'flex-wrap', 'justify-center', 'items-center')

        divv.innerHTML = `
            <div data-num="${r.target.getAttribute('data-num')}" id='targetproduct' class="relative my-[70px] w-[90%] h-[150px] rounded-[10px] shadow-xl bg-white shadow-slate-400 rounded-b-[10px] flex justify-center group ">
            <span id='pclose' class="absolute right-2 rounded-[10px] border w-[30px] h-[30px] text-[25px] cursor-pointer hover:text-white duration-[.4s] z-[0] top-[-30px] md:top-0 md:group-hover:top-[-30px] bg-[#f38989] icon-cancel flex justify-center items-center "></span>
            <figure class="absolute rounded-t-[10px] left-[-1px] top-[-70px] w-[100px] h-[70px] flex justify-center items-start overflow-hidden">
                    <img class="w-full h-full object-contain" src="${r.target.getAttribute('data-src')}" alt="">
                </figure>
                <div class="w-full absolute h-full rounded-[10px] flex flex-wrap bg-white justify-center items-center">
                    <div class="w-[95%] h-[100px] text-[20px] flex justify-start items-center capitalize overflow-hidden ">${r.target.getAttribute('data-title')}</div>
                    <div class="w-[95%] h-[30px]  text-[15px] flex justify-start items-center capitalize">${r.target.getAttribute('data-price')}</div>
                </div>
            </div> 
       `
        selected.appendChild(divv)





        let pclose = document.querySelectorAll('#pclose')
        if (pclose != null) {
          pclose.forEach((val) => {
            val.addEventListener('click', (e) => {
              g--
              e.stopImmediatePropagation()
              e.target.closest('#targetproduct').remove()
              r.target.classList.add('flex')
              r.target.classList.remove('hidden')
              numberrr(g)
            
              
            })
          })
          
          p = 1
        }

      





      }
    })


  });

  like.forEach((val) => {
    val.addEventListener('click', (l) => {
      let status = l.target.getAttribute('data-like')
      if ((status == 'off')) {

        l.target.classList.remove('bg-[#93B1A6]')
        l.target.classList.add('bg-[tomato]')
        l.target.setAttribute('data-like', 'on')

      } else {

        l.target.classList.remove('bg-[tomato]')
        l.target.classList.add('bg-[#93B1A6]')
        l.target.setAttribute('data-like', 'off')

      }
    })
  })

  details.forEach((val) => {
    val.addEventListener('click', (e) => {
      e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove('top-[150%]')
      e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.add('top-0')
    })
  })

  dclose.forEach((val) => {
    val.addEventListener('click', (e) => {
       e.stopImmediatePropagation()
      e.target.parentElement.parentElement.classList.remove('top-0')
      e.target.parentElement.parentElement.classList.add('top-[150%]')
    })
  })

 
 function numberrr(g) {
  basketnumber.forEach((val)=>{
          
    val.innerHTML = g
  
  
  })
 }




























}
getData()

