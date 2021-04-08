import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { AutosizeModule } from 'ngx-autosize';
import { TagInputModule } from 'ngx-chips';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PromptFormComponent } from './components/prompt-form/prompt-form.component';
import { EmailComposerComponent } from './components/email-composer/email-composer.component';
import { PromptModalComponent } from './components/prompt-modal/prompt-modal.component';
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
                AlertModule,
                ModalModule,
                FontAwesomeModule,
                FtAutofocusModule,
                AutosizeModule,
                TagInputModule,
                NgxMaskModule
            ]] });
    return PolpBsComponentsModule;
}());
export { PolpBsComponentsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        ModalModule,
        FontAwesomeModule,
        FtAutofocusModule,
        AutosizeModule,
        TagInputModule,
        NgxMaskModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AlertModule,
                    ModalModule,
                    FontAwesomeModule,
                    FtAutofocusModule,
                    AutosizeModule,
                    TagInputModule,
                    NgxMaskModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent
                ],
                entryComponents: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icy1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBRXhGO0lBQUE7S0FtQ3VDOzhEQUExQixzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkEzQnRCO2dCQUNMLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFFbkIsV0FBVztnQkFDWCxXQUFXO2dCQUVYLGlCQUFpQjtnQkFFakIsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUVkLGNBQWM7Z0JBQ2QsYUFBYTthQUNoQjtpQ0FoREw7Q0EyRHVDLEFBbkN2QyxJQW1DdUM7U0FBMUIsc0JBQXNCO3dGQUF0QixzQkFBc0IsbUJBakMzQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsb0JBQW9CLGFBR3BCLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUVuQixXQUFXO1FBQ1gsV0FBVztRQUVYLGlCQUFpQjtRQUVqQixpQkFBaUI7UUFDakIsY0FBYztRQUVkLGNBQWM7UUFDZCxhQUFhLGFBR2IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtrREFLZixzQkFBc0I7Y0FuQ2xDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixvQkFBb0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLFdBQVc7b0JBQ1gsV0FBVztvQkFFWCxpQkFBaUI7b0JBRWpCLGlCQUFpQjtvQkFDakIsY0FBYztvQkFFZCxjQUFjO29CQUNkLGFBQWE7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsZUFBZSxFQUFFLEVBQ2hCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEF1dG9zaXplTW9kdWxlIH0gZnJvbSAnbmd4LWF1dG9zaXplJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FsZXJ0JztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21wdC1mb3JtL3Byb21wdC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLWNvbXBvc2VyL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9tcHQtbW9kYWwvcHJvbXB0LW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50LFxuICAgICAgICBQcm9tcHRGb3JtQ29tcG9uZW50LFxuICAgICAgICBFbWFpbENvbXBvc2VyQ29tcG9uZW50LFxuICAgICAgICBQcm9tcHRNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgQWxlcnRNb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuXG4gICAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuXG4gICAgICAgIEZ0QXV0b2ZvY3VzTW9kdWxlLFxuICAgICAgICBBdXRvc2l6ZU1vZHVsZSxcblxuICAgICAgICBUYWdJbnB1dE1vZHVsZSxcbiAgICAgICAgTmd4TWFza01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb21wb3NlckNvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0TW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scEJzQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdfQ==