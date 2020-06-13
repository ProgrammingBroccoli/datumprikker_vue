import { createLocalVue, shallowMount } from "@vue/test-utils";
import Form from './EventForm.vue'
import { mount } from '@vue/test-utils'
import EventForm from "./EventForm";
import {expect} from "@jest/globals";


describe('EventForm.vue', () => {
    test('Check increment from value', async () =>{
        const showData = [
            {show1: false},
            {show2: true},
            {show3: false},
            {show4: false},

        ];
        const localVue = createLocalVue();
        const wrapper = shallowMount(EventForm, {
            localVue,
            propsData:{
                showData
            }
        });

        //wrapper.vm.$emit('nextForm');
        //await wrapper.vm.$nextTick();
        //expect(wrapper.emitted('nextForm')).toBeTruthy();
        expect(wrapper.vm.show1).toBe(true);
        expect(wrapper.vm.show2).toBe(false);
        await wrapper.vm.nextForm();
        expect(wrapper.vm.show1).toBe(false);
        expect(wrapper.vm.show2).toBe(true);

        //expect(wrapper.vm.show1).toBe(false)

    });
});

describe('Eventform.vue', () => {
    test('does form1 disappears after click', async () => {
        const wrapper = mount(EventForm)
        expect(wrapper.find('#input-group-eventName').exists()).toBe(true)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#input-group-eventName').exists()).toBe(false)
    })
});
describe('Eventform.vue', () => {
    test('does form2 appears after click', async () => {
        const wrapper = mount(EventForm)
        expect(wrapper.find('#input-group-organizerName').exists()).toBe(false)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#input-group-organizerName').exists()).toBe(true)
    })
});
describe('Eventform.vue', () => {
    test('does form2 disappears after click', async () => {
        const wrapper = mount(EventForm)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#input-group-organizerName').exists()).toBe(true)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#input-group-organizerName').exists()).toBe(false)
    })
});

describe('Eventform.vue', () => {
    test('does form 3 appears after click', async () => {
        const wrapper = mount(EventForm)
        expect(wrapper.find('#example-datepicker').exists()).toBe(false)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#example-datepicker').exists()).toBe(true)
    })
});

describe('Eventform.vue', () => {
    test('does form 3 disappears after click', async () => {
        const wrapper = mount(EventForm)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#example-datepicker').exists()).toBe(true)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#example-datepicker').exists()).toBe(false)
    })
});
describe('Eventform.vue', () => {
    test('does form 4 appears after click', async () => {
        const wrapper = mount(EventForm)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#timepicker').exists()).toBe(false)
        wrapper.find('b-form').trigger('submit')
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#timepicker').exists()).toBe(true)
    })
});
