const { Router } = require("express");
const indexRoute = Router();
const messages = [];

indexRoute.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRoute.get("/new", (req, res) => {
  res.render("form");
});

indexRoute.post("/new", (req, res) => {
  messages.push({
    id: messages.length,
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });
  res.redirect("/");
});

indexRoute.get("/:messageid/message", (req, res) => {
  const msgId = Number(req.params.messageid);
  const foundMessage = messages.find((message) => message.id === msgId);

  if (!foundMessage) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message: foundMessage });
});

indexRoute.get("/*splat", (req, res) => {
  res.status(404).send("Invalid url");
});

module.exports = indexRoute;
