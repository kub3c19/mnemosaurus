/** @description Global definitions. */
declare global
{
    /** @description A type containing a mnemonic expression. */
    type Expression = {
        /** @description Data related to the language of the expression */
        language: {
            /** @description ISO Code of the language. */
            code: string
        },
        /** @description The text of the expression. */
        text: string
    };

    /** @description Type of a form field. */
    type FormField = {
        /** @description Error message. */
        error: string,
        /** @description Label shown next to an input. */
        label: string,
        /** @description HTML name attribute of the field. */
        name: string,
        /** @description Order in which the field is shown in the form. */
        order: number,
        /** @description Type of the field, in case it's an input. */
        type: '' | 'text' | 'email' | 'password',
        /** @description Value of the field */
        value: string
    }

    /** @description Type for a mnemonic. */
    type MnemonicType = {
        /** @description An object containing expressions related to the mnemonic. */
        expression_expression: {
            /** @description The first expression. */
            expression1: Expression,
            /** @description The second expression. */
            expression2: Expression
        },
        /** @description The text describing the mnemonic. */
        text: string
    }
}

export {};
