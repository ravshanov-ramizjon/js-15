let market = [
    {
        title: "moloko",
        type: 'milk',
        price: 12000,
        expDate: "2024-06-21"
    },
    {
        title: "cheese",
        type: 'milk',
        price: 68000,
        expDate: "2023-06-21"
    },
    {
        title: "watermelon",
        type: 'fruit',
        price: 8000,
        expDate: "2024-06-29"
    },
    {
        title: "banana",
        type: 'fruit',
        price: 24000,
        expDate: "2023-07-08"
    },
    {
        title: "apple",
        type: 'fruit',
        price: 5000,
        expDate: "2024-07-08"
    },
    {
        title: "baltika 7",
        type: 'alcohol',
        price: 18000,
        expDate: "2023-07-08"
    },
    {
        title: "jaguar",
        type: 'alcohol',
        price: 12000,
        expDate: "2025-07-08"
    },
]

const from = +prompt('от этой суммы')
const up = +prompt('до этой суммы')

let findedProdukts = ''

market.forEach(produkts => {
    if(produkts.price > from && produkts.price < up) {
        findedProdukts += ` \n ${produkts.title} + ' - $' + ${produkts.price} `
    }
})

if(findedProdukts.length > 0 ) {
    const selected = prompt(`По вашему запросу найдено:
        ${findedProdukts}
        
        Если вам понравилас наши продурты из этого списка то напишите название этого продукта ниже`
    ).trim()

    if(findedProdukts.includes(selected.toLowerCase())) {
        const finded = market.find(produkts => produkts.title.toLowerCase() === selected.toLowerCase())
        const goingTuBuy = confirm(`
            О продукте
            title: ${finded.title}
            price: ${finded.price}
            expDate: ${finded.expDate}
            
            Вы хотите купить эти продукты ?
            `)
            if(goingTuBuy === true) {
                const purchase = +prompt(`Ведите сумму продуктов: ${finded.price}`)

                if(purchase >= finded.price) {
                    alert(`Спосибо за покупку ва приобрели продукты ${finded.title} ваш остаток: ${purchase - finded.price}`)
                }else{
                    alert(`Не достаточно средств: ${finded.price}`)
                }
            }
    }
}
