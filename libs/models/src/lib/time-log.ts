import { Common } from './common';
import { TimeSpent } from './time-spent';
export interface TimeLog extends Common {
  timeLogId: string;
  estStartingTime: number;
  estEndingTime: number;
  taskId: string;
  spentTimes: TimeSpent[];
}
