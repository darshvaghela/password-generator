import { Layout, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import logo from "../../assets/svg/logo.svg";

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
        <Title
          style={{ color: "#16DB65", justifyContent: "center" }}
          level={2}
        >
          <b>Password Generator</b>
        </Title>
      </Content>
    </Layout>
  );
};

export default Header;
