const products = [
    { id: 1, title: 'Notebook', price: 2000, image: 'notebook' },
    { id: 2, title: 'Mouse', price: 20, image: 'notebook' },
    { id: 3, title: 'Keyboard', price: 200, image: 'notebook' },
    { id: 4, title: 'Gamepad', price: 50, image: 'notebook' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {

    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="images/${item.image}.jpg" alt="${item.image}">
                <p>${item.price}</p>
                <button class="btn btn-outline-success">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    let format_productsList = productsList.join('');
    console.log(format_productsList);
    document.querySelector('.products').innerHTML = format_productsList;
};

renderPage(products);