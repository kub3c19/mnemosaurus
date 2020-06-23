import {Component, Vue}          from "vue-property-decorator";
import {Merge}                   from "ts-essentials";
// eslint-disable-next-line no-unused-vars
import {FormField, ResponseJSON} from "../types";

@Component
export default class FormMixin extends Vue
{
    public $refs!: {
        /** @description Register form HTML Element. */
        form: HTMLFormElement
    };

    /**
     * @description Listener of the submit event.
     * @param $event An object containing the event-related data.
     * */
    public async submitOn($event: Event): Promise<void>
    {
        const formData: FormData = new FormData(this.$refs.form);

        $event.preventDefault();

        return fetch(this.$refs.form.action, {
            body: formData,
            credentials: `same-origin`,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            method: `POST`
        }).then(async (response: Merge<Response, { json(): Promise<ResponseJSON> }>) =>
        {
            if (response.status >= 400)
            {
                const {errors, message} = await response.json();

                Object.entries(errors).forEach(([formFieldName, formFieldErrors]) =>
                {
                    this.fields[formFieldName].error = formFieldErrors.join(`, `);
                });

                this.$root.$emit(`alert-show`, {
                    message,
                    type: `failed`
                });

                return;
            }

            Object.entries(this.fields).forEach(([formFieldName]) =>
            {
                this.fields[formFieldName].error = ``;
            });

            this.$root.$emit(`alert-show`, {
                message: `The form was sent successfully`,
                type: `successful`
            });

            if (this.redirectTo)
            {
                window.location.href = this.redirectTo;
            }
        }).catch(console.error);
    }

    /** @description Form fields. */
    public fields!: {
        [s: string]: FormField
    };

    /** @description Form fields sorted by their order value. */
    public get fieldsSorted(): [string, FormField][]
    {
        return Object.entries(this.fields).sort(([, fieldA], [, fieldB]) =>
        {
            return fieldA.order - fieldB.order;
        });
    }

    /** @description The URL the site should redirect to in case of a successful submit. */
    public redirectTo?: string;
}
