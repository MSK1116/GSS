import Message from "../model/message.model.js";

export const messagePush = async (req, res) => {
  try {
    const { title, body, publisher, time } = req.body;
    if (!title || !body || !publisher || !time) {
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
    const message = await Message.find();
    message.sort((a, b) => new Date(b.time) - new Date(a.time));
    console.log(message);
    res.status(202).json(message);
  } catch (error) {
    console.error("Notification failed to load:", error.message);
    res.status(500).json(error);
  }
};
