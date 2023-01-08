const data = [
    { 
        id: 'img_4.jpg',
        price: 34000,
        size: '220x90',
        color: 'green'
    },

    { 
        id: 'img_4.jpg',
        price: 78000,
        size: '250x90'
    },
    { 
        id: 'img_4.jpg',
        price: 56000,
        size: '240x90',
        color: 'red'
    },
    { 
        id: 'img_4.jpg',
        price: 48000,
        size: '240x90',
        color: 'green'
    },
    { 
        id: 'img_4.jpg',
        price: 15000,
        size: '240x90'
    },
    { 
        id: 'img_4.jpg',
        price: 23000,
        size: '240x90',
        color: 'green'
    },
    { 
        id: 'img_4.jpg',
        price: 84000,
        size: '240x90',
        color: 'red'
    },
    { 
        id: 'img_4.jpg',
        price: 41000,
        size: '240x90'
    },
    { 
        id: 'img_4.jpg',
        price: 27000,
        size: '240x90',
        color: 'red'
    },
    { 
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

let filtered_price_data = [];

let current_data;


const select = document.querySelector('.sort')
const card = document.querySelector('.product-cards-block')


const display_data__func = (data) => {

    card.innerHTML = "";

    data.forEach(item => {

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
    
        <button class="button product-сontainer_button">Детальніше</button>
        
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

const price_filter__func = (filter_query, e) => {

    console.log(filter_query)

    console.log(filtered_price_data)
    filtered_price_data = []
    console.log(filtered_price_data)

    if (filter_query === 'ВСІ' && e.classList.contains('active')){

        filtered_data_14_25 = []
        filtered_data_25_40 = []
        filtered_data_40_60 = []
        filtered_data_60 = []

        display_data__func(data)

    }    

    if (filter_query === 'ВІД 14 000 ДО 25 000' && e.classList.contains('active')){

        filtered_data_14_25 = data.filter(item => {

            return item.price >= 14000 && item.price <= 25000;

        })

    } else if (filter_query === 'ВІД 14 000 ДО 25 000' && !e.classList.contains('active')){

        filtered_data_14_25 = [];

    }

    if (filter_query === 'ВІД 25 000 ДО 40 000' && e.classList.contains('active')){

        filtered_data_25_40 = data.filter(item => {

            return item.price >= 25000 && item.price <= 40000;

        })

    } else if (filter_query === 'ВІД 25 000 ДО 40 000' && !e.classList.contains('active')){

        filtered_data_25_40 = [];

    }

    if (filter_query === 'ВІД 40 000 ДО 60 000' && e.classList.contains('active')){

        filtered_data_40_60 = data.filter(item => {

            return item.price >= 40000 && item.price <= 60000;

        })

    } else if (filter_query === 'ВІД 40 000 ДО 60 000' && !e.classList.contains('active')){

        filtered_data_40_60 = [];

    } 

    if (filter_query === 'ВІД 60 000' && e.classList.contains('active')){

        filtered_data_60 = data.filter(item => {

            return item.price >= 60000;

        })

    } else if (filter_query === 'ВІД 60 000' && !e.classList.contains('active')){

        filtered_data_60 = [];

    }

    console.log(filtered_data_14_25)
    console.log(filtered_data_25_40)
    console.log(filtered_data_40_60)
    console.log(filtered_data_60)

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

    //console.log(filter_buttons.every(each => classList.contains('active')))
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

        display_data__func(data)

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

