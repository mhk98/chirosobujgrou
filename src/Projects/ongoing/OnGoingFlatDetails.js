import "react-circular-progressbar/dist/styles.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OnGoingFlatDetails = () => {
  const { id, floor, flat } = useParams();
  console.log("OnGoingFlatDetails", id, floor, flat);

  const [flatDetails, setFlatDetails] = useState([]);
  const [files, setFiles] = useState([]);

  const getAllOnGoingFlatDetails = async () => {
    try {
      const res = await axios.get(
        `https://chirosobujgroup-backend.onrender.com/api/v1/ongoingFlatDetails/${id}/${floor}/${flat}`
      );
      setFiles(res.data.data.files);
      setFlatDetails(res.data.data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching flat details:", error);
    }
  };

  useEffect(() => {
    getAllOnGoingFlatDetails();
  }, [id, floor, flat]); //

  console.log("flatVideo", flatDetails.flat_video);
  return (
    <div>
      <div className="full-row px-4" style={{ marginTop: "200px" }}>
        {/* <div className="container-fluid">
          <div className="row align-items-center">
            <form className="col-lg-6">
              <h1 className="text-center">Please upload image</h1>
              <div className="col-lg-6 mx-auto">
                <div className="form-group">
                  <br />
                  <input
                    type="file"
                    onChange={(e) => MultipleFileChange(e)}
                    className="form-control border text-center"
                    multiple
                  />
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-center mt-3 ">
                <input
                  onClick={() => UploadMultipleFiles()}
                  className="btn btn-danger px-5 py-2"
                  value="Upload"
                />
              </div>
            </form>
            <form className="col-lg-6">
              <h1 className="text-center">Please add flat details</h1>
              <div className="col-lg-6 mx-auto">
                <div className="form-group mt-3">
                  <br />
                  <input
                    type="text"
                    placeholder="Profile Name"
                    onChange={(e) => setProfile_Name(e.target.value)}
                    className="form-control border "
                    multiple
                  />
                </div>
                <div className="form-group mt-3">
                  <br />
                  <input
                    type="text"
                    placeholder="Social Link"
                    onChange={(e) => setProfile_Social_Link(e.target.value)}
                    className="form-control border "
                    multiple
                  />
                </div>
                <div className="form-group mt-3">
                  <br />
                  <input
                    type="text"
                    placeholder="Profile Image URL"
                    onChange={(e) => setProfile_Url(e.target.value)}
                    className="form-control border "
                    multiple
                  />
                </div>
                <div className="form-group mt-3">
                  <br />
                  <input
                    type="text"
                    placeholder="Flat Name"
                    onChange={(e) => setFlat_Name(e.target.value)}
                    className="form-control border "
                    multiple
                  />
                </div>
                <div className="form-group mt-3">
                  <br />
                  <input
                    type="text"
                    placeholder="Flat Video"
                    onChange={(e) => setFlat_Video(e.target.value)}
                    className="form-control border "
                    multiple
                  />
                </div>
                <div className="form-group mt-3">
                  <br />
                  <input
                    type="file"
                    onChange={(e) => FlatFileChange(e)}
                    className="form-control border "
                    multiple
                  />
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-center mt-3 ">
                <input
                  onClick={() => UploadFlatFiles()}
                  className="btn btn-danger px-5 py-2"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div> */}
      </div>

      <div>
        <h2>Our Flats Details</h2>

        <div>
          <div className="full-row pt-5 px-4 sm-px-0">
            <div className="container-fluid">
              <div className="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                {files.map((file, index) => (
                  <div className="col">
                    <div className="property-grid-7 property-block bg-white transation-this">
                      <div className="overlay-secondary overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom">
                        <img
                          src={`https://chirosobujgroup-backend.onrender.com/${file.filePath}`}
                          alt={`File ${index + 1}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {flatDetails.flat_video && (
              <div className="px-2" style={{ margin: "50px 0px" }}>
                <iframe
                  width="100%"
                  height="400px"
                  src={flatDetails.flat_video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="d-flex align-items-center gap-5  mt-5">
              <img
                src={flatDetails.profile_url}
                alt="Avatar"
                class="avatar"
              ></img>
              <div>
                <h2>Our Member</h2>
                <h3>{flatDetails.profile_name}</h3>
                <span className="d-flex align-items-center gap-2">
                  <h5>
                    <i
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "4px",
                      }}
                      class="fa-brands fa-facebook"
                    ></i>
                  </h5>
                  <h4>Facebook</h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnGoingFlatDetails;
