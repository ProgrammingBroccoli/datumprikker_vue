import { createLocalVue, shallowMount } from "@vue/test-utils";
import Form from './EventForm.vue'
import EventForm from "./EventForm";
import {expect} from "@jest/globals";

describe('Eventform.vue', () => {
    test('does form exists', () => {
        const wrapper = mount(EventForm)
        expect(wrapper.find('#input-group-eventName').exists()).toBeTruthy()

    })
});

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




