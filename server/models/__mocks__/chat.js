const Chat = jest.fn().mockImplementation(() => ({
  save: () => {
    const that = this;
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  },
}));


module.exports = Chat;
