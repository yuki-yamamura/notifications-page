import { useEffect, useState } from 'react';
import { Notification } from 'types/Notification';

const useNotifications = (): [
  Notification[] | undefined,
  (notifications: Notification[]) => Promise<Notification[]>,
] => {
  const [notifications, setNotifications] = useState<Notification[]>();
  const updateNotifications = async (
    updatedNotifications: Notification[],
  ): Promise<Notification[]> => {
    const res = await fetch('/notifications', {
      method: 'PUT',
      body: JSON.stringify(updatedNotifications),
    });

    if (res.status === 200) {
      const result = (await res.json()) as Notification[];
      setNotifications(result);

      return result;
    }

    throw new Error('something went wrong.');
  };

  useEffect(() => {
    void fetch('/notifications').then((res) =>
      res.json().then((result) => setNotifications(result as Notification[])),
    );
  }, []);

  return [notifications, updateNotifications];
};

export default useNotifications;
