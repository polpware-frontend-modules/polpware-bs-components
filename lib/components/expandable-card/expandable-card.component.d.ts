import { OnInit } from '@angular/core';
export declare class ExpandableCardComponent implements OnInit {
    isCollapsed: boolean;
    titleClass: string;
    faChevronUp: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faChevronDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faChevronRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    elementId: string;
    constructor();
    ngOnInit(): void;
}
