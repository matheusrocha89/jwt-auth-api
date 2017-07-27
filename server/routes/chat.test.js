const postChat = require('./chat');

jest.mock('../models/chat');

const reqMock = {
  user: {
    _id: 2
  },
  body: {
    to: 'receiver',
    message_body: 'This is just a message',
  },
};

const resMock = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
};


describe('Chat route', () => {
  let chatModel;

  beforeEach(() => {
    jest.useFakeTimers();
    chatModel = require('../models/chat');
  });

  it('chat message saving without error', () => {
    return postChat(reqMock, resMock).then(() => {
      expect(resMock.status).toBeCalledWith(201);
      expect(resMock.json).toBeCalledWith({ message: 'Message sent!' });
    });
  });
});
