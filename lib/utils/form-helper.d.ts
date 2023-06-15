import { ValidatorFn } from '@angular/forms';
export declare type IValidationsSpec = {
    [key: string]: {
        value?: any;
        options?: any;
        message: string;
    };
};
export interface IInputFieldSpec {
    name: string;
    label: string;
    value: any;
    category: string;
    validators: IValidationsSpec;
    maskSettings?: {
        mask: string;
    };
    options?: Array<{
        value: any;
        label: string;
    }>;
}
export declare function makeValidations(data: IValidationsSpec): ValidatorFn;
