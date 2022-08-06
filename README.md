


## 🍏 프론트엔드 팀원 소개
|김하은|정다윤|김지원|도소현|최지민|
|:---:|:---:|:---:|:---:|:---:|
|Frontend Lead|Frontend Lead|Frontend Intern|Frontend Intern|Frontend Intern|
| [@harloxx](https://github.com/harloxx) |[@dy6578ekdbs](https://github.com/dy6578ekdbs) |[@JiwonKim08](https://github.com/JiwonKim08)|[@sohyundoh](https://github.com/sohyundoh) |[@zmin9](https://github.com/zmin9) |

## 🍰 개요
'CAKER'는 레터링 케이크 주문/판매 플랫폼으로, 레터링 케이크를 주문하고자 하는 구매자와 그에 맞는 서비스를 제공하는 판매자를 서로 연결해주어 기존의 불편함을 해소하고 원하는 케이크 가게를 손쉽게 찾게 해줍니다.  

## 🍰 기술 스택   
<img src="https://github.com/Bakery-EFUB/Bakery-Back/blob/develop/BakeryArchitectureDiagram.png"/> 

- deploy <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white">

- Package Manager <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white">  

- Frontend <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white">   <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white">  

- Code Formmater <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=React&logoColor=white">


- ETC &nbsp; 
 <img src="https://img.shields.io/badge/Figma -F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub -181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub Action-256EE0?style=flat-square&logo=GitHub Action&logoColor=white"/></br>

 



## 🍰 라이브러리
- axios : "^0.27.2",
- classnames : "^2.3.1",
- moment: "^2.29.4",
- react-dom: "^18.2.0",
-react-dropzone: "^14.2.2",
- react-icons: "^4.4.0",
- react-router-dom : "^6.3.0",
- react-scripts : "5.0.1",
- styled-components: "^5.3.5",   
- redux: "^4.2.0",   
- @reduxjs/toolkit: "^1.8.3",   


## 🍰 프로젝트 구조

### 설명
```
📂 src
├─ 📂 api  ▶️ api 호출 
├─ 📂 common  ▶️ 여러 페이지, 함수에서 사용되는 값
├─ 📂 components  ▶️ 페이지에 사용되는 요소들
├─ 📂 images  ▶️ svg 파일
├─ 📂 pages  ▶️ routing에 따라 rendering 할 페이지
├─ 📂 route  ▶️ 사용자 권한 별 라우팅 제어
├─ 📂 services  ▶️ api 함수 정의
├─ 📂 styles  ▶️ 공통적으로 사용되는 스타일 값 관리
├─ 📂 store  ▶️ 리덕스
└─ 📂 _mock  ▶️ 샘플 데이터

```  

### 🍰 폴더
```
🍞 bakery_front
 ┣ 📂.git
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂AccountSetting
 ┃ ┃ ┣ 📂HomeCardDisplay
 ┃ ┃ ┣ 📂Proposal
 ┃ ┃ ┣ 📂SearchResult
 ┃ ┃ ┣ 📂Sidebar
 ┃ ┃ ┣ 📂WholeProposals
 ┃ ┃ ┣ 📜API.js
 ┃ ┃ ┣ 📜BigCardDisplay.js
 ┃ ┃ ┣ 📜BigPinkButton.js
 ┃ ┃ ┣ 📜Button.js
 ┃ ┃ ┣ 📜ButtonSidebar.js
 ┃ ┃ ┣ 📜CityButton.js
 ┃ ┃ ┣ 📜DetailInfoCard.js
 ┃ ┃ ┣ 📜DetailInfoItem.js
 ┃ ┃ ┣ 📜FileUpload.js
 ┃ ┃ ┣ 📜MainHeader.js
 ┃ ┃ ┣ 📜PageTitle.js
 ┃ ┃ ┣ 📜SearchBar.js
 ┃ ┃ ┣ 📜SmallGrayButton.js
 ┃ ┃ ┣ 📜SmallPinkButton.js
 ┃ ┃ ┣ 📜SmallWhiteButton.js
 ┃ ┃ ┗ 📜TopBar.js
 ┃ ┣ 📂images
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂CreateProposal
 ┃ ┃ ┣ 📜AccountRemove.js
 ┃ ┃ ┣ 📜AccountSetting.js
 ┃ ┃ ┣ 📜AddSchedulePage.js
 ┃ ┃ ┣ 📜AllProposal.js
 ┃ ┃ ┣ 📜CreateProposal.js
 ┃ ┃ ┣ 📜LoadingPage.js
 ┃ ┃ ┣ 📜LoginHome.js
 ┃ ┃ ┣ 📜MainHome.js
 ┃ ┃ ┣ 📜OurService.js
 ┃ ┃ ┣ 📜PickupSchedulePage.js
 ┃ ┃ ┣ 📜PreviewModal.js
 ┃ ┃ ┣ 📜Proposal.js
 ┃ ┃ ┣ 📜Recommend.js
 ┃ ┃ ┣ 📜SearchPage.js
 ┃ ┃ ┣ 📜ShopDetailPage.js
 ┃ ┃ ┣ 📜ShopInformationModify.js
 ┃ ┃ ┣ 📜ShopInformationRegister.js
 ┃ ┃ ┣ 📜ShopMemberMyPage.js
 ┃ ┃ ┣ 📜ShopMyPageProgressive.js
 ┃ ┃ ┗ 📜ShopMyPageStart.js
 ┃ ┣ 📂styles
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
 ```
