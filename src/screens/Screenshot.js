import React, { useState } from "react";
import "../../src/App.css";
import html2canvas from "html2canvas";
import ButtonComp from "../component/ButtonComp";
import axios from "axios";
import MyModal from "./MyModal";
import InputComp from "../component/InputComp";
import EmojiComp from "../component/EmojiComp";

const Screenshot = () => {
  const [imaging, setImage] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [emojiFeedback, setEmojiFeedback] = useState("");

  const closeModal = () => setShowModal(false);

  const captureImage = () => {
    const element = document.getElementById("layout");
    html2canvas(element, { logging: false }).then((canvas) => {
      const url = canvas.toDataURL();
      setImage(url);
    });
  };

  const sendFeedback = (item) => {
    setEmojiFeedback(item);
  };
  //For api purpose-
  // const submitFeedback = () => {
  //   const formData = new FormData();
  //   formData.append("image", imaging);
  //   formData.append("feedback", feedback);
  //   formData.append("emojiFeedback", emojiFeedback);
  //   axios
  //     .post("http://localhost:3000/feedback", formData)
  //     .then((res) => {
  //       console.log(res.status, " hello feedback response");
  //       if (res.status == 201) {
  //         alert(res.data.message);
  //         setImage("");
  //         setFeedback("");
  //         setEmojiFeedback("");
  //       }
  //     })
  //     .catch((err) => console.log(err, "feedback error"));
  // };
  const createWorkItem = async (e) => {
    const token = "yo4vswt5sb7ttn35thjtlg65kbp3ibjrvcplsbz3ewat5h2qh5ya";
    const dataUrl = imaging;
    const attachmentData = await fetch(dataUrl).then((res) => res.blob());
    const formData = new FormData();
    formData.append("attachment", attachmentData, "screenshot.png");
    //for attachment
    const attachmentUrl = await fetch(
      `https://dev.azure.com/techbitsolution/feedback project/_apis/wit/attachments?fileName=screenshot.png&api-version=6.1-preview.3`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`:${token}`)}`,
          "Content-Type": "application/octet-stream",
        },
        body: attachmentData,
      }
    )
      .then((res) => res.json())
      .then((data) => data.url);
    //For workitem Creation
    const endpoint =
      "https://dev.azure.com/techbitsolution/feedback project/_apis/wit/workitems/$Task?api-version=6.1-preview.3";

    const data = [
      {
        op: "add",
        path: "/fields/System.Title",
        from: null,
        value: feedback,
      },
      {
        op: "add",
        path: "/fields/System.Description",
        from: null,
        value: emojiFeedback,
      },
      {
        op: "add",
        path: "/fields/System.AssignedTo",
        from: null,
        value: "Priya Tomar",
      },
      {
        op: "add",
        path: "/relations/-",
        value: {
          rel: "AttachedFile",
          url: attachmentUrl,
          attributes: {
            comment: "Screenshot of the problem",
          },
        },
      },
    ];
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json",
        Authorization: "Basic " + btoa(":" + token),
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(endpoint, options);

    if (response.status == 200) {
      alert("Work item created successfully!");
      setImage("");
      setFeedback("");
      setEmojiFeedback("");
    } else {
      console.error(
        `Error creating work item: ${response.status} ${response.statusText}`
      );
    }
  };

  return (
    <>
      <div className="cover">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InputComp
            type="text"
            placeholder="Enter Feedback"
            className="inputBox"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="button-div-main">
          <div className="button-div">
            <ButtonComp
              onClick={() => captureImage()}
              title="Attach"
              variant="primary"
            />
            {/* <ButtonComp
              onClick={() => submitFeedback()}
              title="Submit"
              variant="primary"
            /> */}
            <ButtonComp
              onClick={() => createWorkItem()}
              title="Submit Feedbaack"
              variant="primary"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <EmojiComp
            onClick={() => sendFeedback("Good")}
            style={{
              fontSize: emojiFeedback == "Good" ? 40 : 30,
              cursor: "pointer",
            }}
            emojicode={String.fromCodePoint("0x1F642")}
          />
          <EmojiComp
            onClick={() => sendFeedback("Yeah")}
            style={{
              fontSize: emojiFeedback == "Yeah" ? 40 : 30,
              cursor: "pointer",
            }}
            emojicode={String.fromCodePoint("0x1F60D")}
          />
          <EmojiComp
            onClick={() => sendFeedback("Bad")}
            style={{
              fontSize: emojiFeedback == "Bad" ? 40 : 30,
              cursor: "pointer",
            }}
            emojicode={String.fromCodePoint("0x2639")}
          />
          <EmojiComp
            onClick={() => sendFeedback("Okay")}
            style={{
              fontSize: emojiFeedback == "Okay" ? 40 : 30,
              cursor: "pointer",
            }}
            emojicode={String.fromCodePoint("0x1F610")}
          />
        </div>
        <div></div>
        {imaging && (
          <img
            style={{ width: "100%", height: "65%", marginTop: "10px" }}
            src={imaging}
            onClick={() => setShowModal(true)}
          />
        )}
        {showModal && (
          <MyModal
            closeModal={closeModal}
            imaging={imaging}
            setImage={setImage}
          />
        )}
      </div>
    </>
  );
};

export default Screenshot;
