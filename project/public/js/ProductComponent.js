Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: 'https://placehold.it/200x150'
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="product-item card">
        <img class="product-image card-img-top" :src="img" alt="Some img">
            <div class="card-body">
                <h5 class="card-title">{{product.product_name}}</h5>
                <p class="card-text" >{{product.price}}</p>
                <button class="product-button btn btn-outline-success" @click="$emit('add-product', product)">Buy</button>
            </div>
    </div>`
})