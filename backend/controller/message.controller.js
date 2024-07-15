import Message from "../model/message.model.js";

export const messagePush = async (req, res) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const time = `${formattedDate} ${formattedTime}`;
  try {
    const { title, body, publisher } = req.body;
    if (!title || !body || !publisher) {
      return res.status(400).json({ message: "All field are required" });
    }

    const pushMessage = new Message({
      title: title,
      body: body,
      publisher: publisher,
      time: time,
    });
    await pushMessage.save();
    res.status(201).json({ message: "Notification was published" });
  } catch (error) {
    console.error("Failed to publish:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
