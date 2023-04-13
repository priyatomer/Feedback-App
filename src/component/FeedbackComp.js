import React, { useState } from "react";
import Screenshot from "../screens/Screenshot";

const FeedbackComp = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm && <Screenshot />}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "#f1f5fd",
        }}
      >
        <button
          className="btn btn-primary"
          style={{ width: "10%", height: 40 }}
          onClick={() => setShowForm(!showForm)}
        >
          Feedback
        </button>
      </div>
    </>
  );
};

export default FeedbackComp;
