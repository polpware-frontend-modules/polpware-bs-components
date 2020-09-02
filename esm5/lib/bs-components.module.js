import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PromptFormComponent } from './components/prompt-form/prompt-form.component';
import * as i0 from "@angular/core";
var PolpBsComponentsModule = /** @class */ (function () {
    function PolpBsComponentsModule() {
    }
    PolpBsComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
    PolpBsComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
                CommonModule,
                RouterModule,
                FormsModule,
                ReactiveFormsModule,
                FtAutofocusModule
            ]] });
    return PolpBsComponentsModule;
}());
export { PolpBsComponentsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FtAutofocusModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FtAutofocusModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent
                ],
                entryComponents: [
                    AlertBoxComponent,
                    PromptFormComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icy1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUVyRjtJQUFBO0tBd0J1Qzs4REFBMUIsc0JBQXNCOytIQUF0QixzQkFBc0Isa0JBbEJ0QjtnQkFDTCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBRW5CLGlCQUFpQjthQUNwQjtpQ0F4Qkw7Q0FtQ3VDLEFBeEJ2QyxJQXdCdUM7U0FBMUIsc0JBQXNCO3dGQUF0QixzQkFBc0IsbUJBdEIzQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQixhQUduQixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsaUJBQWlCLGFBR2pCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsbUJBQW1CO2tEQU9kLHNCQUFzQjtjQXhCbEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUVuQixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUN0QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsaUJBQWlCO29CQUNqQixtQkFBbUI7aUJBQ3RCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21wdC1mb3JtL3Byb21wdC1mb3JtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50LFxuICAgICAgICBQcm9tcHRGb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBGdEF1dG9mb2N1c01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50LFxuICAgICAgICBQcm9tcHRGb3JtQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwQnNDb21wb25lbnRzTW9kdWxlIHsgfVxuIl19