import { NgModule } from '@angular/core';
import { CockpitSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { RouteSelectorComponent } from './routes/route-selector.component';
import { RefreshSelectorComponent } from './refresh/refresh-selector.component';
import { GroupByPipe } from './pipe/group-by.pipe';

@NgModule({
  imports: [CockpitSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective, RouteSelectorComponent, RefreshSelectorComponent, GroupByPipe],
  exports: [CockpitSharedLibsModule, FindLanguageFromKeyPipe, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective, RouteSelectorComponent, RefreshSelectorComponent, GroupByPipe],
})
export class CockpitSharedModule {}
