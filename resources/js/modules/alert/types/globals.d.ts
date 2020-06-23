declare global
{
    /** @description Properties of an alert. */
    type AlertState = {
        /** @description Hex notation of the background color. */
        backgroundColor?: string,
        /** @description Hex notation of the font color. */
        color?: string,
        /** @description Determines whether the alert . */
        type: 'failed' | 'successful'
    };
}

export {};
