import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { VisNetworkDirective } from './components/network/vis-network.directive';
import { VisNetworkService } from './components/network/vis-network.service';
import { VisTimelineDirective } from './components/timeline/vis-timeline.directive';
import { VisTimelineService } from './components/timeline/vis-timeline.service';

export { VisNetworkDirective, VisTimelineDirective, VisTimelineService, VisNetworkService };

@NgModule({
  declarations: [VisNetworkDirective, VisTimelineDirective],
  exports: [VisNetworkDirective, VisTimelineDirective],
  imports: [CommonModule],
  providers: [VisNetworkService, VisTimelineService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class VisModule {}
