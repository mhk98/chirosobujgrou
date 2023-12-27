// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const InsertOnGoingFlatDetails = () => {
//   const [multipleFiles, setMultipleFiles] = useState("");
//   const [flatFiles, setFlatFiles] = useState("");
//   const [onGoingDetails, setOnGoingDetails] = useState([]);

//   const [profile_Name, setProfile_Name] = useState("");
//   const [profile_Social_Link, setProfile_Social_Link] = useState("");
//   const [profile_Url, setProfile_Url] = useState("");
//   const [floor_Name, setFloor_Name] = useState("");
//   const [flat_Name, setFlat_Name] = useState("");
//   const [flat_Video, setFlat_Video] = useState("");
//   console.log("onGoingDetails", onGoingDetails);

//   const MultipleFileChange = (e) => {
//     setMultipleFiles(e.target.files);
//   };

//   const UploadMultipleFiles = async () => {
//     const formData = new FormData();

//     for (let i = 0; i < multipleFiles.length; i++) {
//       formData.append("files", multipleFiles[i]);
//     }

//     const res = await axios.post(
//       `https://chirosobujgroup-backend.onrender.com/api/v1/ongoingDetails/create-ongoingDetails/${id}`,
//       formData
//     );

//     if (res.data.status === "Success") {
//       toast.success("Successfully create added image");
//     }
//   };

//   const FlatFileChange = (e) => {
//     setFlatFiles(e.target.files);
//   };

//   const UploadFlatFiles = async () => {
//     const formData = new FormData();

//     for (let i = 0; i < flatFiles.length; i++) {
//       formData.append("files", flatFiles[i]);
//     }

//     formData.append("profile_name", profile_Name);
//     formData.append("profile_url", profile_Url);
//     formData.append("profile_social_link", profile_Social_Link);
//     formData.append("floor_name", floor_Name);
//     formData.append("flat_name", flat_Name);
//     formData.append("flat_video", flat_Video);

//     // profile_name, profile_url, profile_social_link, flat_name

//     const res = await axios.post(
//       `https://chirosobujgroup-backend.onrender.com/api/v1/ongoingFlatDetails/1`,
//       formData
//     );

//     if (res.data.status === "Success") {
//       toast.success("Successfully create Flat details");
//     }
//   };

//   return (
//     <div>
//       <div className="full-row px-4" style={{ marginTop: "200px" }}>
//         <div className="container-fluid">
//           <div className="row align-items-center">
//             {/* <form className="col-lg-6">
//               <h1 className="text-center">Please upload image</h1>
//               <div className="col-lg-6 mx-auto">
//                 <div className="form-group">
//                   <br />
//                   <input
//                     type="file"
//                     onChange={(e) => MultipleFileChange(e)}
//                     className="form-control border text-center"
//                     multiple
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-12 d-flex justify-content-center mt-3 ">
//                 <input
//                   onClick={() => UploadMultipleFiles()}
//                   className="btn btn-danger px-5 py-2"
//                   value="Upload"
//                 />
//               </div>
//             </form> */}
//             <form className="col-lg-6">
//               <h1 className="text-center">Please add flat details</h1>
//               <div className="col-lg-6 mx-auto">
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Profile Name"
//                     onChange={(e) => setProfile_Name(e.target.value)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Social Link"
//                     onChange={(e) => setProfile_Social_Link(e.target.value)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Profile Image URL"
//                     onChange={(e) => setProfile_Url(e.target.value)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Floor Name"
//                     onChange={(e) => setFloor_Name(e.target.value)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Flat Name"
//                     onChange={(e) => setFlat_Name(e.target.value)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Flat Video"
//                     onChange={(e) => setFlat_Video(e.target.value)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <br />
//                   <input
//                     type="file"
//                     onChange={(e) => FlatFileChange(e)}
//                     className="form-control border "
//                     multiple
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-12 d-flex justify-content-center mt-3 ">
//                 <input
//                   onClick={() => UploadFlatFiles()}
//                   className="btn btn-danger px-5 py-2"
//                   value="Submit"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsertOnGoingFlatDetails;
