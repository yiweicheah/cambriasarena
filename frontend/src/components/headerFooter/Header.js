import { Title } from "@mantine/core";
import "./Header.css";
import arena from "./images/arena.png";

const Header = () => {
  return (
    <div className="header-div">
      <div className="header-title-a">
        <img src={arena} alt="arena" className="header-logo" />
        <Title className="header-title">Cambria's Arena</Title>
      </div>
    </div>
  );
};

export default Header;
