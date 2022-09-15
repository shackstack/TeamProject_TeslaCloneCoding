import { ShopMainShowcaseContainer, ShowcaseItemDivider } from "./styles";
import ShowcaseItem from "./ShowcaseItem";

const ShopMainShowcase = () => {
  return (
    <ShopMainShowcaseContainer>
      <ShowcaseItem image={"ModelS.png"} title={"Model S 액세서리"} />
      <ShowcaseItem
        image={"Model3.png"}
        title={"Model 3 액세서리"}
        isTitleDark={true}
      />
      <ShowcaseItem image={"ModelX.png"} title={"Model X 액세서리"} />
      <ShowcaseItem
        image={"ModelY.png"}
        title={"Model Y 액세서리"}
        isTitleDark={true}
      />
      <ShowcaseItem image={"Charging.png"} title={"충전"} />
      <ShowcaseItemDivider>
        <ShowcaseItem
          image={"Men.png"}
          title={"남성 의류"}
          isTitleDark={true}
          isHalfWidth={true}
        />
        <ShowcaseItem
          image={"Women.png"}
          title={"여성 의류"}
          isTitleDark={true}
          isHalfWidth={true}
        />
      </ShowcaseItemDivider>
      <ShowcaseItem
        image={"Cyberwhistle.png"}
        title={"라이프스타일"}
        isTitleDark={true}
        isButtonBordered={true}
      />
    </ShopMainShowcaseContainer>
  );
};

export default ShopMainShowcase;
