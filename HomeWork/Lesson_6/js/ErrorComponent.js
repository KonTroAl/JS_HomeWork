Vue.component('error', {
    template: `
    <div class="error" v-if="$root.error">
        <p>Faild connection to server</p>
    </div>
    `
});