import { Text } from "@mantine/core";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-disclaimer">
        <Text className="footer-disclaimer-text">
          Cambria's Arena is a fan-made web app. Grand Archive and all official
          assets are owned by Weebs of the Shore.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
