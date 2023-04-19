import firebaseInit from "utils/firebase";
import { NextApiRequest, NextApiResponse } from "next";

const Init = (request: NextApiRequest, response: NextApiResponse) => {
    setToken();
};

async function setToken() {
  try {
    const token = await firebaseInit();
    console.log("token is available", token);
    if (token) {
      console.log("token", token);
    }
  } catch (error) {
    console.log(error);
  }
}


export default Init;
