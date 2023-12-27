import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    // Assuming the input type is file with multiple attribute
    const files = e.target.files;
    setImages(files);
  };

  console.log(images);

  const handleUpload = async () => {
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await axios.post(
        "https://chirosobujgroup-backend.onrender.com/api/v1/ongoingDetails/create-ongoingDetails/1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Images uploaded successfully");
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="full-row py-5" style={{ margin: "200px 0px" }}>
      <div className="container">
        <form
          onSubmit={handleUpload}
          method="post"
          enctype="multipart/form-data"
        >
          <input type="file" onChange={handleFileChange} multiple />
          <br />
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Upload"
          />
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
