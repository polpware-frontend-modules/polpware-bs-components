import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
export interface IAlertBoxInputs {
    hideNoBtn?: boolean;
    yesBtnLabel?: string;
    noBtnLabel?: string;
    noBtnClasses?: string;
    yesBtnClasses?: string;
    enableEnter?: boolean;
    title: string;
    innerBody: string;
}
export declare class AlertBoxComponent implements OnInit {
    private readonly _bsModalRef;
    hideNoBtn: boolean;
    yesBtnLabel: string;
    noBtnLabel: string;
    noBtnClasses: string;
    yesBtnClasses: string;
    enableEnter: boolean;
    title: string;
    innerBody: string;
    result: Subject<boolean>;
    constructor(_bsModalRef: BsModalRef);
    ngOnInit(): void;
    keyEvent(event: KeyboardEvent): void;
    close(): void;
    confirm(): void;
}
