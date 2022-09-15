import {ShopCatalogueHeaderContainer} from "./styles";

const ShopCatalogueHeader = ({title, footnote}) => {
    return <ShopCatalogueHeaderContainer>
        <h1>{title}</h1>
        <p>{footnote}</p>
    </ShopCatalogueHeaderContainer>
}

export default ShopCatalogueHeader;