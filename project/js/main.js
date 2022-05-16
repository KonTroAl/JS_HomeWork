class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.sumGoodsPrice();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, image: 'notebook' },
            { id: 2, title: 'Mouse', price: 20, image: 'mouse' },
            { id: 3, title: 'Keyboard', price: 200, image: 'keyboard' },
            { id: 4, title: 'Gamepad', price: 50, image: 'gamepad' },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    sumGoodsPrice() {
        let result = 0
        for (let product of this.goods) {
            result += parseInt(product.price)
        }
        console.log(result);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.image = product.image;
    }

    render() {
        return `<div class="product-item card">
                <img class="product-image card-img-top" src="images/${this.image}.jpg" alt="${this.image}">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text" >${this.price}</p>
                    <button class="product-button btn btn-outline-success">Buy</button>
                </div>
            </div>`
    }
}

let list = new ProductList()

class Basket {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.sumBasketPrice();
        this.deleteGood();
        this.setCountOfGood();
    }

    _fetchProducts() {
        // По нажатию кнопки "купить" товар должен наполнять массив this.goods
    }

    render() {
        // Отображение корзины
    }

    sumBasketPrice() {
        // Сумма товаров в корзине
    }

    deleteGood() {
        // Удаление определенного товара из корзины
    }

    setCountOfGood() {
        // Изменение количества определенного товара в корзине
    }
}

class BasketItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.image = product.image;
    }

    render() {
        // Рендер карточки товара в корзине
    }
}