import { ValidatorFn } from '@angular/forms';
export type IValidationsSpec = {
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
    hasReqInd?: boolean;
    helpInfo?: {
        title: string;
        content: string;
    };
    autocompleteKey?: string;
    spellcheck?: string;
}
export declare function makeValidations(data: IValidationsSpec): ValidatorFn;
//# sourceMappingURL=form-helper.d.ts.map