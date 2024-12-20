import React from "react";
import { FaUpload } from "react-icons/fa";

const ImageUploadButton = () => {
  return (
    <div>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        // onChange={handleImageChange}
        className="hidden"
      />

      {/* Custom Label with Icon */}
      <label
        htmlFor="fileInput"
        className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600">
        <FaUpload className="w-6 h-6" />
      </label>
    </div>
  );
};

export default ImageUploadButton;
