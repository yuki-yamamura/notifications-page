import { rest } from 'msw';
import fakeNotifications from 'mocks/fakeData';
import { Notification } from 'types/Notification';

const handlers = [
  rest.get('/notifications', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(fakeNotifications)),
  ),

  rest.put('/notifications', async (req, res, ctx) => {
    const updatedNotifications = await req.json<Notification[]>();

    // in a real-world application make sure that some validations, registering are passed before returning a response.
    return res(
      ctx.status(200),
      ctx.json([
        ...fakeNotifications.filter(
          (fakeNotification) =>
            !updatedNotifications
              .map((notification) => notification.id)
              .includes(fakeNotification.id),
        ),
        ...updatedNotifications,
      ]),
    );
  }),
];

export default handlers;
