import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { TagInputModule } from 'ngx-chips';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PromptFormComponent } from './components/prompt-form/prompt-form.component';
import { EmailComposerComponent } from './components/email-composer/email-composer.component';
import { PromptModalComponent } from './components/prompt-modal/prompt-modal.component';
import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
import { SearchBoxWidgetComponent } from './widgets/search-box-widget/search-box-widget.component';
import { PageSizeOptionsWidgetComponent } from './widgets/page-size-options-widget/page-size-options-widget.component';
import * as i0 from "@angular/core";
export class PolpBsComponentsModule {
}
PolpBsComponentsModule.ɵfac = function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); };
PolpBsComponentsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
PolpBsComponentsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        ModalModule,
        CollapseModule,
        PopoverModule,
        FontAwesomeModule,
        FtAutofocusModule,
        TagInputModule,
        NgxMaskModule,
        EditorModule,
        TextFieldModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AlertModule,
                    ModalModule,
                    CollapseModule,
                    PopoverModule,
                    FontAwesomeModule,
                    FtAutofocusModule,
                    TagInputModule,
                    NgxMaskModule,
                    EditorModule,
                    TextFieldModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        ModalModule,
        CollapseModule,
        PopoverModule,
        FontAwesomeModule,
        FtAutofocusModule,
        TagInputModule,
        NgxMaskModule,
        EditorModule,
        TextFieldModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvYnMtY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7O0FBd0N2SCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCO3dFQUF0QixzQkFBc0I7NEVBMUIzQixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO1FBQ2QsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTt1RkFhVixzQkFBc0I7Y0F0Q2xDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4Qiw4QkFBOEI7aUJBQ2pDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO29CQUNaLGVBQWU7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLDhCQUE4QjtpQkFDakM7YUFDSjs7d0ZBQ1ksc0JBQXNCLG1CQXBDM0IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDhCQUE4QixhQUc5QixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO1FBQ2QsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZSxhQUdmLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4Qiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IFRhZ0lucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWNoaXBzJztcblxuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hbGVydCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuXG5pbXBvcnQgeyBFZGl0b3JNb2R1bGUgfSBmcm9tICdAdGlueW1jZS90aW55bWNlLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBUZXh0RmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5cbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21wdC1mb3JtL3Byb21wdC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLWNvbXBvc2VyL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9tcHQtbW9kYWwvcHJvbXB0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leHBhbmRhYmxlLWNhcmQvZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvc2VhcmNoLWJveC13aWRnZXQvc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50LFxuICAgICAgICBQcm9tcHRGb3JtQ29tcG9uZW50LFxuICAgICAgICBFbWFpbENvbXBvc2VyQ29tcG9uZW50LFxuICAgICAgICBQcm9tcHRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaEJveFdpZGdldENvbXBvbmVudCxcbiAgICAgICAgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgQWxlcnRNb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuICAgICAgICBDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgUG9wb3Zlck1vZHVsZSxcbiAgICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgICAgIEZ0QXV0b2ZvY3VzTW9kdWxlLFxuICAgICAgICBUYWdJbnB1dE1vZHVsZSxcbiAgICAgICAgTmd4TWFza01vZHVsZSxcbiAgICAgICAgRWRpdG9yTW9kdWxlLFxuICAgICAgICBUZXh0RmllbGRNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICAgICAgQWxlcnRCb3hDb21wb25lbnQsXG4gICAgICAgIFByb21wdEZvcm1Db21wb25lbnQsXG4gICAgICAgIEVtYWlsQ29tcG9zZXJDb21wb25lbnQsXG4gICAgICAgIFByb21wdE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50LFxuICAgICAgICBQYWdlU2l6ZU9wdGlvbnNXaWRnZXRDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBCc0NvbXBvbmVudHNNb2R1bGUgeyB9XG4iXX0=