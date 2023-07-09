let buttonsContainer = document.querySelector('.buttons')

function matchMediaFunc() {
if (window.matchMedia("(max-width: 150px)").matches) {
    buttonsContainer.innerHTML = `
    <div class="btn bg-grey ac" id="ac">C</div>
    <div class="btn bg-grey dot" id="dot">.</div>
    <div class="btn bg-orange plus error" id="plus">+</div>
    <div class="btn bg-orange minus error" id="minus">-</div>
    <div class="btn bg-orange multiply error" id="multiply">*</div>
    <div class="btn bg-orange division error" id="division">/</div>
    <div class="btn bg-orange degree error" id="degree">^</div>
    <div class="btn bg-orange sqrt error" id="sqrt">√</div>
    <div class="btn bg-grey one" id="one">1</div>
    <div class="btn bg-grey two" id="two">2</div>
    <div class="btn bg-grey three" id="three">3</div>
    <div class="btn bg-grey four" id="four">4</div>
    <div class="btn bg-grey five" id="five">5</div>
    <div class="btn bg-grey six" id="six">6</div>
    <div class="btn bg-grey seven" id="seven">7</div>
    <div class="btn bg-grey eignt" id="eight">8</div>
    <div class="btn bg-grey nine" id="nine">9</div>
    <div class="btn bg-grey zero" id="zero">0</div>
    <div class="btn bg-orange percent error" id="percent">%</div>
    <div class="btn bg-red equal error" id="equal">=</div>
    `
  } else if (window.matchMedia("(min-width: 150px) and (max-width: 215px)").matches) {
    buttonsContainer.innerHTML = `
    <div class="btn bg-grey ac" id="ac">C</div>
    <div class="btn bg-grey dot" id="dot">.</div>
    <div class="btn bg-orange plus error" id="plus">+</div>
    <div class="btn bg-orange minus error" id="minus">-</div>
    <div class="btn bg-orange multiply error" id="multiply">*</div>
    <div class="btn bg-orange division error" id="division">/</div>
    <div class="btn bg-orange degree error" id="degree">^</div>
    <div class="btn bg-orange sqrt error" id="sqrt">√</div>
    <div class="btn bg-grey one" id="one">1</div>
    <div class="btn bg-grey two" id="two">2</div>
    <div class="btn bg-grey three" id="three">3</div>
    <div class="btn bg-grey four" id="four">4</div>
    <div class="btn bg-grey five" id="five">5</div>
    <div class="btn bg-grey six" id="six">6</div>
    <div class="btn bg-grey seven" id="seven">7</div>
    <div class="btn bg-grey eignt" id="eight">8</div>
    <div class="btn bg-grey nine" id="nine">9</div>
    <div class="btn bg-grey zero" id="zero">0</div>
    <div class="btn bg-orange percent error" id="percent">%</div>
    <div class="btn bg-red equal error" id="equal">=</div>
    `
} else if (window.matchMedia("(min-width: 216px) and (max-width: 290px)").matches) {
    buttonsContainer.innerHTML = `
    <div class="btn bg-grey ac" id="ac">C</div>
    <div class="btn bg-grey dot" id="dot">.</div>
    <div class="btn bg-orange percent error" id="percent">%</div>
    <div class="btn bg-orange plus error" id="plus">+</div>
    <div class="btn bg-orange minus error" id="minus">-</div>
    <div class="btn bg-orange degree error" id="degree">^</div>
    <div class="btn bg-orange multiply error" id="multiply">*</div>
    <div class="btn bg-orange division error" id="division">/</div>
    <div class="btn bg-orange sqrt error" id="sqrt">√</div>
    <div class="btn bg-grey one" id="one">1</div>
    <div class="btn bg-grey two" id="two">2</div>
    <div class="btn bg-grey three" id="three">3</div>
    <div class="btn bg-grey four" id="four">4</div>
    <div class="btn bg-grey five" id="five">5</div>
    <div class="btn bg-grey six" id="six">6</div>
    <div class="btn bg-grey seven" id="seven">7</div>
    <div class="btn bg-grey eignt" id="eight">8</div>
    <div class="btn bg-grey nine" id="nine">9</div>
    <div class="btn bg-grey zero" id="zero">0</div>
    <div class="btn bg-red equal error" id="equal">=</div>
    `
} else if (window.matchMedia("(min-width: 291px) and (max-width: 480px)").matches) {
    buttonsContainer.innerHTML = `
    <div class="btn bg-grey ac" id="ac">C</div>
    <div class="btn bg-grey dot" id="dot">.</div>
    <div class="btn bg-orange percent error" id="percent">%</div>
    <div class="btn bg-orange plus error" id="plus">+</div>

    <div class="btn bg-grey one" id="one">1</div>
    <div class="btn bg-grey two" id="two">2</div>
    <div class="btn bg-grey three" id="three">3</div>
    <div class="btn bg-orange minus error" id="minus">-</div>
    

    <div class="btn bg-grey four" id="four">4</div>
    <div class="btn bg-grey five" id="five">5</div>
    <div class="btn bg-grey six" id="six">6</div>
    <div class="btn bg-orange multiply error" id="multiply">*</div>

    <div class="btn bg-grey seven" id="seven">7</div>
    <div class="btn bg-grey eignt" id="eight">8</div>
    <div class="btn bg-grey nine" id="nine">9</div>
    <div class="btn bg-orange division error" id="division">/</div>

    <div class="btn bg-orange degree error" id="degree">^</div>
    <div class="btn bg-orange sqrt error" id="sqrt">√</div>
    <div class="btn bg-grey zero" id="zero">0</div>
    <div class="btn bg-red equal error" id="equal">=</div>
    `
} else if (window.matchMedia("(min-width: 481px)").matches) {
    buttonsContainer.innerHTML = `
                    <div class="btn bg-grey ac" id="ac">C</div>
                    <div class="btn bg-grey dot" id="dot">.</div>
                    <div class="btn bg-orange percen error" id="percent">%</div>
                    <div class="btn bg-orange plus error" id="plus">+</div>
                    <div class="btn bg-orange minus error" id="minus">-</div>

                    <div class="btn bg-grey one" id="one">1</div>
                    <div class="btn bg-grey two" id="two">2</div>
                    <div class="btn bg-grey three" id="three">3</div>
                    <div class="btn bg-orange multiply error" id="multiply">*</div>
                    <div class="btn bg-orange division error" id="division">/</div>

                    <div class="btn bg-grey four" id="four">4</div>
                    <div class="btn bg-grey five" id="five">5</div>
                    <div class="btn bg-grey six" id="six">6</div>
                    <div class="btn bg-orange degree error" id="degree">^</div>
                    <div class="btn bg-orange sqrt error" id="sqrt">√</div>

                    <div class="btn bg-grey seven" id="seven">7</div>
                    <div class="btn bg-grey eignt" id="eight">8</div>
                    <div class="btn bg-grey nine" id="nine">9</div>
                    <div class="btn bg-grey zero" id="zero">0</div>
                    <div class="btn bg-red equal error" id="equal">=</div>
    `
}
}

window.onresize = matchMediaFunc
window.onload = matchMediaFunc

function updateLocaleStorage(key) {
    if(localStorage.length < 100) {
        localStorage.setItem(`${localStorage.length+1}`, key.toString())
    }
    else {
        for(let i = localStorage.length; i >= 2; i--) {
            localStorage.setItem(`${i}`, localStorage[i-1])
        }
        localStorage.setItem('1', key.toString())
    }
    
    document.querySelector('.list-operations').innerHTML = ''
    for(let i = 1; i <= localStorage.length; i++) {
        document.querySelector('.list-operations').innerHTML += 
            `<div class="list-item">${localStorage[i]}</div>\n`
    }
}

for(let i = 1; i <= localStorage.length; i++) {
    document.querySelector('.list-operations').innerHTML += 
        `<div class="list-item">${localStorage[i]}</div>\n`
}

let a = ''
let b = ''
let sign = ''
let finish = false
let error = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '*', '/', '√', '^', '%', '+/-']

const out = document.querySelector('.screen')

function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    error = false
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) 
        return
    if(event.target.classList.contains('ac')) {
        clearAll()
        return
    }
        

    out.textContent = ''
    const key = event.target.textContent

    if(digit.includes(key)) {
        if(error) error = false

        if (b.toString() === '' && sign == ''){   
            if(a.toString().startsWith('0') && !a.toString().startsWith('0.') && key != '.'){   
                if(key != '0') {
                    a = key
                }
            }
            else if(a.toString().includes('.') && key == '.') {
                
            }
            else if((a.toString() === '' || a.toString() === '0')  && key == '.') {
                a = '0.'
            }
            else {   
                if(a.toString().length < 25) 
                    a += key
            }
            out.textContent = a
        }
        else if (a.toString() !== '' && b.toString() !== '' && finish) {
            if(key === '.') {
                a = '0.'
            }
            else {
                a = key
            }
            b = ''
            sign = ''
            finish = false
            out.textContent = a
        }
        else {
            if(sign.toString() === '√') {
                b += key
                a = b
                b = ''
                sign = ''
                out.textContent = a
                return
            }
            else
            if(b.toString().startsWith('0') && !b.toString().startsWith('0.') && key != '.'){   
                if(key != '0') {
                    b = key
                }
            }
            else if(b.toString().includes('.') && key === '.') {
                
            }
            else if(b.toString() === '' && key === '.') {
                b += '0.'
            }
            else {   
                if(b.toString().length < 25) 
                    b += key
            }
            out.textContent = b
        }
        console.log(a, b ,sign, finish)
        return
    }

    if(action.includes(key)) {
        if(a === '') 
            a = '0'

        if(error) {
            out.textContent = 'Error'
            return
        }

        if(a.toString() !== '' && b.toString() !== '' && finish) {
            b = ''
            finish = false
        }
        sign = key

        if(b.toString() !== '')
        {
            a = b   
        }
        b = ''
        out.textContent = sign
        console.log(a, b ,sign, finish)
        return
    }

    if(key === '=') {
        if(error) {
            out.textContent = 'Error'
            return
        }

        if(a.toString() === '') {
            out.textContent = '0'
            return
        }

        if(b.toString() === '')
            b = a

        let res = null
        switch (sign) {
            case '+':
                res = (+a)+(+b)
                if(res !== Infinity)
                updateLocaleStorage(`${+a} + ${+b} = ${res}`)
                a = res
                break
            case '-':
                res = (+a)-(+b)
                if(res !== Infinity)
                updateLocaleStorage(`${+a} - ${+b} = ${res}`)
                a = res
                break
            case '*':
                res = (+a)*(+b)
                if(res !== Infinity)
                updateLocaleStorage(`${+a} * ${+b} = ${res}`)
                a = res
                break
            case '/':
                if(b.toString() === '0'){
                    out.textContent = 'Error'
                    a = ''
                    b = ''
                    sign = ''
                    error = true
                    return
                }
                res = (+a)/(+b)
                if(res !== Infinity)
                updateLocaleStorage(`${+a} / ${+b} = ${res}`)
                a = res
                break
            case '√':
                if((+a) < 0) {
                    out.textContent = 'Error'
                    a = ''
                    b = ''
                    sign = ''
                    error = true
                    return
                }
                res = (+a)**(0.5)
                if(res !== Infinity)
                    updateLocaleStorage(`√${+a} = ${res}`)
                a = res
                // b = ''
                break
            case '^':
                if((+a) < 0 && parseInt(b) != (+b) || (+a) === 0 && (+b) === 0 ) {
                    out.textContent = 'Error'
                    a = ''
                    b = ''
                    sign = ''
                    error = true
                    return
                }
                res = (+a)**(+b)
                if(res !== Infinity)
                    updateLocaleStorage(`${+a} ^ ${+b} = ${res}`)
                a = res
                break
            case '%':
                res = (+a) * (+b) / 100.0
                if(res !== Infinity)
                    updateLocaleStorage(`${+a} % ${+b} = ${res}`)
                a = res
                break
        }
        if(+a === Infinity) {
            out.textContent = 'Error'
            a = ''
            b = ''
            sign = ''
            error = true
            return
        }
        finish = true
        out.textContent = a
        console.log(a, b, sign, finish)
    }
}

let er = false

out.addEventListener('DOMSubtreeModified', () => {
    if(out.textContent === 'Error') {
        let buttons = document.getElementsByClassName('error')
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = '0.3'
        }
        // let k = document.querySelector('.plus')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.minus')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.multiply')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.division')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.degree')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.sqrt')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.percent')
        // k.style.opacity = '0.3'
        // k = document.querySelector('.equal')
        // k.style.opacity = '0.3'
        er = true
    }
    else
    if(er) {
        let buttons = document.getElementsByClassName('error')
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = '1'
        }
        // let k = document.querySelector('.plus')
        // k.style.opacity = '1'
        // k = document.querySelector('.minus')
        // k.style.opacity = '1'
        // k = document.querySelector('.multiply')
        // k.style.opacity = '1'
        // k = document.querySelector('.division')
        // k.style.opacity = '1'
        // k = document.querySelector('.degree')
        // k.style.opacity = '1'
        // k = document.querySelector('.sqrt')
        // k.style.opacity = '1'
        // k = document.querySelector('.percent')
        // k.style.opacity = '1'
        // k = document.querySelector('.equal')
        // k.style.opacity = '1'
        er = false
    }
})
