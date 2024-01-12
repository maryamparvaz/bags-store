 let colors = document.querySelectorAll('#colors>span')
        let c1 = document.getElementById('c1')
        let ac1 = document.getElementById('ac1')
        let ac2 = document.getElementById('ac2')
        let rit = document.getElementById('rit')
        let bag = document.getElementById('bag')
        let cll = document.getElementById('cll')
        let numm = document.getElementById('numm')
        let ac = document.querySelectorAll('#ac>li')
        let mini = document.querySelectorAll('#mini>figure>img')
        let logo1 = document.getElementById('logo1')
        let page6 = document.getElementById('page6')
        let noad = document.getElementById('noad')
        let sale = 0
        // for close page6
                function cl6() {
                        page6.style.left = '100%'
                }
        // for colors page 21
        colors.forEach(element => {
                element.addEventListener('click', () => {
                        colors.forEach(val => {
                                val.style.border = '.5px solid gray'
                                element.setAttribute('data-status', 'off')

                        });

                        if ((element.getAttribute('data-status')) == 'off') {
                                element.style.border = '2px solid black'
                                element.setAttribute('data-status', 'on')
                        } else {
                                element.style.border = '0px'
                                element.setAttribute('data-status', 'off')
                        }
                        if (element.getAttribute('data-num') == 1) {
                                c1.innerHTML = 'white'
                        } else {
                                c1.innerHTML = 'pink'

                        }
                })
        });
        // for accordion page21
        ac1.setAttribute('data-height', ac1.clientHeight)
        ac2.setAttribute('data-height', ac2.clientHeight)
        ac.forEach((val) => {
                val.children[1].style.height = 0
                val.addEventListener('click', () => {
                        if (val.getAttribute('data-status') == 'off') {
                                val.children[1].style.height = (val.children[1].getAttribute('data-height')) + 'px'
                                val.children[0].children[0].innerHTML = '_'
                                val.setAttribute('data-status', 'on')
                        } else {
                                val.setAttribute('data-status', 'off')
                                val.children[1].style.height = 0
                                val.children[0].children[0].innerHTML = '+'
                        }
                })
        })
        // cart page
        let neww = []
        let bagsall = []
        let r = JSON.parse(localStorage.getItem('data'))
        function cart(f) {
                // f.target.parentElement.nextElementSibling.style.right = '0'
                f.stopImmediatePropagation()
                sale++
                // numm.innerText = sale
                const obj = { 'sale': sale }
                neww.push(obj)
                localStorage.setItem('data', JSON.stringify(neww))
                // numm.innerText = sale;
                // for adding to cart
                let _div1 = document.createElement('div')
                _div1.innerHTML = `
                       <div  class="w-full flex justify-end">
                               <i onclick="closeopt(this)" class=" bi bi-x text-red-500 text-[25px] cursor-pointer"></i>
                       </div>
                        <div class="w-full flex">
                                        <figure class="w-[200px] mr-5">
                                                <img src="../img/70.jpg" alt="" class="flex h-[200px] object-cover rounded-[10px]">
                                        </figure>
                                        <div
                                                class="w-[80%] flex flex-wrap content-center my-2 *:lg:my-5 *:lg:text-[22px] *:text-[19px] ">
                                                <div class="flex justify-evenly  ml-5 lg:ml-0">
                                                        <h4>The Original Bigger Carry-On</h4>
                                                </div>
                                                <div class="w-full ml-5 lg:ml-0">
                                                        <span>color</span>
                                                        <span>pink</span>
                                                </div>
                                                <span class="w-full ml-5 lg:ml-0 text-red-600">140</span>
                                        </div>
                        </div>
                `
                _div1.classList.add('cartt')
                page6.appendChild(_div1)
                // dddddddddddddddddddddddddddddddddddddddddddddddddddd
                // dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                // ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                // ddddddddddddddddddddddddddddddddddddddddddddddddddddd
                let buy = _div1.innerHTML
                bagsall.push(buy)
                const newTask = {
                        buy: buy
                };
                fetch('https://65997639a20d3dc41cefc559.mockapi.io/cart', {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        // Send your data in the request body as JSON
                        body: JSON.stringify(newTask)
                }).then(res => {
                        if (res.ok) {
                                return res.json();
                        }
                        // handle error
                }).then(task => {
                        // do something with the new task
                        f.target.parentElement.nextElementSibling.style.right = '0'

                }).catch(error => {
                        // handle error
                        f.target.parentElement.nextElementSibling.style.right = '0'
                        noad.innerHTML = 'DONT ADD PLEASE DO IT AGAIN'
                })
        }
        // let z = 0
        async function _refresh() {
                let x = await fetch('https://65997639a20d3dc41cefc559.mockapi.io/cart')
                let s = await x.json()
                s.map((val) => {
                        let div = document.createElement('div');
                        idd = val.id
                        div.innerHTML = `
                        ${ val.buy }
                        
                        `
                        div.classList.add('cartt')
                        page6.appendChild(div)
                })
        }
        _refresh()
        function clos(f) {
                f.target.parentElement.style.right = '-100%'
        }
        window.addEventListener('click', () => {
                rit.style.right = '-100%'

        })
        // for mini images
        mini.forEach(element => {
                element.addEventListener('click', () => {
                        mini.forEach(val => {
                                val.style.border = '0px'
                                element.setAttribute('data-status', 'off')
                        });
                        if ((element.getAttribute('data-status')) == 'off') {
                                element.style.border = '1px solid black'
                                element.setAttribute('data-status', 'on')
                        } else {
                                element.style.border = '0px'
                                element.setAttribute('data-status', 'off')
                        }
                        let p = element.getAttribute('src')
                        bag.setAttribute('src', p)

                })
        });
        // page cart
        // numm.addEventListener('click', () => {

        // })
        // close select in cart
       function closeopt(r) {
                let choos = document.querySelectorAll('#choos>i')
                choos.forEach((element, index) => {
                        element.addEventListener(('click'), () => {
                                fetch('https://65997639a20d3dc41cefc559.mockapi.io/cart/' + index, {
                                        method: 'DELETE',

                                }).then(res => {
                                        if (res.ok) {
                                                return res.json();
                                        }
                                        // handle error
                                }).then(task => {
                                        // Do something with deleted task
                                }).catch(error => {
                                        // handle error
                                })
                        })
                });
                r.parentElement.parentElement.remove();
        }
        // click logo
        function closecart() {
                window.location.href = '../index.html'
        }
        // finish page
        numm.addEventListener('click', () => {
                page6.style.left = '0'
        })
        // view cart
        function op() {
                page6.style.left = '0'
        }