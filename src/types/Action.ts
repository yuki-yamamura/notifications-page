export type ActionType =
  | 'YOUR_POST_REACTED'
  | 'YOU_FOLLOWED'
  | 'MEMBER_JOINED_TO_YOUR_GROUP'
  | 'YOU_RECEIVED_PRIVATE_MESSAGE'
  | 'YOUR_PICTURE_COMMENTED'
  | 'MEMBER_LEFT_FROM_YOUR_GROUP';

export type Action = {
  type: ActionType;
  payload?: string;
};
