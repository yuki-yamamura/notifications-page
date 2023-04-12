import { User } from 'types/User';
import { Action } from 'types/Action';

export type Notification = {
  id: number;
  action: Action;
  user: User;
  time: string;
  isRead: boolean;
};
