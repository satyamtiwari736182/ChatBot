import { useEffect, useState } from "react";
import Message from "./Message";
import axios from "axios";

const Home = () => {
  const [msg, setMsg] = useState([]);
  const [message, setMesssage] = useState("");
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const res = await axios.post('http://localhost:3100', {
      'message': message.trim().toLowerCase(),
    });
    setMsg(state => [...state, {
      "types": "message incoming",
      "user": "Bot",
      "msg": res.data
    }])
    setLoading(false);
  }

  const handleSubmit = async (e) => {
    if (e.key === 'Enter' && message.trim().toLowerCase().length > 0) {
      setMsg(state => ([...state,
      {
        "types": "message outgoing",
        "user": "You",
        "msg": message
      }
      ]))
      setMesssage("")

      await getData();
    }
  }

  return (

    <section className="chat__section">
      <div className="brand">
        <img src="wassup.png" height="45" alt="logo" />
        <h1>ChatBot</h1>
      </div>
      <div className="message__area">
        {
          !loading ? msg?.map((msg, i) => <Message {...msg} key={i} />) : (
            <>
           { msg?.map((msg, i) => <Message {...msg} key={i} />)}
            <Message { ...{"types": "message incoming","user": "Bot", "msg": 'loading...'}} />
            </>
        )}

      </div>
      <div>
        <textarea
          id="textarea"
          cols="30"
          rows="1"
          placeholder="Write a message..."
          onKeyUp={handleSubmit}
          onChange={(e) => setMesssage(e.target.value)}
          value={message}
        />
      </div>
    </section>
  );
}

export default Home;
