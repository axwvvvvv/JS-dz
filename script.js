const catalog = [
    {
        name: 'Илон Маск книга в электронном виде',
        img: 'https://frankfurt.apollo.olxcdn.com/v1/files/43825npkrc391-UZ/image;s=871x1099',
        price: 500,
        oldPrice: 1000, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'Гарри поттер',
        img: 'https://biblio.by/media/catalog/product/cache/1/image/1200x1200/85e4522595efc69f496374d01ef2bf13/9/7/9785389106680-2016--.jpg',
        price: 750,
        oldPrice: 1500, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'Бизнес',
        img: 'https://img3.labirint.ru/rc/52ad2ce437a05cca7fc9da4d0b1b8c0e/363x561q80/books40/390167/cover.jpg?1563713264',
        price: 900,
        oldPrice: 1900, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'НВП',
        img: 'https://sheba.spb.ru/shkola/img/xnvp-1985.jpg.pagespeed.ic.GDj65_e6ZH.jpg',
        price: 1200,
        oldPrice: 3500, 
        currency: '$',
        description: 'Какое-то описание',
    },
]


const cards = document.querySelector('.cards')



catalog.forEach(card => {
    cards.innerHTML += `
    <div class="card">
    <img src=${card.img} alt="">
    <h3>${card.name}</h3>
    <p>${card.description}</p>
    <s>${card.oldPrice} ${card.currency}</s>
    <h4>${card.price} ${card.currency}</h4>
    
</div>
    `
});