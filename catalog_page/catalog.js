const data = [
    { 
        id: 3455,
        price: 34000,
        size: '220x90',
        color: 'green'
    },

    { 
        id: 3468,
        price: 78000,
        size: '250x90'
    },
    { 
        id: 3578,
        price: 56000,
        size: '240x90',
        color: 'red'
    },
    { 
        id: 3577,
        price: 48000,
        size: '240x90',
        color: 'green'
    },
    { 
        id: 3633,
        price: 15000,
        size: '240x90'
    },
    { 
        id: 3678,
        price: 23000,
        size: '240x90',
        color: 'green'
    },
    { 
        id: 3698,
        price: 84000,
        size: '240x90',
        color: 'red'
    },
    { 
        id: 3767,
        price: 41000,
        size: '240x90'
    },
    { 
        id: 3845,
        price: 27000,
        size: '240x90',
        color: 'red'
    },
    { 
        id: 3814,
        price: 19000,
        size: '240x90',
        color: 'red'
    }

]

let filtered_data_14_25;
let filtered_data_25_40;
let filtered_data_40_60;
let filtered_data_60;

let current_data;


const select = document.querySelector('.sort')
const card = document.querySelector('.product-cards-block')
const filter_buttons = document.querySelectorAll('.filter-button')

const display_data__func = (data) => {

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

    current_data = data;
}

data.sort((a, b) => {
    return a.price - b.price;
})

display_data__func(data);



const price_filter__func = (filter_query) => {

    console.log(filter_query)

    if (filter_query === 'ВСІ') {

        display_data__func(data);

        select.addEventListener('change', e => {
            if (e.target.value === "1") {

                data.sort((a, b) => {
                    return a.price - b.price;
                })

                display_data__func(data);

            } else {

                data.sort((a, b) => {
                    return b.price - a.price;
                })

                display_data__func(data);
            }
        })


    } else if (filter_query === 'ВІД 14 000 ДО 25 000') {

        filtered_data_14_25 = data.filter(item => {

            return item.price >= 14000 && item.price <= 25000;

        })

        select.addEventListener('change', e => {
            if (e.target.value === "1") {

                filtered_data_14_25.sort((a, b) => {
                    return a.price - b.price;
                })

                display_data__func(filtered_data_14_25);

            } else {

                filtered_data_14_25.sort((a, b) => {
                    return b.price - a.price;
                })

                display_data__func(filtered_data_14_25);
            }
        })

        display_data__func(filtered_data_14_25);

        console.dir(card)


    } else if (filter_query === 'ВІД 25 000 ДО 40 000') {

        filtered_data_25_40 = data.filter(item => {

            return item.price >= 25000 && item.price <= 40000;

        })

        select.addEventListener('change', e => {
            if (e.target.value === "1") {

                filtered_data_25_40.sort((a, b) => {
                    return a.price - b.price;
                })

                display_data__func(filtered_data_25_40);

            } else {

                filtered_data_25_40.sort((a, b) => {
                    return b.price - a.price;
                })

                display_data__func(filtered_data_25_40);
            }
        })

        display_data__func(filtered_data_25_40);


    } else if (filter_query === 'ВІД 40 000 ДО 60 000') {

        filtered_data_40_60 = data.filter(item => {

            return item.price >= 40000 && item.price <= 60000;

        })

        select.addEventListener('change', e => {
            if (e.target.value === "1") {

                filtered_data_40_60.sort((a, b) => {
                    return a.price - b.price;
                })

                display_data__func(filtered_data_40_60);

            } else {

                filtered_data_40_60.sort((a, b) => {
                    return b.price - a.price;
                })

                display_data__func(filtered_data_40_60);
            }
        })

        display_data__func(filtered_data_40_60);

        
    } else if (filter_query === 'ВІД 60 000') {

        filtered_data_60 = data.filter(item => {

            return item.price >= 60000;

        })

        select.addEventListener('change', e => {
            if (e.target.value === "1") {

                filtered_data_60.sort((a, b) => {
                    return a.price - b.price;
                })

                display_data__func(filtered_data_60);

            } else {

                filtered_data_60.sort((a, b) => {
                    return b.price - a.price;
                })

                display_data__func(filtered_data_60);
            }
        })

        display_data__func(filtered_data_60);

        
    }

    
}

select.addEventListener('change', e => {
    if (e.target.value ==="1"){

        data.sort((a, b) => {   
            return a.price - b.price;
        })

        display_data__func(data);

    } else {

        data.sort((a, b) => {
            return b.price - a.price;
        })

        display_data__func(data);
    }
})

filter_buttons.forEach(item => {

    item.addEventListener('click', e => {

        let filter_query = e.target.innerText;

        price_filter__func(filter_query)

    })
})

