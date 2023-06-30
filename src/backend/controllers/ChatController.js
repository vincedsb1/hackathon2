import { Response } from "miragejs";

const ChatController = (db) => ({
  getAllMessages() {
    return db.ref('chatLog').once('value').then((snapshot) => {
      const chatLog = snapshot.val();
      return new Response(200, {}, { chatLog: chatLog ? Object.values(chatLog) : [] });
    });
  },

  addMessage(_, request) {
    const { message } = JSON.parse(request.requestBody);
    if (!message) {
      return new Response(400, {}, { error: 'Message missing in the request.' });
    }

    const newMessageRef = db.ref('chatLog').push();
    const newMessage = { id: newMessageRef.key, message };
    newMessageRef.set(newMessage);

    return new Response(201, {}, { message: newMessage });
  },
});


export default ChatController;
