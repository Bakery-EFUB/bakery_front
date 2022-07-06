import "./ShopMemberMyPage.css";
import TopBar from "../components/TopBar";

const ShopMemberMyPage = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div>마이페이지</div>{" "}
      <div>
        <div>닉네임 님,</div>
        <div>이미지 삽입</div>
      </div>
      <section className="BottomPinkBackground">
        <div className="WriteProposal">제안서 작성하기</div>
        <div className="BottomProposal">
          <article>1</article>
          <article>2</article>
          <article>3</article>
          <article>4</article>
          <article>5</article>
          <article>6</article>
        </div>
        <div>이미지 삽입</div>
      </section>
    </div>
  );
};

export default ShopMemberMyPage;
