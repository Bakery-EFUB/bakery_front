import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import SmallPinkButton from "../../components/Proposal/SmallPinkButton";
import SmallWhiteButton from "../../components/Proposal/SmallWhiteButton";
import PageTitle from "../../components/Proposal/PageTitle";
import ProposalText from "../../components/Proposal/ProposalText";

import ProgessBar from "../../components/Proposal/ProgressBar";

import { useDropzone } from "react-dropzone";

const Design = ({ history, setHistory, original, setOriginal }) => {
  const ThisStep = 90;
  const [files, setFiles] = useState([]); //업로드 하려는 파일의 url을 새생성하고 파일의 정보를 파일즈에 담아준다.
  const { getRootProps, getInputProps } = useDropzone({
    //허용하는 파일 형식
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

  //업로드 하려고 선택한 파일의 이미지를 미리보기로 보여준다.
  const thumbs = files.map(file => (
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
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  const Back = () => {
    setHistory(ThisStep);
  };

  const navigate = useNavigate();

  const Next = () => {
    setHistory(ThisStep);
    setOriginal({ ...original, file: files });
  };

  const onChange2 = e => {
    console.log("아아아아ㅏ");
    const img = e.target.files[0];
    console.log(img);
    const formData = new FormData();
    // formData.append("file", img);
    // formData.append("orderId", 5);
    // console.log("폼데이터", formData); // FormData {}
    // for (const keyValue of formData) console.log(keyValue);

    // axios
    //   .patch("https://caker.shop/orders", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Accept: "multipart/form-data",
    //       "X-AUTH-TOKEN": token,
    //     },
    //   })
    //   .then(res => console.log("파일 포스트 성공", res))
    //   .catch(err => console.log("파일 포스트 실패", err));
  };

  return (
    <div>
      <PageTitle title="제안서 작성하기" margin="56px auto 0 auto" />

      <ProgessBar step={ThisStep} before={history} />

      <ProposalText text="디자인 시안이 있다면 알려주세요." />

      <div {...getRootProps({ className: "dropzone" })}>
        <input type="file" onChange={onChange2} {...getInputProps()} />
        <Button>사진 업로드</Button>
      </div>
      {thumbs}
      {/* <ImageBox></ImageBox> */}

      <div
        style={{
          width: "100%",
          margin: "105px  auto 0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/create/price">
          <SmallWhiteButton onClick={() => Back()}>이전</SmallWhiteButton>
        </Link>

        <div style={{ marginLeft: "6px" }}>
          <Link to="/create/pickup">
            <SmallPinkButton onClick={() => Next()}>완료</SmallPinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Design;

const Button = styled.button`
  height: 60px;
  width: calc(100% - 48px);
  margin: 20px 24px 0 24px;

  background-color: var(--main-pink);
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  border: none;

  color: var(--sub-yellow);

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
`;

const ImageBox = styled.div`
  margin: 19px 24px 0 24px;

  height: 256px;

  /* background */

  background: var(--background);
  box-shadow: 0px 4px 62px rgba(153, 171, 198, 0.18);
  border-radius: 6px;
`;

const thumb = {
  margin: "19px 24px 0 24px",
  height: "auto",

  borderRadius: "6px",

  display: "flex",
  justifyContent: "center",
};

const thumbInner = {
  height: "256px",

  borderRadius: "6px",

  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
