import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PILOT_ID, SERVER_API_URL } from 'app/app.constants';
import { Route } from 'app/shared/routes/route.model';

export type MetricsKey = 'jvm' | 'http.server.requests' | 'cache' | 'services' | 'databases' | 'garbageCollector' | 'processMetrics';
export type Metrics = { [key in MetricsKey]: any };
export type Thread = any;
export type ThreadDump = { threads: Thread[] };

@Injectable({ providedIn: 'root' })
export class MetricsService {
  constructor(private http: HttpClient) {}

  // get the Registry's metrics
  getMetrics(): Observable<Metrics> {
    return this.http.get<Metrics>(SERVER_API_URL + 'management/jhimetrics');
  }

  // get the instance's metrics
  getServiceMetrics(instance: Route | undefined): Observable<Metrics> {
    if (instance && instance.serviceId && instance.serviceId !== PILOT_ID.serviceId) {
      // removes the '/**' string from the path before calling the gateway with the correct service URL
      return this.http.get<Metrics>(SERVER_API_URL + instance.path.slice(0, -2) + 'management/jhimetrics');
    } else {
    return this.getMetrics();
    }
  }

  threadDump(): Observable<ThreadDump> {
    return this.http.get<ThreadDump>(SERVER_API_URL + 'management/threaddump');
  }

  serviceThreadDump(instance: Route | undefined): Observable<ThreadDump> {
    if (instance && instance.serviceId && instance.serviceId !== PILOT_ID.serviceId) {
      // removes the '/**' string from the path before calling the gateway with the correct service URL
      return this.http.get<ThreadDump>(SERVER_API_URL + instance.path.slice(0, -2) + 'management/threaddump');
    } else {
    return this.threadDump();
    }
  }
}
