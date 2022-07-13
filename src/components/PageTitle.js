import styled from "styled-components";

const PageTitle = ({ title, margin }) => {
  const PageTitleBox = styled.div`
    display: flex;
    justify-content: center;

    margin: ${margin};
  `;

  const Highlight = styled.div`
    display: inline-block;

    height: 13px;
    background-color: #ffebea;
    vertical-align: center;
  `;

  const TitleText = styled.div`
    width: fit-content;
    font-family: "Apple SD Gothic Neo";
    font-size: 22px;
    font-weight: bold;
    margin: 0 3px;
    position: relative;
    bottom: 9px;
  `;

  return (
    <PageTitleBox>
      <Highlight>
        <TitleText>{title}</TitleText>
      </Highlight>
    </PageTitleBox>
  );
};

export default PageTitle;
