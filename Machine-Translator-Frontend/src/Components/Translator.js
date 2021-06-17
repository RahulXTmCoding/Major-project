import React, { useState } from "react";
import { Row, Col, Button, Input, message } from "antd";
import axios from "axios";

const { TextArea } = Input;

const Translator = () => {
  const [lang1, setLang1] = useState("English");
  const [lang2, setLang2] = useState("Hindi");
  const [lang1Value, setLang1Value] = useState("");
  const [lang2Value, setLang2Value] = useState("");
  const [type, setType] = useState(1);

  const handelSwitch = () => {
    let val = lang1;
    let val2 = lang2;
    setLang1(val2);
    setLang2(val);
    type === 1 ? setType(2) : setType(1);
    setLang1Value("");
    setLang2Value("");
  };

  const handelTranslate = () => {
    if (!lang1Value) {
      message.info("Please enter some text first");
    }
    //Send Post Request
    let src = "en";
    let dest = "hi";
    if (type !== 1) {
      src = "hi";
      dest = "en";
    }

    axios
      .post("http://localhost:4000/data", {
        email: "srahulsingh1999@gmail.com",
        password: "Rahulsingh@8",
        text: lang1Value,
        src,
        dest,
      })
      .then((response) => {
        console.log(response);
        setLang2Value(response.data);
      });
  };
  return (
    <section id="translator">
      <div
        style={{
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
          marginTop: "40px",
          color: "red",
        }}
      >
        Translator
      </div>

      <Row className="input-row">
        <Col xs={22} md={9} className="input-col">
          <h3>{lang1}</h3>
          <div className="input-container">
            <TextArea
              value={lang1Value}
              placeholder="Type Here"
              className="textarea-tranlator"
              onChange={(e) => {
                setLang1Value(e.target.value);
              }}
            />
          </div>
        </Col>
        <Col offset={1} className="button-container">
          <Button className="switch" onClick={handelSwitch}>
            Switch
          </Button>

          <Button className="translate" onClick={handelTranslate}>
            Translate
          </Button>
        </Col>
        <Col offset={1} xs={22} md={9} className="input-col">
          <h3>{lang2}</h3>
          <div className="input-container">
            <TextArea
              value={lang2Value}
              placeholder="Result"
              className="textarea-tranlator"
              onChange={(e) => {
                setLang2Value(e.target.value);
              }}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Translator;
