"use client";
import React from "react";
import {
  CldUploadWidget,
  CldImage,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState("");

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
        onSuccess={(result) => {
          const info = result.info as CloudinaryUploadWidgetInfo;
          setPublicId(info.public_id);
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
