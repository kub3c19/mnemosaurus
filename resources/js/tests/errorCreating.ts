import {shallowMount} from "@vue/test-utils";
import RegisterForm   from "../components/RegisterForm.vue";
import fetchMock      from "jest-fetch-mock";
import Vue            from "vue";

/** @description Tests if error messages are created and assigned to the form fields. */
test('Errors are created', async () =>
{
    const wrapper = shallowMount(RegisterForm);

    fetchMock.mockResponse(JSON.stringify({
        errors: {
            email: [
                `The email field is required.`
            ],
            password: [
                `The password field is required.`
            ],
            username: [
                `The username field is required.`
            ]
        }
    }))

    const form = wrapper.find(`form`);

    await form.trigger(`submit`);
    await Vue.nextTick();

    // @ts-ignore
    expect(wrapper.vm.fields.email.error).toBe(`The email field is required.`);
    // @ts-ignore
    expect(wrapper.vm.fields.password.error).toBe(`The password field is required.`);
    // @ts-ignore
    expect(wrapper.vm.fields.username.error).toBe(`The username field is required.`);
})
