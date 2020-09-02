import { ValidatorFn } from '@angular/forms';
export declare type IValidationsSpec = {
    [key: string]: {
        value: any;
        message: string;
    };
};
export interface IInputFieldSpec {
    name: string;
    label: string;
    value: any;
    category: string;
    validations: IValidationsSpec;
}
export declare function makeValidations(data: IValidationsSpec): ValidatorFn;
