"use client";
import React from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  publicId: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState("");

  console.log("mm", publicId);
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="img" />
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
        }}
        uploadPreset="ecu5ve3u"
        onUploadAdded={(result) => {
          console.log("tango", publicId);
          console.log("wango");
          const info = result.info as unknown as CloudinaryResult;
          setPublicId(info.publicId);
          console.log("bingo", result);
        }}
      >
        {({ open }) => (
          <button className="btn" onClick={() => open()}>
            Upload an Image
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
