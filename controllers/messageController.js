const messages = [];

const getAllMessages = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const newMessage = (req, res) => {
  res.render("form");
};

const sendMessage = (req, res) => {
  messages.push({
    id: messages.length,
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });
  res.redirect("/");
};

const displayMessage = (req, res) => {
  const msgId = Number(req.params.messageid);
  const foundMessage = messages.find((message) => message.id === msgId);

  if (!foundMessage) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message: foundMessage });
};

const noMessageFound = (req, res) => {
  res.status(404).send("Invalid url");
};

module.exports = {
  getAllMessages,
  newMessage,
  sendMessage,
  displayMessage,
  noMessageFound,
};
