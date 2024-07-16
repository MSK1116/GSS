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

export const messagePull = async (req, res) => {
  try {
    const message = await Message.find().sort({ time: -1 });

    if (message > 0) {
      const formattedMessages = message.map((message) => ({
        _id: message._id,
        title: message.title,
        body: message.body,
        time: message.time,
        publisher: message.publisher,
      }));
      res.status(200).json({
        message: "Notification Loaded.",
        message: formattedMessages,
      });
      console.log(formattedMessages, "formatted message");
    } else {
      res.status(404).json({ message: "No messages found" });
    }
  } catch (error) {
    console.error("Notification failed to load:", error.message);
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
