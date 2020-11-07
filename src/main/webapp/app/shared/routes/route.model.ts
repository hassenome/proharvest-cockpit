export interface Route {
  path: string;
  status: InstanceStatus;
  serviceId: string;
  serviceInstances: any[]
}

export type InstanceStatus = 'UP' | 'DOWN' | 'STARTING' | 'OUT_OF_SERVICE' | 'UNKNOWN';
