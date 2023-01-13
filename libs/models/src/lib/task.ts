import { Tag } from './tag';
import { Common } from './common';

export interface Task extends Common {
  name: string;
  deadline: number;
  estimatedTime: number;
  tags: Tag[],
  projectId: string;
  description: string;
}
