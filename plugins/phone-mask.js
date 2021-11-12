import Vue from 'vue';
import PhoneMusk from 'vue-phone-mask-input';

if(!Vue.prototype.PhoneMusk) {
    Vue.use(PhoneMusk);
}