import React, { useRef, useState } from "react";
import Button from "../../../Components/Button.jsx";
import locationicon2 from "../../../assets/images/locationicon2.png";
import Prescriptionicon from "../../../assets/images/Prescriptionicon.png";
import uploadicon from "../../../assets/images/uploadicon.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OrderTrack() {
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = async (e) => {
    setError("");
    setSuccess("");
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload file.");
    }
  };

  return (
    <div className="roboto-font w-full h-auto flex flex-col items-center">
      <div className="w-full h-auto flex justify-between items-center mb-[24px]">
        <div
          id="prescription"
          className="bg-[#FFEEE4] w-full sm:mr-15 h-[60px] sm:min-h-[90px] rounded-[10px] border-[1px] border-solid border-[#00000030] flex items-center justify-around"
        >
          <img
            src={Prescriptionicon}
            className="w-[40px] sm:w-[50px] object-fit"
          />
          <p className="sm:block hidden font-[600] text-[20px]">
            Order with your <span className="text-[#F2630A]">Prescription</span>
          </p>
          <p className="sm:hidden font-[600] text-[16px]">
            Upload your <span className="text-[#F2630A]">prescription</span>
          </p>
          <p className="sm:block hidden text-[#00000090] font-[15px]">
            Upload it in .pdf format
          </p>

          {/* Mobile upload button */}
          <button
            className="w-[25px] object-contain sm:hidden transition-all duration-200 ease-in-out active:scale-[0.9]"
            onClick={() => fileInputRef.current.click()}
          >
            <img src={uploadicon} />
          </button>

          {/* Desktop upload button */}
          <Button
            content="Upload"
            theme="themeorange2"
            specification="s1"
            icon={uploadicon}
            iconcss="w-[26px] h-[26px] ml-5"
            additionalcss="sm:flex hidden text-[20px] font-[500]"
            onClick={() => fileInputRef.current.click()}
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <Button
          theme="themeblack"
          content="Track Your Order"
          specification="s1"
          icon={locationicon2}
          iconcss="w-[23px] ml-3"
          additionalcss="hidden sm:flex text-[17px]"
        />
      </div>

      {error && <p className="text-red-600 mt-2">{error}</p>}
      {success && <p className="text-green-600 mt-2">{success}</p>}

      <div className="roboto-font w-full hidden my-[24px] sm:flex justify-between items-center gap-6 p-4">
        {[
          "Upload a photo of your prescription",
          "Add your delivery address and place the order",
          "Your nearest pharmacy will call you to confirm the order",
          "Your medicines will get delivered within minutes",
        ].map((content, index) => (
          <div key={index} className="flex items-center max-w-[350px]">
            <div className="min-h-[50px] min-w-[50px] rounded-full bg-orange-200 text-[#F2630A] border-[1px] border-solid border-[#00000030] font-semibold text-[27px] flex justify-center items-center mr-7 hover:scale-[1.1] hover:border-orange-600 transition-all duration-200 ease-out">
              {index + 1}
            </div>
            <p className="text-[14px]">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
