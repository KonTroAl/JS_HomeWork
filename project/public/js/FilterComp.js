Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="d-flex" role="search" @submit.prevent="$parent.$refs.products.filter(userSearch)>
                <input class="form-control me-2" type="text" placeholder="Search" v-model="userSearch">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>`
})