/** @description Global definitions. */
declare global
{
    /** @description Type for a mnemonic. */
    type MnemonicType = {
        /** @description The first expression. */
        expression1: string,
        /** @description The second expression. */
        expression2: string,
        /** @description The language of the first expression. */
        language1: string,
        /** @description The language of the second expression. */
        language2: string,
        /** @description The text describing the mnemonic. */
        text: string
    }

    /** @description Type of a form field. */
    type FormField = {
        /** @description Error message. */
        error: string,
        /** @description Label shown next to an input. */
        label: string,
        /** @description HTML name attribute of the field. */
        name: string,
        /** @description In case the field is a select, list of all options. */
        options?: { label: string, value: string }[],
        /** @description Order in which the field is shown in the form. */
        order: number,
        /** @description HTML tag of the field. */
        tag: 'select' | 'input' | 'textarea',
        /** @description Type of the field, in case it's an input. */
        type: '' | 'text' | 'email' | 'password',
        /** @description Value of the field */
        value: string
    }
}

export {};
