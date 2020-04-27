import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import vuetify from 'vuetify';
import AppFooter from '../../src/components/AppFooter';

Vue.use(vuetify);

describe('AppFooter.vue', () => {
    it('displays', () => {
        expect(shallowMount(AppFooter).isVueInstance()).toBe(true);
    });
});
