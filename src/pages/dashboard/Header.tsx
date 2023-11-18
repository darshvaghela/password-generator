import { Image, Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import logo from "../../assets/svg/logo.png";

const { Title } = Typography;

const Header: FC = () => {
  return (
    <Layout style={{ height: "10vh", backgroundColor: "#FFFFFF" }}>
      <Content
        style={{
          display: "flex",
        }}
      >
        <img
          src={logo}
          width={50}
          height={50}
          style={{ justifyContent: "start", margin: "20px" }}
          alt="logo"
        />
        <Title style={{ justifyContent: "center" }} level={3}>
          <b>Password Generator</b>
        </Title>
      </Content>
    </Layout>
  );
};

export default Header;
