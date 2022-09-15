import {FaTimes} from "react-icons/fa";
import {OverlayMenuContainer} from "./styles";
import {Link} from "react-router-dom";
import {useContext} from "react";
import GlobalState from "../../shared/GlobalStates";

const OverlayMenu = () => {
    const {isMenuOpen, setIsMenuOpen} = useContext(GlobalState);
    const timesClickHandler = () => {
        setIsMenuOpen(false)
    }
    return <OverlayMenuContainer $isMenuOpen={isMenuOpen}>
        <FaTimes onClick={timesClickHandler}/>
        <p>Shop FAQ</p>
        <Link to="/login">로그인</Link>
    </OverlayMenuContainer>
}

export default OverlayMenu;