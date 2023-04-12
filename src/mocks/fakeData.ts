import { Notification } from 'types/Notification';

const fakeNotifications: Notification[] = [
  {
    id: 1,
    user: {
      name: 'Anna Kim',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-anna-kim.webp',
    },
    action: {
      type: 'MEMBER_LEFT_FROM_YOUR_GROUP',
      payload: 'Chess Club',
    },
    time: '2 weeks ago',
    isRead: true,
  },
  {
    id: 2,
    user: {
      name: 'Nathan Peterson',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-nathan-peterson.webp',
    },
    action: {
      type: 'YOUR_POST_REACTED',
      payload: '5 end-game strategies to increase your win rate',
    },
    time: '2 weeks ago',
    isRead: true,
  },
  {
    id: 3,
    user: {
      name: 'Kimberly Smith',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-kimberly-smith.webp',
    },
    action: {
      type: 'YOUR_PICTURE_COMMENTED',
      payload:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/image-chess.webp',
    },
    time: '1 week ago',
    isRead: true,
  },
  {
    id: 4,
    user: {
      name: 'Rizky Hasanuddin',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-rizky-hasanuddin.webp',
    },
    action: {
      type: 'YOU_RECEIVED_PRIVATE_MESSAGE',
      payload:
        'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    },
    time: '5 day ago',
    isRead: true,
  },
  {
    id: 5,
    user: {
      name: 'Jacob Thompson',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-jacob-thompson.webp',
    },
    action: {
      type: 'MEMBER_JOINED_TO_YOUR_GROUP',
      payload: 'Chess Club',
    },
    time: '1 day ago',
    isRead: false,
  },
  {
    id: 6,
    user: {
      name: 'Angela Gray',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-angela-gray.webp',
    },
    action: {
      type: 'YOU_FOLLOWED',
    },
    time: '5 min ago',
    isRead: false,
  },
  {
    id: 7,
    user: {
      name: 'Mark Webber',
      avatar:
        'https://raw.githubusercontent.com/yuki-yamamura/notifications-page/main/public/images/avatar-mark-webber.webp',
    },
    action: {
      type: 'YOUR_POST_REACTED',
      payload: 'My first tournament today!',
    },
    time: '1 min ago',
    isRead: false,
  },
];

export default fakeNotifications;
