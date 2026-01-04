const { Router } = require("express");
const indexRoute = Router();
const {
  getAllMessages,
  newMessage,
  sendMessage,
  displayMessage,
  noMessageFound,
} = require("../controllers/messageController");

indexRoute.get("/", getAllMessages);

indexRoute.get("/new", newMessage);

indexRoute.post("/new", sendMessage);

indexRoute.get("/:messageid/message", displayMessage);

indexRoute.get("/*splat", noMessageFound);

module.exports = indexRoute;
