import { createHandler } from "@/lib/apiHandler";
import axios from "axios";

export default createHandler(async (r, res) => {
  try {
    axios.post(
      "https://wa-go.genesha.dev/api/sendText",
      {
        chatId: `${r.body.to || r.query.to || "628119951112"}@c.us`,
        text: r.body.msg || r.query.msg || "Hi there! from joni service",
        session: process.env.WA_SESSION,
      },
      {
        headers: {
          "X-Api-Key": process.env.WA_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );
  } catch (err) {
    return res.status(200).json(err);

    console.log(err);
  }

  return res.status(200).json("ok");
});
