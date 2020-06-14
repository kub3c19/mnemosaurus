import lodash from 'lodash';
import Axios from 'axios';

/** @description Global definitions. */
declare global
{
    interface Window
    {
        _: typeof lodash;
        axios: typeof Axios;
    }
}

export {};
