import {
  ShowcaseHalfItemContainer,
  ShowcaseHalfItemOverlay,
  ShowcaseItemContainer,
  ShowcaseItemOverlay,
} from "./styles";

const ShowcaseItem = ({
  image,
  title,
  isTitleDark = false,
  isHalfWidth = false,
  isButtonBordered = false,
}) => {
  if (isHalfWidth) {
    return (
      <ShowcaseHalfItemContainer>
        <img src={`/assets/ShopMain/${image}`} alt={title} />
        <ShowcaseHalfItemOverlay $isTitleDark={isTitleDark}>
          <h2>{title}</h2>
          <button>지금 쇼핑하기</button>
        </ShowcaseHalfItemOverlay>
      </ShowcaseHalfItemContainer>
    );
  } else {
    return (
      <ShowcaseItemContainer>
        <img src={`/assets/ShopMain/${image}`} alt={title} />
        <ShowcaseItemOverlay
          $isTitleDark={isTitleDark}
          $isButtonBordered={isButtonBordered}>
          <h2>{title}</h2>
          <button>지금 쇼핑하기</button>
        </ShowcaseItemOverlay>
      </ShowcaseItemContainer>
    );
  }
};

export default ShowcaseItem;
