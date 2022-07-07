import styled from "styled-components";

const PageTitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  padding: 60px 0 40px 0;
`;

const Highlight = styled.div`
  display: inline-block;
  position: absolute;
  height: 13px;
  background-color: #ffebea;
  vertical-align: center;
`;

const TitleText = styled.div`
  width: fit-content;
  font-size: 22px;
  font-weight: bold;
  margin: 0 3px;
  position: relative;
  bottom: 9px;
`;

const PageTitle = ({ title }) => {
  return (
    <PageTitleBox>
      <Highlight>
        <TitleText>{title}</TitleText>
      </Highlight>
    </PageTitleBox>
  );
};

export default PageTitle;
