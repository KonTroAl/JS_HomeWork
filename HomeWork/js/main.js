const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.allGoods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
                this.sumGoodsPrice();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allGoods.push(item)
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    sumGoodsPrice() {
        let result = 0
        for (let product of this.allGoods) {
            result += parseInt(product.price)
        }
        console.log(result);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    };
}


let list = new ProductList();
console.log(list.allGoods);

class Basket {
    constructor(container = '.basketProducts') {
        this.container = container;
        this.allGoods = [];
        this._getBuscketProducts()
            .then(data => {
                this.goods = data
                this.render();
                this.deleteGood();
                this.setCountOfGood();
            });

    }

    _getBuscketProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods.contents) {
            const item = new BasketItem(product);
            this.allGoods.push(item)
            block.insertAdjacentHTML("beforeend", item.render());
        }
        block.insertAdjacentHTML("beforeend", `<p>Итого: ${this.sumBasketPrice()}</p> `);
    }

    sumBasketPrice() {
        let result = 0
        for (let product of this.allGoods) {
            result += parseInt(product.price)
        }
        return result
    }

    deleteGood() {
        // Удаление определенного товара из корзины
    }

    setCountOfGood() {
        // Изменение количества определенного товара в корзине
    }
}

class BasketItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="basket-item modal-dialog">
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
    </div>`
    };
}

let basketList = new Basket();
console.log(basketList.allGoods);