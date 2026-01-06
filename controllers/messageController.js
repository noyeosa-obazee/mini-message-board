const db = require("../db/queries");

const getAllMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const newMessage = (req, res) => {
  res.render("form");
};

const sendMessage = async (req, res) => {
  const message = req.body;
  await db.sendNewMessage(message);
  res.redirect("/");
};

const displayMessage = async (req, res) => {
  const msgId = Number(req.params.messageid);
  const foundMessage = await db.displayAMessage(msgId);

  if (!foundMessage.length) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message: foundMessage[0] });
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
