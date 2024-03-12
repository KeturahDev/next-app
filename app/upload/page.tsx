"use client";
import React from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  publicId: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="img" />
      )}
      <CldUploadWidget
        uploadPreset="ecu5ve3u"
        onUploadAdded={(result, { widget }) => {
          console.log("bingo", result);
          const info = result.info as unknown as CloudinaryResult;
          setPublicId(info.publicId);
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
