import Vue from 'vue';
require('./bootstrap');

import route from './router/route';

//for vue progress bar
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
    color: '#000000',
    failedColor: 'red',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
})

//for vue form validation
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//for success msg using toastr
import VueToastr from "vue-toastr";
Vue.use(VueToastr);
Vue.use(VueToastr, {
    position: 'toast-bottom-right',
    progressbar: true,
    clickClose: true,
});
Vue.config.productionTip = false;

//for sweet alert
import VueSweetAlert from 'vue-sweetalert';
Vue.use(VueSweetAlert);
import 'sweetalert2/src/sweetalert2.scss';



Vue.component('welcome-header', require('./components/Header').default);
Vue.component('pagination', require('./components/partial/Pagination').default);


//create dynamic function / mixin use to dynamic function create
import mixin from "./mixin";
Vue.mixin(mixin);


const app = new Vue({
    el: '#app',
    router: route,
});


