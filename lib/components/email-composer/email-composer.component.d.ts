import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
export declare class EmailComposerComponent extends EmailFormAbstractComponent implements AfterViewInit, OnInit {
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    initEmails: string[];
    onClose: EventEmitter<any>;
    constructor();
    get bsAlertType(): "success" | "info" | "danger" | "warning";
    ngOnInit(): void;
    ngAfterViewInit(): void;
    submit(): void;
    close(): void;
}
