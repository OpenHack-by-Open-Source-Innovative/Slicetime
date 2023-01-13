import { TimeSpent } from './time-spent';
export interface TimeLog {
  timeLogId: string;
  estStartingTime: number;
  estEndingTime: number;
  taskId: string;
  spentTimes: TimeSpent[];
}
