require('./bootstrap');

import ExampleComponent from './components/ExampleComponent';

window.Vue = require('vue').default;

const app = new Vue({
    el: '#app',
    components: {
        ExampleComponent
    }
});
