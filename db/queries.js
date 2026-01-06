const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function sendNewMessage(message) {
  await pool.query(
    "INSERT INTO messages (text,sender,added) VALUES ($1,$2,$3)",
    [message.messageText, message.authorName, new Date()]
  );
}

async function displayAMessage(messageid) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageid,
  ]);
  return rows;
}

module.exports = {
  getAllMessages,
  sendNewMessage,
  displayAMessage,
};
