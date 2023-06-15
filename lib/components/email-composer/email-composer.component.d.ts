import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
export declare class EmailComposerComponent extends EmailFormAbstractComponent implements AfterViewInit, OnInit {
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    initEmails: string[];
    isHtmlBody: boolean;
    onClose: EventEmitter<any>;
    constructor();
    get bsAlertType(): "success" | "warning" | "info" | "danger";
    ngOnInit(): void;
    ngAfterViewInit(): void;
    submit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailComposerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailComposerComponent, "polp-email-composer", never, { "initEmails": "initEmails"; "isHtmlBody": "isHtmlBody"; }, { "onClose": "onClose"; }, never, never>;
}
