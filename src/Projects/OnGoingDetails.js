import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OnGoingDetails = () => {
  const [ongoingDetails, setOnGoingDetails] = useState("");
  const { id } = useParams();
  console.log(id);
  console.log("ongoingDetails", ongoingDetails);
  const OnGoingDetails = async () => {
    const data = await axios.get(
      `http://localhost:5000/api/v1/ongoingDetails/${id}`
    );
    setOnGoingDetails(data.data.data);
  };

  useEffect(() => {
    OnGoingDetails();
  }, []);
  return (
    <div>
      <img src={`http://localhost:5000/${ongoingDetails.Image}`} alt="" />
      <h1>{ongoingDetails.Video}</h1>
    </div>
  );
};

export default OnGoingDetails;
