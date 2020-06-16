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
}

export {};
