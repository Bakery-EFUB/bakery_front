import styled from "styled-components";

const PageTitleBox = styled.div`
    display: flex;
    justify-content: center;

    margin: ${({ margin }) => margin};
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
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: var(--black-text);
  `;

const PageTitle = ({ title, margin }) => {
  return (
    <PageTitleBox margin={margin}>
      <Highlight>
        <TitleText>{title}</TitleText>
      </Highlight>
    </PageTitleBox>
  );
};

export default PageTitle;
