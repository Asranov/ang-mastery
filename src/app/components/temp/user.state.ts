
import { IUser } from './temp.component';

export interface UserState {
  users: IUser[] | undefined;
}

export const initialState: UserState = {
  users: undefined,
};
