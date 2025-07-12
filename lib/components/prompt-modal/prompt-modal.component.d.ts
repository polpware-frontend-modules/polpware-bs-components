import { OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
export interface IPromptFormInputs {
    autocomplete?: string;
    enableEnter?: boolean;
    hideCancelBtn?: boolean;
    hideCloseBtn?: boolean;
    hideConfirmBtn?: boolean;
    cancelBtnLabel?: string;
    confirmBtnLabel?: string;
    cancelBtnClasses?: string;
    confirmBtnClasses?: string;
    title: string;
    innerBody: string;
    fields: Array<IInputFieldSpec>;
}
export declare class PromptModalComponent implements OnInit {
    private readonly _bsModalRef;
    autocomplete: string;
    enableEnter: boolean;
    hideCancelBtn: boolean;
    hideConfirmBtn: boolean;
    hideCloseBtn: boolean;
    cancelBtnLabel: string;
    confirmBtnLabel: string;
    cancelBtnClasses: string;
    confirmBtnClasses: string;
    title: string;
    innerBody: string;
    fields: Array<IInputFieldSpec>;
    result: Subject<{
        [key: string]: any;
    }>;
    constructor(_bsModalRef: BsModalRef);
    ngOnInit(): void;
    close(): void;
    confirm(value: {
        [key: string]: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PromptModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PromptModalComponent, "polp-bs-prompt-modal", never, { "autocomplete": { "alias": "autocomplete"; "required": false; }; "enableEnter": { "alias": "enableEnter"; "required": false; }; "hideCancelBtn": { "alias": "hideCancelBtn"; "required": false; }; "hideConfirmBtn": { "alias": "hideConfirmBtn"; "required": false; }; "hideCloseBtn": { "alias": "hideCloseBtn"; "required": false; }; "cancelBtnLabel": { "alias": "cancelBtnLabel"; "required": false; }; "confirmBtnLabel": { "alias": "confirmBtnLabel"; "required": false; }; "cancelBtnClasses": { "alias": "cancelBtnClasses"; "required": false; }; "confirmBtnClasses": { "alias": "confirmBtnClasses"; "required": false; }; "title": { "alias": "title"; "required": false; }; "innerBody": { "alias": "innerBody"; "required": false; }; "fields": { "alias": "fields"; "required": false; }; }, { "result": "result"; }, never, never, false, never>;
}
//# sourceMappingURL=prompt-modal.component.d.ts.map