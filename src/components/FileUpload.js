import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const thumb = {
  display: "flex",
  borderRadius: 2,
  border: "1px solid blue",
  marginBottom: 3,
  marginRight: 2,
  width: 380,
  height: 250,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  width: 380,
  display: "flex",
  justifyContent: "center",
  objectFit: "contain",
  minWidth: 0,
  overflow: "hidden",
  border: "1px solid red",
};

const img = {
  objectFit: "contain",
  display: "block",
  width: "auto",
  height: "100",
};

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: var(--main-pink);
  color: var(--white);
  border-radius: 6px;
  top: 310px;
  left: 24px;
  padding: 10px 0;
  width: 380px;
  height: 60px;
  font-size: 20px;
  border-style: none;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--sub-lightgray);
  }
`;

const UploadBox = styled.p`
  position: absolute;
  width: 380px;
  height: 256px;
  left: 24px;
  top: 389px;

  /* background */

  background: #c4c4c4;
  box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
  border-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FileUpload(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Button>사진 업로드</Button>
      </div>
      <UploadBox>{thumbs}</UploadBox>
    </section>
  );
}

export default FileUpload;
