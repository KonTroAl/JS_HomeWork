const products = [
    { id: 1, title: 'Notebook', price: 2000, image: 'notebook' },
    { id: 2, title: 'Mouse', price: 20, image: 'mouse' },
    { id: 3, title: 'Keyboard', price: 200, image: 'keyboard' },
    { id: 4, title: 'Gamepad', price: 50, image: 'gamepad' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {

    return `<div class="product-item card">
                <img class="product-image card-img-top" src="images/${item.image}.jpg" alt="${item.image}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text" >${item.price}</p>
                    <button class="product-button btn btn-outline-success">Buy</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    let format_productsList = productsList.join('');
    console.log(format_productsList);
    document.querySelector('.products').innerHTML = format_productsList;
};

renderPage(products);