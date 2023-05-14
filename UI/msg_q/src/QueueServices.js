import axios from "axios";

const send = async (logType, message) => {
  const res = await axios.post("http://localhost:3000/sendLog", {
    logType,
    message,
  });
  return res;
};

const queueServices = {
  send,
};

export default queueServices;
