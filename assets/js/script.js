precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


const btnSuma = document.querySelector(".btnSuma")
const result = document.querySelector('#result')
const btnResta = document.querySelector(".btnResta")
const total = document.querySelector('#total')

let contador = 0

function actualizarTotal() {
    let pago = contador * precio
    total.innerHTML = pago
}

btnSuma.addEventListener("click", ()=> {
    contador += 1
    result.innerHTML = contador
    actualizarTotal()
})

btnResta.addEventListener("click", ()=> {
    if (contador > 0) {
    contador -= 1
    result.innerHTML = contador
    actualizarTotal()
    }
})

