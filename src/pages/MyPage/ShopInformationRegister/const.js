export const SHOP_DATA = [
  {
    key: "name",
    height: "60px",
    placeholder: "     정확한 상호명을 입력해주세요.",
    keyword: "가게 이름",
  },
  {
    key: "readme",
    height: "125px",
    placeholder: "     자신의 가게를 자유롭게 소개해주세요! (최대 300자)",
    keyword: "가게 소개",
  },
  {
    key: "phoneNumber",
    height: "60px",
    placeholder: "     ex. 02-0000-0000",
    keyword: "전화번호",
  },
  {
    key: "address",
    height: "60px",
    placeholder: "     ex. 서울특별시 서대문구 대현동 11-11층",
    keyword: "주소",
  },
  {
    key: "openTime",
    height: "60px",
    placeholder: "     ex. 매일 12:00~20:00",
    keyword: "운영 시간",
  },
  {
    key: "kakaoUrl",
    height: "60px",
    placeholder: "     운영중인 카카오톡 채널이 있다면 링크를 첨부해주세요.",
    keyword: "카카오톡 채널",
  },
  {
    key: "instagram",
    height: "60px",
    placeholder: "     운영중인 인스타그램이 있다면 링크를 첨부해주세요.",
    keyword: "인스타그램",
  },
];

export const DEFAULT_STORE_DATA = {
  name: "", //(string)
  readme: "", //string
  address: "", //string
  kakaoUrl: "", //string
  instagram: "", //string
  certifyFlag: 0, //가게 인증 여부 (boolean)
  openTime: "", //string
  phoneNumber: "", //string
  mainImg: "",
};
