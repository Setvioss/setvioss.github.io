const data = [
    { 
        id_2: 'item_234',
        id: 'img_4.jpg',
        price: 34000,
        size: '220x90',
        color: 'green'
    },

    { 
        id_2: 'item_235',
        id: 'img_4.jpg',
        price: 78000,
        size: '250x90'
    },
    { 
        id_2: 'item_236',
        id: 'img_4.jpg',
        price: 56000,
        size: '240x90',
        color: 'red'
    },
    { 
        id_2: 'item_237',
        id: 'img_4.jpg',
        price: 48000,
        size: '240x90',
        color: 'green'
    },
    { 
        id_2: 'item_238',
        id: 'img_4.jpg',
        price: 15000,
        size: '240x90'
    },
    { 
        id_2: 'item_239',
        id: 'img_4.jpg',
        price: 23000,
        size: '240x90',
        color: 'green'
    },
    { 
        id_2: 'item_240',
        id: 'img_4.jpg',
        price: 84000,
        size: '240x90',
        color: 'red'
    },
    { 
        id_2: 'item_241',
        id: 'img_4.jpg',
        price: 41000,
        size: '240x90'
    },
    { 
        id_2: 'item_242',
        id: 'img_4.jpg',
        price: 27000,
        size: '240x90',
        color: 'red'
    },
    { 
        id_2: 'item_243',
        id: 'img_4.jpg',
        price: 19000,
        size: '240x90',
        color: 'red'
    }

]

let filtered_data_14_25 = [];
let filtered_data_25_40 = [];
let filtered_data_40_60 = [];
let filtered_data_60 = [];

let filtered_color_data_red = [];
let filtered_color_data_green = [];

let filtered_price_data = [];
let filtered_color_data = [];

let current_data;
let sliced_current_data = {

    show_quantity: 5
    

}


const select = document.querySelector('.sort')
const card = document.querySelector('.product-cards-block')


const display_data__func = (data, show_quantity = 5) => {
    console.log(show_quantity)

    card.innerHTML = "";

    const show_products = data.slice(0, show_quantity);

    console.log(1234)
    console.log(show_products)
    console.log(1234)

    show_products.forEach(item => {

        card.innerHTML += 
    
        `

        <div class="product-card product-card_single">
            
        <img src="../images/${item.id}" alt="" class="product-card_single__image">
            
        <div class="product-card_info-row">
        
            <p>Ціна</p>
            <p>${item.price} грн</p>
        
        </div>
        
        <div class="product-card_info-row">
        
            <p>Розмір</p>
            <p>${item.size}</p>
        
        </div>

        <div class="product-card_info-row">
        
            <p>Колір</p>
            <p>${item.color}</p>
        
        </div>
        
        <button class="button product-сard_button" data-item-id="${item.id_2}">Детальніше</button>
            
        </div>
        `
    
    })

    current_data = data;

    select.addEventListener('change', e => {
        if (e.target.value ==="1"){
    
            current_data.sort((a, b) => {   
                return a.price - b.price;
            })
    
            display_data__func(current_data);
    
        } else {
    
            current_data.sort((a, b) => {
                return b.price - a.price;
            })
    
            display_data__func(current_data);
        }
    })
}

data.sort((a, b) => {
    return a.price - b.price;
})

display_data__func(data);


const filter_buttons = document.querySelectorAll('.price-filter-content .filter-button')
const all_prices_button = document.querySelector('[data-low-price="0"]')

const color_filter_buttons = document.querySelectorAll('.color-filter-button')
const all_color_filter_button = document.querySelector('[data-first="all_button"]')


const price_filter__func = (filter_query, e) => {

    filtered_price_data = []

    if (filter_query === 'ВСІ' && e.classList.contains('active')){

        filtered_data_14_25 = []
        filtered_data_25_40 = []
        filtered_data_40_60 = []
        filtered_data_60 = []

        display_data__func(data)

    }    

    if (filter_query === 'ВІД 14 000 ДО 25 000' && 
        e.classList.contains('active') &&
        all_color_filter_button.classList.contains('active')){

        filtered_data_14_25 = data.filter(item => {

            return item.price >= 14000 && item.price <= 25000;

        })

    } else if (filter_query === 'ВІД 14 000 ДО 25 000' && 
                e.classList.contains('active') &&
                !all_color_filter_button.classList.contains('active')){

                filtered_data_14_25 = filtered_color_data.filter(item => {

            return item.price >= 14000 && item.price <= 25000;

        })

    } else if (filter_query === 'ВІД 14 000 ДО 25 000' && !e.classList.contains('active')){

        filtered_data_14_25 = [];

    }

    if (filter_query === 'ВІД 25 000 ДО 40 000' && e.classList.contains('active')){

        filtered_data_25_40 = data.filter(item => {

            return item.price >= 25000 && item.price <= 40000;

        })

    } else if (filter_query === 'ВІД 25 000 ДО 40 000' &&
                e.classList.contains('active') &&
                !all_color_filter_button.classList.contains('active')){

                filtered_data_25_40 = filtered_color_data.filter(item => {

                    return item.price >= 25000 && item.price <= 40000;
            
                })

    } else if (filter_query === 'ВІД 25 000 ДО 40 000' && !e.classList.contains('active')){

        filtered_data_25_40 = [];

    }

    if (filter_query === 'ВІД 40 000 ДО 60 000' && e.classList.contains('active')){

        filtered_data_40_60 = data.filter(item => {

            return item.price >= 40000 && item.price <= 60000;

        })

    } else if (filter_query === 'ВІД 40 000 ДО 60 000' &&
                e.classList.contains('active') &&
                !all_color_filter_button.classList.contains('active')){

                filtered_data_40_60 = filtered_color_data.filter(item => {

                    return item.price >= 40000 && item.price <= 60000;
            
                })

    } else if (filter_query === 'ВІД 40 000 ДО 60 000' && !e.classList.contains('active')){

        filtered_data_40_60 = [];

    } 

    if (filter_query === 'ВІД 60 000' && e.classList.contains('active')){

        filtered_data_60 = data.filter(item => {

            return item.price >= 60000;

        })

    } else if (filter_query === 'ВІД 60 000' &&
                e.classList.contains('active') &&
                !all_color_filter_button.classList.contains('active')){

                filtered_data_60 = filtered_color_data.filter(item => {

                    return item.price >= 60000;
            
                })

    } else if (filter_query === 'ВІД 60 000' && !e.classList.contains('active')){

        filtered_data_60 = [];

    }

    filtered_price_data = filtered_price_data.concat(
        filtered_data_14_25, 
        filtered_data_25_40,
        filtered_data_40_60,
        filtered_data_60
    )
    console.dir(filtered_price_data)

    if (select.value ==='1'){

        filtered_price_data.sort((a, b) => {   
            return a.price - b.price;
        })

    } else {

        filtered_price_data.sort((a, b) => {   
            return b.price - a.price;
        })

    }

    if (filter_query !== 'ВСІ') display_data__func(filtered_price_data)

    if (filter_query !== 'ВСІ' &&
        !filter_buttons[1].classList.contains('active') &&
        !filter_buttons[2].classList.contains('active') &&
        !filter_buttons[3].classList.contains('active') &&
        !filter_buttons[4].classList.contains('active')){

        display_data__func(filtered_color_data)

    }

    if (filter_query !== 'ВСІ' &&
        !color_filter_buttons[1].classList.contains('active') &&
        !color_filter_buttons[2].classList.contains('active') &&
        !filter_buttons[1].classList.contains('active') &&
        !filter_buttons[2].classList.contains('active') &&
        !filter_buttons[3].classList.contains('active') &&
        !filter_buttons[4].classList.contains('active')){

        display_data__func(data)

    }

    if (!filter_buttons[1].classList.contains('active') &&
        !filter_buttons[2].classList.contains('active') &&
        !filter_buttons[3].classList.contains('active') &&
        !filter_buttons[4].classList.contains('active')
    ){
        all_prices_button.classList.add('active')

        if (select.value ==='1'){

            data.sort((a, b) => {   
                return a.price - b.price;
            })
    
        } else {
    
            data.sort((a, b) => {   
                return b.price - a.price;
            })
    
        }

      //  display_data__func(data)

    }

}


filter_buttons.forEach(item => {

    item.addEventListener('click', e => {

        if (e.target !== all_prices_button){

            all_prices_button.classList.remove('active')

            e.target.classList.toggle('active')

        } else {

            filter_buttons.forEach(item => {
                item.classList.remove('active')
            }) 

            e.target.classList.add('active')
        }

        let filter_query = e.target.innerText;

        price_filter__func(filter_query, e.target)
        
    })
})



color_filter_buttons.forEach(item => {

    item.addEventListener('click', e => {

        if (e.target !== all_color_filter_button){

            all_color_filter_button.classList.remove('active')

            e.target.classList.toggle('active')

        } else {

            color_filter_buttons.forEach(item => {
                item.classList.remove('active')
            }) 

            e.target.classList.add('active')
        }

        let filter_query = e.target.innerText;

        color_filter__func(filter_query, e.target)
        
    })
})

const color_filter__func = (filter_query, e) => {


    filtered_color_data = []

    if (filter_query === 'ВСІ' && 
        e.classList.contains('active') &&
        all_prices_button.classList.contains('active')
        ){

        filtered_color_data_red = [];
        filtered_color_data_green = [];

        display_data__func(data)

    } 

    if (filter_query === 'ЧЕРВОНІ' && 
        e.classList.contains('active') &&
        !all_prices_button.classList.contains('active')
    
    ){

        filtered_color_data_red = filtered_price_data.filter(item => {

            return item.color === 'red';

        })

    } else if (filter_query === 'ЧЕРВОНІ' &&
        e.classList.contains('active') &&
        all_prices_button.classList.contains('active')){

        filtered_color_data_red = data.filter(item => {

            return item.color === 'red';

        })
    
    } else if (filter_query === 'ЧЕРВОНІ' && !e.classList.contains('active')){

        filtered_color_data_red = [];

    }

    if (filter_query === 'ЗЕЛЕНІ' && 
        e.classList.contains('active') &&
        !all_prices_button.classList.contains('active')
    
    ){

        filtered_color_data_green = filtered_price_data.filter(item => {

            return item.color === 'green';

        })

    } else if (filter_query === 'ЗЕЛЕНІ' &&
        e.classList.contains('active') &&
        all_prices_button.classList.contains('active')){

        filtered_color_data_green = data.filter(item => {

            return item.color === 'green';

        })
    
    } else if (filter_query === 'ЗЕЛЕНІ' && !e.classList.contains('active')){

        filtered_color_data_green = [];

    }

    filtered_color_data = filtered_color_data.concat(
        filtered_color_data_red, 
        filtered_color_data_green,
    )
    console.dir(filtered_color_data)

    if (select.value ==='1'){

        filtered_color_data.sort((a, b) => {   
            return a.price - b.price;
        })

    } else {

        filtered_color_data.sort((a, b) => {   
            return b.price - a.price;
        })

    }

    if (filter_query !== 'ВСІ'){
        
        display_data__func(filtered_color_data)
        console.log('hello')
    
    } 
    
    if (filter_query !== 'ВСІ' &&
        !color_filter_buttons[1].classList.contains('active') &&
        !color_filter_buttons[2].classList.contains('active')){

        display_data__func(filtered_price_data)

    }

    if (filter_query !== 'ВСІ' &&
        !color_filter_buttons[1].classList.contains('active') &&
        !color_filter_buttons[2].classList.contains('active') &&
        !filter_buttons[1].classList.contains('active') &&
        !filter_buttons[2].classList.contains('active') &&
        !filter_buttons[3].classList.contains('active') &&
        !filter_buttons[4].classList.contains('active')){

        display_data__func(data)

    }

    if (!color_filter_buttons[1].classList.contains('active') &&
        !color_filter_buttons[2].classList.contains('active') 
    ){
        all_color_filter_button.classList.add('active')

        if (select.value === '1'){

            data.sort((a, b) => {   
                return a.price - b.price;
            })
    
        } else {
    
            data.sort((a, b) => {   
                return b.price - a.price;
            })
    
        }

       // display_data__func(data)

    }

}

const product_card = document.querySelector('.product-card')
const product_сard_buttons = document.querySelectorAll('.product-сard_button')
const product_modal = document.querySelector('.product_modal')



/*
product_сard_buttons.forEach(each => {

        each.addEventListener('click', e => {
    
            //backdrop.classList.add('backdrop-active')
            let item_id = e.target.dataset.itemId
            //product_modal.classList.add('product_modal__active')

            let loc = window.location.href
            window.location.href = `${loc}${item_id}`
            //console.log(window.location.href)
        
        })
        
})
*/

const show_more_button = document.querySelector('.show-more-button')

show_more_button.addEventListener('click', e => {

    console.log(current_data)

    sliced_current_data.show_quantity += 3;

    console.log(sliced_current_data)

    display_data__func(current_data, sliced_current_data.show_quantity)

})





