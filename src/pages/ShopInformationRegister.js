import TopBar from "../components/TopBar";
import styled from "styled-components";
import vectorimg from "../images/Vector.svg";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const ShopName = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  left: 24px;
  top: 291.87px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ShopIntroduce = styled.input`
  width: 380px;
  height: 125px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: justify;
`;

const ShopNumber = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ShopLocation = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ShopOperatingHours = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ShopKaKao = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ShopInstagram = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px 0px 0px 24px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
`;

const ShopPhoto = styled.p`
  margin: 10px 0px 0px 24px;
  width: 380px;
  height: 100px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px dashed #333;
  }
`;

const ShopMenuPhoto = styled.input`
  margin: 10px 0px 0px 24px;
  width: 380px;
  height: 100px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: center;
  &:hover {
    border: 2px dashed #333;
  }
`;

const ShopMenuPhoto2 = styled.input`
  margin: 10px 0px 0px 24px;
  width: 380px;
  height: 100px;
  background: var(--sub-lightgray);
  border-radius: 6px;
  border: 1px solid var(--sub-lightgray);
  text-align: center;
  &:hover {
    border: 2px dashed #333;
  }
`;

const RegisterBtn = styled.button`
  margin: 70px 0px 0px 24px;
  width: 380.47px;
  height: 60px;
  left: 24px;
  top: 1593.19px;
  background: var(--main-pink);
  border-radius: 6px;
  border: 1px solid var(--main-pink);
  color: white;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const WrapBox = styled.div`
  width: 428px;
  height: 1800px;
`;

const ShopRegistering = styled.div`
  width: 162px;
  height: 29px;
  margin: 56px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  z-index: 1;
`;

const ShopNameing = styled.div`
  width: 80px;
  height: 22px;
  margin: 70px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

const ShopIntroducing = styled.div`
  width: 80px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #202020;
  z-index: 1;
`;

const ShopNumbering = styled.div`
  width: 73px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;

const ShopLocating = styled.div`
  width: 40px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  z-index: 1;
`;

const ShopOperatingHouring = styled.div`
  width: 80px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

const ShopKaKaoing = styled.div`
  width: 115px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

const ShopInstagraming = styled.div`
  width: 90px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

const ShopPhotoing = styled.div`
  width: 125px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

const ShopMenuPhotoing = styled.div`
  width: 140px;
  height: 22px;
  margin: 30px 0px 0px 24px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

const Vector = styled.div`
  background: url(${vectorimg});
  height: 19.69px;
  width: 20px;
  position: absolute;
  left: 177.52px;
  top: 73.16px;
  z-index: 1;
`;

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,

  marginBottom: 3,
  marginRight: 2,
  width: 90,
  height: 90,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

//ui 구현
const ShopInformationRegister = () => {
  const [files, setFiles] = useState([]); //업로드 하려는 파일의 url을 새생성하고 파일의 정보를 파일즈에 담아준다.
  const { getRootProps, getInputProps } = useDropzone({
    //허용하는 파일 형식
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  //업로드 하려고 선택한 파일의 이미지를 미리보기로 보여준다.
  const thumbs = files.map((file) => (
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
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  //form - action: /save페이지로 데이터 전송
  return (
    <WrapBox>
      <TopBar />

      <form action="/save" method="post" encType="multipart/form-data">
        <ShopRegistering>가게 정보 등록</ShopRegistering>
        <ShopNameing>가게 이름</ShopNameing>
        <ShopName
          type="text"
          placeholder="     정확한 상호명을 입력해주세요."
        />
        <ShopIntroducing>가게 소개</ShopIntroducing>
        <ShopIntroduce
          type="text"
          placeholder="     자신의 가게를 자유롭게 소개해주세요! (최대 300자)"
        />
        <ShopNumbering>전화번호</ShopNumbering>
        <ShopNumber type="text" placeholder="     ex. 02-0000-0000" />
        <ShopLocating>주소</ShopLocating>
        <ShopLocation
          type="text"
          placeholder="     ex. 서울특별시 서대문구 대현동 11-11층"
        />
        <ShopOperatingHouring>운영 시간</ShopOperatingHouring>
        <ShopOperatingHours
          type="text"
          placeholder="     ex. 매일 12:00~20:00"
        />
        <ShopKaKaoing>카카오톡 채널</ShopKaKaoing>
        <ShopKaKao
          type="text"
          placeholder="     운영중인 카카오톡 채널이 있다면 링크를 첨부해주세요."
        />
        <ShopInstagraming>인스타그램</ShopInstagraming>
        <ShopInstagram
          type="text"
          placeholder="     운영중인 인스타그램이 있다면 링크를 첨부해주세요."
        />

        <ShopPhotoing>가게 대표 사진</ShopPhotoing>
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <ShopPhoto>➕</ShopPhoto>
          </div>
          <ShopPhoto>{thumbs}</ShopPhoto>
        </section>
        <ShopMenuPhotoing>케이크 대표 메뉴</ShopMenuPhotoing>
        <ShopMenuPhoto placeholder="➕" />
        <ShopMenuPhoto2 placeholder="➕" />
        <RegisterBtn>등록하기</RegisterBtn>
      </form>
    </WrapBox>
  );
};

export default ShopInformationRegister;
