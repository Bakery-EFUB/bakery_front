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
    background-color: var(--sub-pink);
    vertical-align: center;
  `;

  const TitleText = styled.div`
    width: fit-content;

    margin: 0 3px;
    position: relative;
    bottom: 9px;

    font-family: "Apple SD Gothic Neo";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: var(--black-text);
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
