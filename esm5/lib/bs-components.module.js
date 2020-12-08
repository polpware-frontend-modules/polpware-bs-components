import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { AutosizeModule } from 'ngx-autosize';
import { TagInputModule } from 'ngx-chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PromptFormComponent } from './components/prompt-form/prompt-form.component';
import { EmailComposerComponent } from './components/email-composer/email-composer.component';
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
                FontAwesomeModule,
                FtAutofocusModule,
                AutosizeModule,
                TagInputModule
            ]] });
    return PolpBsComponentsModule;
}());
export { PolpBsComponentsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        FontAwesomeModule,
        FtAutofocusModule,
        AutosizeModule,
        TagInputModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AlertModule,
                    FontAwesomeModule,
                    FtAutofocusModule,
                    AutosizeModule,
                    TagInputModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent
                ],
                entryComponents: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icy1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O0FBRTlGO0lBQUE7S0ErQnVDOzhEQUExQixzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkF4QnRCO2dCQUNMLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFFbkIsV0FBVztnQkFFWCxpQkFBaUI7Z0JBRWpCLGlCQUFpQjtnQkFDakIsY0FBYztnQkFFZCxjQUFjO2FBQ2pCO2lDQXpDTDtDQW1EdUMsQUEvQnZDLElBK0J1QztTQUExQixzQkFBc0I7d0ZBQXRCLHNCQUFzQixtQkE3QjNCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHNCQUFzQixhQUd0QixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsV0FBVztRQUVYLGlCQUFpQjtRQUVqQixpQkFBaUI7UUFDakIsY0FBYztRQUVkLGNBQWMsYUFHZCxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixzQkFBc0I7a0RBS2pCLHNCQUFzQjtjQS9CbEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixzQkFBc0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLFdBQVc7b0JBRVgsaUJBQWlCO29CQUVqQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBRWQsY0FBYztpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtpQkFDekI7Z0JBQ0QsZUFBZSxFQUFFLEVBQ2hCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEF1dG9zaXplTW9kdWxlIH0gZnJvbSAnbmd4LWF1dG9zaXplJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FsZXJ0JztcblxuaW1wb3J0IHsgQWxlcnRCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb21wdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9zZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICAgICAgQWxlcnRCb3hDb21wb25lbnQsXG4gICAgICAgIFByb21wdEZvcm1Db21wb25lbnQsXG4gICAgICAgIEVtYWlsQ29tcG9zZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIEFsZXJ0TW9kdWxlLFxuXG4gICAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuXG4gICAgICAgIEZ0QXV0b2ZvY3VzTW9kdWxlLFxuICAgICAgICBBdXRvc2l6ZU1vZHVsZSxcblxuICAgICAgICBUYWdJbnB1dE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb21wb3NlckNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwQnNDb21wb25lbnRzTW9kdWxlIHsgfVxuIl19