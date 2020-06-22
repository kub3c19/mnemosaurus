import {Component, Vue} from "vue-property-decorator";

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
        }).then(async (response) =>
        {
            const {errors}: {errors: {[s: string]: string[]}} = await response.json();

            Object.entries(errors).forEach(([formFieldName, formFieldErrors]) =>
            {
                this.fields[formFieldName].error = formFieldErrors.join(`, `);
            });
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
}
