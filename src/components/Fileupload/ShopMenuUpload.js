import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

//이름
const ShopIntroduceName = styled.div`
  width: 120px;
  height: 22px;
  margin: 30px 0 0 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

//가게 대표 사진
const ShopMenuPhoto = styled.p`
  margin: 10px 0 0 24px;
  width: 380px;
  height: 100px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  &:hover {
    border: 1px dashed #333;
  }
`;

//파일 컴포넌트
const FileInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  marginBottom: 3,
  marginLeft: 1,
  width: 100,
  height: 80,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  objectFit: "contain",
};

const DeleteButton = styled.button`
  width: 40px;
  height: 17px;
  border-style: hidden;
  text-decoration: underline;
`;

//ui 구현
const ShopMenuUpload = ({ MenuFile, setMenuFile }) => {
  //객체 요소
  const onDelete = e => {
    e.preventDefault();
    setMenuFile([]);
    setVisible(!Visible);
  };

  const [Visible, setVisible] = useState(false);
  const onCheck = e => {
    e.preventDefault();
    setVisible(!Visible);
  };
  const { getRootProps, getInputProps } = useDropzone({
    //허용하는 파일 형식
    accept: {
      "image/png": [],
    },
    onDrop: acceptedFiles => {
      setMenuFile(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            original: file,
          }),
        ),
      );
    },
  });

  //업로드 하려고 선택한 파일의 이미지를 미리보기로 보여준다.
  const thumbs = MenuFile.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img} // createObjectURL 로 생성한 후 업로드 시, URL 메모리 공간을 revokeObjectURL 로 제거 해준다.
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => MenuFile.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  //form - action: /save페이지로 데이터 전송
  return (
    <form action="/save" method="post" encType="multipart/form-data">
      <ShopIntroduceName>케이크 대표 메뉴</ShopIntroduceName>
      <section onDrop={onCheck}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <ShopMenuPhoto>➕</ShopMenuPhoto>
        </div>
        <ShopMenuPhoto>
          <FileInfo>
            {" "}
            {thumbs}
            {MenuFile.map(file => (
              <div key={file.id}>
                {file.name}
                <br />
                {file.size}KB
              </div>
            ))}
          </FileInfo>

          {Visible ? <DeleteButton onClick={onDelete}>삭제</DeleteButton> : ""}
        </ShopMenuPhoto>
      </section>
    </form>
  );
};

export default ShopMenuUpload;
