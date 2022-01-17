import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ExpandableCardComponent implements OnInit {
    isCollapsed: boolean;
    titleClass: string;
    faChevronUp: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faChevronDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faChevronRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    elementId: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ExpandableCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ExpandableCardComponent, "polp-bs-expandable-card", never, { "isCollapsed": "isCollapsed"; "titleClass": "titleClass"; }, {}, never, ["[title]", "[body]"]>;
}
