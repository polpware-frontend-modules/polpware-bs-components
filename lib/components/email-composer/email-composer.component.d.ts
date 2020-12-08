import { AfterViewInit } from '@angular/core';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
export declare class EmailComposerComponent extends EmailFormAbstractComponent implements AfterViewInit {
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    constructor();
    ngAfterViewInit(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDef<EmailComposerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EmailComposerComponent, "polp-email-composer", never, {}, {}, never, never>;
}
