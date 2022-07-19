import styled from "styled-components";

// 세부 정보
const ItemBox = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize};
  & + & {
    margin-top: 30px;
  }
`;
const Category = styled.div`
  width: 100px;
  font-weight: 600;
  color: var(--main-pink);
`;
const Content = styled.div`
  width: 100%;
  color: var(--black-text);
  word-break: keep-all;
`;
const DetailInfoItem = ({ category, content, fontSize }) => {
  return (
    <ItemBox fontSize={fontSize}>
      <Category>{category}</Category>
      <Content>{content}</Content>
    </ItemBox>
  );
};

export default DetailInfoItem;
