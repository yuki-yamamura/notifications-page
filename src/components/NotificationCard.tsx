/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Notification } from 'types/Notification';

type Props = {
  notification: Notification;
};

const NotificationCard: FC<Props> = ({ notification }) => {
  const { action, user } = notification;

  const getContent = () => {
    switch (action.type) {
      case 'YOUR_POST_REACTED':
        return (
          <>
            <div className={!notification.isRead ? 'unread' : ''}>
              <a
                href="#"
                className="font-bold text-veryDarkBlue hover:text-blue focus:text-blue focus:outline-none"
              >
                {user.name}{' '}
              </a>
              reacted to your recent post{' '}
              <a
                href="#"
                className="font-bold hover:text-blue focus:text-blue focus:outline-none"
              >
                {action.payload}{' '}
              </a>
            </div>
            <div className="text-grayishBlue">{notification.time}</div>
          </>
        );
      case 'YOU_FOLLOWED':
        return (
          <>
            <div className={!notification.isRead ? 'unread' : ''}>
              <a
                href="#"
                className="font-bold text-veryDarkBlue hover:text-blue focus:text-blue focus:outline-none"
              >
                {user.name}{' '}
              </a>
              followed you{' '}
            </div>
            <div className="text-grayishBlue">{notification.time}</div>
          </>
        );
      case 'MEMBER_JOINED_TO_YOUR_GROUP':
        return (
          <>
            <div className={!notification.isRead ? 'unread' : ''}>
              <a
                href="#"
                className="font-bold text-veryDarkBlue hover:text-blue focus:text-blue focus:outline-none"
              >
                {user.name}
              </a>{' '}
              has joined your group{' '}
              <a href="#" className="font-bold text-blue focus:outline-none">
                {action.payload}{' '}
              </a>
            </div>
            <div className="text-grayishBlue">{notification.time}</div>
          </>
        );
      case 'YOU_RECEIVED_PRIVATE_MESSAGE':
        return (
          <>
            <div className={!notification.isRead ? 'unread' : ''}>
              <a
                href="#"
                className="font-bold text-veryDarkBlue hover:text-blue focus:text-blue focus:outline-none"
              >
                {user.name}{' '}
              </a>
              sent you a private message{' '}
            </div>
            <div className="text-grayishBlue">{notification.time}</div>
            <a
              href="#"
              className="mt-3 block rounded-md border border-lightGrayishBlue2 p-4 ring-blue hover:bg-lightGrayishBlue1 focus:bg-lightGrayishBlue1 focus:ring-inset"
            >
              {action.payload}
            </a>
          </>
        );
      case 'YOUR_PICTURE_COMMENTED':
        return (
          <div className="flex w-full justify-between gap-x-4">
            <div className={!notification.isRead ? 'unread' : ''}>
              <a
                href="#"
                className="font-bold text-veryDarkBlue hover:text-blue focus:text-blue focus:outline-none"
              >
                {user.name}{' '}
              </a>
              commented on your picture{' '}
              <div className="text-grayishBlue">{notification.time}</div>
            </div>
            <a href="#" className="shrink-0">
              <img
                src={action.payload}
                alt="thumbnail"
                className="h-[39px] w-[39px] rounded-md focus:ring-1 sm:h-[45px] sm:w-[45px]"
              />
            </a>
          </div>
        );
      case 'MEMBER_LEFT_FROM_YOUR_GROUP':
        return (
          <>
            <div className={!notification.isRead ? 'unread' : ''}>
              <a
                href="#"
                className="font-bold text-veryDarkBlue hover:text-blue focus:text-blue focus:outline-none"
              >
                {user.name}
              </a>{' '}
              left the group{' '}
              <a href="#" className="font-bold text-blue focus:outline-none">
                {action.payload}{' '}
              </a>
            </div>
            <div className="text-grayishBlue">{notification.time}</div>
          </>
        );

      default: {
        const _: never = action.type;

        return null;
      }
    }
  };

  return (
    <div
      className={`flex w-full items-start gap-x-5 rounded-lg p-4 ${
        !notification.isRead ? 'bg-veryLightGrayishBlue' : ''
      }`}
    >
      <img
        src={user.avatar}
        alt="avatar"
        className="h-[39px] w-[39px] sm:h-[45px] sm:w-[45px]"
      />
      <div className="w-full">{getContent()}</div>
    </div>
  );
};

export default NotificationCard;
