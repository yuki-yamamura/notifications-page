import useNotifications from 'hooks/useNotifications';
import NotificationCard from 'components/NotificationCard';
import { FC } from 'react';

const App: FC = () => {
  const [notifications, updateNotifications] = useNotifications();
  const sortedNotifications = notifications?.sort((a, b) =>
    a.id > b.id ? -1 : 1,
  );
  const unreadNotifications = notifications?.filter(
    (notification) => !notification.isRead,
  );

  const markAllNotificationsRead = () => {
    // if all notifications has already been read, there's noting to do.
    if (unreadNotifications === undefined || unreadNotifications.length === 0)
      return;

    void updateNotifications(
      unreadNotifications.map((notification) => ({
        ...notification,
        isRead: true,
      })),
    );
  };

  return (
    <div className="bg-white px-4 sm:px-5 md:rounded-2xl">
      <header className="flex justify-between pb-6 pt-14">
        <div className="flex gap-x-2">
          <div className="text-xl font-bold text-veryDarkBlue">
            Notifications
          </div>
          <div className="flex items-center rounded-md bg-blue px-3 py-[0.5] text-base font-bold text-white">
            {unreadNotifications?.length ?? 0}
          </div>
        </div>
        <button
          type="button"
          onClick={markAllNotificationsRead}
          className="hover:text-blue focus:text-blue focus:outline-none"
        >
          Mark all as read
        </button>
      </header>
      <main className="flex flex-col gap-y-3">
        {sortedNotifications?.map((notification) => (
          <NotificationCard notification={notification} />
        ))}
      </main>
    </div>
  );
};

export default App;
