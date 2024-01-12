let imgs2 = document.getElementById('four')
        let numm = document.getElementById('numm')
        let page6 = document.getElementById('page6')
        let logo = document.getElementById('logo')
        let pla2 = document.getElementById('pla2')
        let txt = document.getElementById('txt')
        let closeopt = document.querySelectorAll('.closeopt')
        let places = document.querySelectorAll('#pla2>img')
        let choos = document.querySelectorAll('#choos>i')
        // for close page6
        function cl6(){
                page6.style.left ='100%'
        }
        // use api
        async function page1() {
                let x = await fetch('https://65997639a20d3dc41cefc559.mockapi.io/page2')
                let y = await x.json()
                y.map((val) => {
                        let _div = document.createElement('div')
                        _div.innerHTML = `
                                 <figure data-num='${val.id}' onclick='par(this)' class="w-full overflow-hidden cursor-pointer">
                                        <img  src="${val.srcc}" alt="" class="w-full hover:scale-[1.2] transition-all duration-[.4s]">
                                </figure>
                                <div onclick='par(event)' class="w-full flex flex-wrap mb-3 sm:mb-0 cursor-pointer">
                                        <p class="text-[17px] my-2 mr-5">${val.name}</p>
                                        <span class="w-full text-[16px] text-red-600">${val.price}</span>
                                        <span class="w-full text-[16px]">${val.newprice}</span>
                                </div>
                        `
                        imgs2.appendChild(_div)
                })

        }
        page1()
        // location page
        function par(e) {
                if (e.getAttribute('data-num') == 1) {
                        window.location.href = 'pages/page2-1.html'
                } else if (e.getAttribute('data-num') == 2) {
                        window.location.href = 'pages/page2-2.html'
                } else if (e.getAttribute('data-num') == 3) {
                        window.location.href = 'pages/page2-3.html'
                } else if (e.getAttribute('data-num') == 4) {
                        window.location.href = 'pages/page24.html'
                }
        }
        // finish page
        async function _refresh() {
                let x = await fetch('https://65997639a20d3dc41cefc559.mockapi.io/cart')
                let s = await x.json()
                s.map((val) => {
                        let div = document.createElement('div');
                        idd = val.id
                        div.innerHTML = `${val.buy}
                        `
                        div.classList.add('cartt')
                        page6.appendChild(div)
                })
        }
        _refresh()
        
        numm.addEventListener('click', () => {
                page6.style.left = '0'
        })
        // close select in cart
        closeopt.forEach(element => {
                element.addEventListener('click', () => {
                        element.parentElement.parentElement.remove()
                })
        });
        // click logo
        function closecart() {
                window.location.href = 'index.html'
        }
        // click for places
        function clic(e) {
                places.forEach((val) => {
                        val.style.zIndex = '-1'
                })
                if (e.target.value == '1') {
                        pla2.children[0].style.zIndex = '50'
                        txt.innerHTML = `
                        Away in London:<br> Seven Dials
                        `
                } else if (e.target.value == '2') {
                        pla2.children[3].style.zIndex = '50'
                        txt.innerHTML = `
                        Away in Boston: <br>Seaport
                        `
                } else if (e.target.value == '3') {
                        pla2.children[1].style.zIndex = '50'
                        txt.innerHTML = `
                        Away in Austin:<br> Domain Northside
                        `
                } else if (e.target.value == '4') {
                        pla2.children[4].style.zIndex = '50'
                        txt.innerHTML = `
                        Away in Chicago:<br>  Gold Coast
                        `
                } else if (e.target.value == '5') {
                        pla2.children[2].style.zIndex = '50'
                        txt.innerHTML = `
                        Away in San Francisco: <br>Hayes Valley
                        `
                } else if (e.target.value == '6') {
                        pla2.children[5].style.zIndex = '50'
                        txt.innerHTML = `
                        Away in Dallas: <br>Knox-Henderson
                        `
                }

        }