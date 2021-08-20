// memory section 
const memory8GB = document.getElementById('memory-8gb')
const memory16GB = document.getElementById('memory-16gb')

// storage section 
const storage256GB = document.getElementById('storage-256gb')
const storage512GB = document.getElementById('storage-512gb')
const storage1TB = document.getElementById('storage-1tb')

// delivery section 
const deliveryFree = document.getElementById('delivery-free')
const deliveryCharge = document.getElementById('delivery-charge')

// price section 
const productPrice = document.getElementById('main-price')
const memoryPrice = document.getElementById('memory-price')
const storagePrice = document.getElementById('storage-price');
const deliveryPrice = document.getElementById('delivery-price');
const totalPrice = document.getElementById('total-price')

// discount section 
const discountInput = document.getElementById('discount-input')
const discountButton = document.getElementById('discount-btn')
const grandTotal = document.getElementById('grand-total')

// update price total
function updatePrice(type, price) {
    type.innerText = price
}

function priceTotal() {
    const productPriceUpdate = Number(productPrice.innerText)
    const memoryPriceUpdate = Number(memoryPrice.innerText)
    const storagePriceUpdate = Number(storagePrice.innerText)
    const deliveryPriceUpdate = Number(deliveryPrice.innerText)
    const totalPriceUpdate = productPriceUpdate + memoryPriceUpdate + storagePriceUpdate + deliveryPriceUpdate
    console.log(totalPriceUpdate)
    totalPrice.innerText = totalPriceUpdate
    grandTotal.innerText = totalPriceUpdate
}

// selected box
function selected(element) {
    return element.classList.contains('selected')
}



//event click handler 
memory8GB.addEventListener('click', function() {
    if (!selected(memory8GB)) {
        memory8GB.classList.add('selected')
        memory16GB.classList.remove('selected')
    }
    updatePrice(memoryPrice, '0')
    priceTotal()
})
memory16GB.addEventListener('click', function() {
    if (!selected(memory16GB)) {
        memory16GB.classList.add('selected')
        memory8GB.classList.remove('selected')
    }
    updatePrice(memoryPrice, '180')
    priceTotal()
})
storage256GB.addEventListener('click', function() {
    if (!selected(storage256GB)) {
        storage256GB.classList.add('selected')
        storage512GB.classList.remove('selected')
        storage1TB.classList.remove('selected')
    }
    updatePrice(storagePrice, '0')
    priceTotal()
})
storage512GB.addEventListener('click', function() {
    if (!selected(storage512GB)) {
        storage256GB.classList.remove('selected')
        storage512GB.classList.add('selected')
        storage1TB.classList.remove('selected')
    }
    updatePrice(storagePrice, '100')
    priceTotal()
})
storage1TB.addEventListener('click', function() {
    if (!selected(storage1TB)) {
        storage256GB.classList.remove('selected')
        storage512GB.classList.remove('selected')
        storage1TB.classList.add('selected')
    }
    updatePrice(storagePrice, '180')
    priceTotal()
})
deliveryFree.addEventListener('click', function() {
    if (!selected(deliveryFree)) {
        deliveryFree.classList.add('selected')
        deliveryCharge.classList.remove('selected')
    }
    updatePrice(deliveryPrice, '0')
    priceTotal()
})
deliveryCharge.addEventListener('click', function() {
    if (!selected(deliveryCharge)) {
        deliveryCharge.classList.add('selected')
        deliveryFree.classList.remove('selected')
    }
    updatePrice(deliveryPrice, '20')
    priceTotal()
})

// discount 20%
discountButton.addEventListener('click', function() {
    const discountValue = Number(totalPrice.innerText)
    const inputValue = discountInput.value
    const couponCode = 'stevekaku'
    if (inputValue.toLowerCase() == couponCode.toLowerCase()) {
        grandTotal.innerText = discountValue - ((discountValue * 20) / 100)

    }
    discountInput.value = ''
})