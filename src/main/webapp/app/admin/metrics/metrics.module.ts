import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CockpitSharedModule } from 'app/shared/shared.module';

import { MetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [CockpitSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsMonitoringComponent]
})
export class MetricsModule {}
