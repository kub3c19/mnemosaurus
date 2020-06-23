/** @description Type of a form field. */
export type FormField = {
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

/** @description JSON of the response object. */
export type ResponseJSON = {
    /** @description List of all errors related to the form. */
    errors: { [s: string]: string[] },
    /** @description Error message to the form as a whole. */
    message: string
}
