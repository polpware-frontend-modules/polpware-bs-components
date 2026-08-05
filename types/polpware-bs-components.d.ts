import * as i0 from '@angular/core';
import { OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import * as i13 from 'ngx-bootstrap/modal';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as _fortawesome_fontawesome_common_types from '@fortawesome/fontawesome-common-types';
import * as i11 from '@angular/forms';
import { ValidatorFn, UntypedFormGroup, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import * as i9 from '@angular/common';
import * as i10 from '@angular/router';
import * as i12 from 'ngx-bootstrap/alert';
import * as i14 from 'ngx-bootstrap/collapse';
import * as i15 from 'ngx-bootstrap/popover';
import * as i16 from '@fortawesome/angular-fontawesome';
import * as i17 from '@40three/ngx-autofocus-directive';
import * as i18 from 'ngx-chips';
import * as i19 from '@tinymce/tinymce-angular';
import * as i20 from '@angular/cdk/text-field';
import * as i21 from 'ngx-mask';

declare enum ActionKind {
    NO_ACTION = 0,
    URL_LINK = 1,
    ROUTER_LINK = 2,
    CUSTOM_ACTION = 3
}
interface IBreadcrumbItem {
    title: string;
    routerLink?: string;
    queryParams?: {
        [key: string]: any;
    };
    url?: string;
    action?: () => void;
    kind?: ActionKind;
}

declare class BreadcrumbComponent implements OnInit, OnChanges {
    items: IBreadcrumbItem[];
    listClasses: string;
    inactiveItemClasses: string;
    activeItemClasses: string;
    interItems: IBreadcrumbItem[];
    activeItem: IBreadcrumbItem;
    ngOnInit(): void;
    ngOnChanges(): void;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "polp-bs-breadcrumb", never, { "items": { "alias": "items"; "required": false; }; "listClasses": { "alias": "listClasses"; "required": false; }; "inactiveItemClasses": { "alias": "inactiveItemClasses"; "required": false; }; "activeItemClasses": { "alias": "activeItemClasses"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BreadcrumbClipboardService {
    readonly clipboard: BehaviorSubject<IBreadcrumbItem[]>;
    constructor();
    paste(items: IBreadcrumbItem[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbClipboardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadcrumbClipboardService>;
}

interface IAlertBoxInputs {
    hideNoBtn?: boolean;
    yesBtnLabel?: string;
    noBtnLabel?: string;
    noBtnClasses?: string;
    yesBtnClasses?: string;
    enableEnter?: boolean;
    title: string;
    innerBody: string;
}
declare class AlertBoxComponent implements OnInit {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertBoxComponent, "polp-bs-alert-box", never, { "hideNoBtn": { "alias": "hideNoBtn"; "required": false; }; "yesBtnLabel": { "alias": "yesBtnLabel"; "required": false; }; "noBtnLabel": { "alias": "noBtnLabel"; "required": false; }; "noBtnClasses": { "alias": "noBtnClasses"; "required": false; }; "yesBtnClasses": { "alias": "yesBtnClasses"; "required": false; }; "enableEnter": { "alias": "enableEnter"; "required": false; }; "title": { "alias": "title"; "required": false; }; "innerBody": { "alias": "innerBody"; "required": false; }; }, {}, never, never, false, never>;
}

type IValidationsSpec = {
    [key: string]: {
        value?: any;
        options?: any;
        message: string;
    };
};
interface IInputFieldSpec {
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
declare function makeValidations(data: IValidationsSpec): ValidatorFn;

declare const tinymceDefaultInitOptions: {
    htmlAllowedTags: string[];
    htmlAllowedAttrs: string[];
    extended_valid_elements: string;
    draggable_modal: boolean;
    browser_spellcheck: boolean;
    menubar: string;
    contextmenu: string;
    setup: (editor: any) => void;
};
declare const tinymceDefaultPlugins = "advlist autolink lists link image media table code fullscreen help nonbreaking  pagebreak  preview  searchreplace visualblocks visualchars anchor  autoresize charmap emoticons wordcount insertdatetime tiny_mce_wiris";
declare const tinymceDefaultToolbar = "preview | undo redo | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | outdent indent | strikethrough forecolor backcolor removeformat | charmap emoticons | code fullscreen | pagebreak anchor";
interface IInputFieldSpecExt extends IInputFieldSpec {
    fieldId: string;
    visible: boolean;
}
declare class PromptFormComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private readonly _builder;
    autocomplete: string;
    enableEnter: boolean;
    cancelBtnClasses: string;
    submitBtnClasses: string;
    fields: Array<IInputFieldSpec>;
    emitInitValue: boolean;
    extFields: IInputFieldSpecExt[];
    form: UntypedFormGroup;
    faEyeSlash: _fortawesome_fontawesome_common_types.IconDefinition;
    faEye: _fortawesome_fontawesome_common_types.IconDefinition;
    faQuestionCircle: _fortawesome_fontawesome_common_types.IconDefinition;
    editorOptions: {
        htmlAllowedTags: string[];
        htmlAllowedAttrs: string[];
        extended_valid_elements: string;
        draggable_modal: boolean;
        browser_spellcheck: boolean;
        menubar: string;
        contextmenu: string;
        setup: (editor: any) => void;
    };
    editorToolbar: string;
    editorPlugins: string;
    private _subr;
    readonly name: string;
    constructor(_builder: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    cancel(): void;
    submit(): void;
    keyEvent(event: KeyboardEvent): void;
    private buildForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<PromptFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PromptFormComponent, "polp-bs-prompt-form", never, { "hideCancelBtn": { "alias": "hideCancelBtn"; "required": false; }; "hideSubmitBtn": { "alias": "hideSubmitBtn"; "required": false; }; "submitBtnTxt": { "alias": "submitBtnTxt"; "required": false; }; "cancelBtnTxt": { "alias": "cancelBtnTxt"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "enableEnter": { "alias": "enableEnter"; "required": false; }; "cancelBtnClasses": { "alias": "cancelBtnClasses"; "required": false; }; "submitBtnClasses": { "alias": "submitBtnClasses"; "required": false; }; "fields": { "alias": "fields"; "required": false; }; "emitInitValue": { "alias": "emitInitValue"; "required": false; }; }, {}, never, never, false, never>;
}

interface IPromptFormInputs {
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
declare class PromptModalComponent implements OnInit {
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

declare class EmailComposerComponent extends EmailFormAbstractComponent implements AfterViewInit, OnInit {
    faSpinner: _fortawesome_fontawesome_common_types.IconDefinition;
    initEmails: string[];
    isHtmlBody: boolean;
    onClose: EventEmitter<any>;
    constructor();
    get bsAlertType(): "info" | "danger" | "success" | "warning";
    ngOnInit(): void;
    ngAfterViewInit(): void;
    submit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailComposerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailComposerComponent, "polp-email-composer", never, { "initEmails": { "alias": "initEmails"; "required": false; }; "isHtmlBody": { "alias": "isHtmlBody"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
}

declare class ExpandableCardComponent implements OnInit {
    isCollapsed: boolean;
    titleClass: string;
    faChevronUp: _fortawesome_fontawesome_common_types.IconDefinition;
    faChevronDown: _fortawesome_fontawesome_common_types.IconDefinition;
    faChevronRight: _fortawesome_fontawesome_common_types.IconDefinition;
    elementId: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpandableCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpandableCardComponent, "polp-bs-expandable-card", never, { "isCollapsed": { "alias": "isCollapsed"; "required": false; }; "titleClass": { "alias": "titleClass"; "required": false; }; }, {}, never, ["[title]", "[body]"], false, never>;
}

/**
 * Provides a base for most modal components.  This base is built with
 * the capability of synchronousely waiting for a modal to close.
 */
declare abstract class ObservableModalAbstractComponent<TInput, TOutput> {
    modalId: number;
    result: Subject<TOutput>;
    abstract bsModalRef: BsModalRef;
    protected abstract bsModalService: BsModalService;
    closeModal(value: TOutput): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObservableModalAbstractComponent<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ObservableModalAbstractComponent<any, any>, never, never, { "modalId": { "alias": "modalId"; "required": false; }; }, {}, never, never, true, never>;
}

declare class SearchBoxWidgetComponent implements OnInit, OnDestroy {
    faSearch: _fortawesome_fontawesome_common_types.IconDefinition;
    faTimes: _fortawesome_fontawesome_common_types.IconDefinition;
    initKeyword: string;
    formClass: string;
    inputClass: string;
    prependText: string;
    debounceTime: number;
    minLength: number;
    onSearch: EventEmitter<void>;
    searchControlElem: ElementRef;
    searchControl: UntypedFormControl;
    anyFutureKeyword: string;
    effectiveKeyword: string;
    _searchKeywordSubr: Subscription;
    private _emitEvent;
    constructor();
    set emitEvent(v: boolean);
    get emitEvent(): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    cancelTypedKeyword(): void;
    kickOffSearch(): void;
    resetKeyword(emitEvent?: boolean): void;
    startObserveSearchKeyword(): void;
    stopObserveSearchKeyword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBoxWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBoxWidgetComponent, "polp-bs-search-box-widget", never, { "initKeyword": { "alias": "initKeyword"; "required": false; }; "formClass": { "alias": "formClass"; "required": false; }; "inputClass": { "alias": "inputClass"; "required": false; }; "prependText": { "alias": "prependText"; "required": false; }; "debounceTime": { "alias": "debounceTime"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; }, { "onSearch": "onSearch"; }, never, never, false, never>;
}

declare class PageSizeOptionsWidgetComponent implements OnInit {
    initSize: number;
    options: number[];
    onChange: EventEmitter<number>;
    size: number;
    constructor();
    ngOnInit(): void;
    changeSize(s: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageSizeOptionsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageSizeOptionsWidgetComponent, "polp-bs-page-size-options-widget", never, { "initSize": { "alias": "initSize"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}

declare class PolpBsComponentsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpBsComponentsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpBsComponentsModule, [typeof BreadcrumbComponent, typeof AlertBoxComponent, typeof PromptFormComponent, typeof EmailComposerComponent, typeof PromptModalComponent, typeof ExpandableCardComponent, typeof SearchBoxWidgetComponent, typeof PageSizeOptionsWidgetComponent], [typeof i9.CommonModule, typeof i10.RouterModule, typeof i11.FormsModule, typeof i11.ReactiveFormsModule, typeof i12.AlertModule, typeof i13.ModalModule, typeof i14.CollapseModule, typeof i15.PopoverModule, typeof i16.FontAwesomeModule, typeof i17.FtAutofocusModule, typeof i18.TagInputModule, typeof i19.EditorModule, typeof i20.TextFieldModule, typeof i21.NgxMaskDirective, typeof i21.NgxMaskPipe], [typeof i21.NgxMaskDirective, typeof i21.NgxMaskPipe, typeof BreadcrumbComponent, typeof AlertBoxComponent, typeof PromptFormComponent, typeof EmailComposerComponent, typeof PromptModalComponent, typeof ExpandableCardComponent, typeof SearchBoxWidgetComponent, typeof PageSizeOptionsWidgetComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpBsComponentsModule>;
}

declare class BsModalAssistantService {
    private _modalId;
    constructor();
    get modalId(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<BsModalAssistantService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BsModalAssistantService>;
}

interface IChildModalState {
    opened: boolean;
}

interface IHasChildModal {
    showBackdrop: boolean;
}

declare class CommonModalsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showConfirmAsync(title: string, innerBody: string, modalClasses?: string): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonModalsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommonModalsService>;
}

export { ActionKind, AlertBoxComponent, BreadcrumbClipboardService, BreadcrumbComponent, BsModalAssistantService, CommonModalsService, EmailComposerComponent, ExpandableCardComponent, ObservableModalAbstractComponent, PageSizeOptionsWidgetComponent, PolpBsComponentsModule, PromptFormComponent, PromptModalComponent, SearchBoxWidgetComponent, makeValidations, tinymceDefaultInitOptions, tinymceDefaultPlugins, tinymceDefaultToolbar };
export type { IAlertBoxInputs, IBreadcrumbItem, IChildModalState, IHasChildModal, IInputFieldSpec, IPromptFormInputs, IValidationsSpec };
//# sourceMappingURL=polpware-bs-components.d.ts.map
