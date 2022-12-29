const data = [
    { 
        id: 3455,
        price: 34000,
        size: '220x90'
    },

    { 
        id: 3468,
        price: 78000,
        size: '250x90'
    },
    { 
        id: 3578,
        price: 56000,
        size: '240x90'
    }

]

const select = document.querySelector('.sort')
const card = document.querySelector('.product-cards-block')

const display_data = (data) => {

    card.innerHTML = "";

    data.forEach(item => {

        card.innerHTML += 
    
        `
        <div class="product-card product-card_single">
    
        <div class="product-card_image product-card_single__image"></div>
        
        <div class="product-card_info-row">
    
            <p>Ціна</p>
            <p>${item.price} грн</p>
    
        </div>
    
        <div class="product-card_info-row">
    
            <p>Розмір</p>
            <p>${item.size}</p>
    
        </div>
    
        <button class="button product-сontainer_button">Детальніше</button>
        
        </div>
        `
    
    })

}

display_data(data);


select.addEventListener('change', e => {
    if (e.target.value ==="1"){

        data.sort((a, b) => {
            return a.price - b.price;
        })

        display_data(data);

    } else {

        data.sort((a, b) => {
            return b.price - a.price;
        })

        display_data(data);
    }
})



