import { OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { IInputFieldSpec } from '../../utils/form-helper';
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
}
