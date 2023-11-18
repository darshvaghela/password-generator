import { FC, useState } from "react";
import {
  Card,
  Layout,
  Button,
  Switch,
  Row,
  Col,
  Typography,
  Input,
  message,
} from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { IPassword } from "../../type/password";
import { generatePassword } from "./DashboardService";
import PasswordModal from "./PasswordModal";
import Header from "./Header";

const { Title } = Typography;

const Dashboard: FC = () => {
  const [passwordFields, setPasswordFields] = useState<IPassword>({
    length: 10,
    upperCase: true,
    lowerCase: true,
    numeric: false,
    symbol: false,
  });
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getTitle = () => {
    return (
      <Row
        gutter={24}
        justify="center"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Col lg={{ span: 16 }} xs={{ span: 24 }} sm={{ span: 24 }}>
          <Button
            type="primary"
            size="large"
            block
            loading={loading}
            onClick={handleGeneratePassword}
          >
            <b>Generate</b>
          </Button>
        </Col>
      </Row>
    );
  };

  const validation = () => {
    const isValid = true;

    if (passwordFields.length === 0) {
      message.error("Password length must be greater than 0!");
      return false;
    }
    if (
      !passwordFields.upperCase &&
      !passwordFields.lowerCase &&
      !passwordFields.numeric &&
      !passwordFields.symbol
    ) {
      message.error("Please choose at least one password type to generate!");
      return false;
    }

    return isValid;
  };

  const handleGeneratePassword = async () => {
    if (validation()) {
      try {
        setLoading(true);
        const response: any = await generatePassword(passwordFields);
        setPassword(response.password);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Header />
      <Layout style={{ minHeight: "80vh", backgroundColor: "#f0f2f5" }}>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <PasswordModal
            loading={loading}
            password={password}
            handleGeneratePassword={handleGeneratePassword}
          />
          <Card
            title={getTitle()}
            style={{ width: 600, height: 300, textAlign: "center" }}
          >
            <Row gutter={24} justify="center">
              <Col
                lg={{ span: 24 }}
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                style={{ marginBottom: "30px" }}
              >
                <Row gutter={16} justify="center" align="middle">
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      How many characters?
                    </Title>
                  </Col>
                  <Col style={{ width: "20%" }}>
                    <Input
                      type="number"
                      name="length"
                      value={passwordFields.length}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setPasswordFields((prevFields) => ({
                          ...prevFields,
                          length: Number(event.target.value),
                        }));
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ span: 12 }}
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                style={{ marginBottom: "20px" }}
              >
                <Row gutter={16} justify="center" align="middle">
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      (A-Z)
                    </Title>
                  </Col>
                  <Col>
                    <Switch
                      checked={passwordFields.upperCase}
                      onChange={() => {
                        setPasswordFields((prevFields) => ({
                          ...prevFields,
                          upperCase: !passwordFields.upperCase,
                        }));
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ span: 12 }}
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                style={{ marginBottom: "20px" }}
              >
                <Row gutter={16} justify="center" align="middle">
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      (a-z)
                    </Title>
                  </Col>
                  <Col>
                    <Switch
                      checked={passwordFields.lowerCase}
                      onChange={() => {
                        setPasswordFields((prevFields) => ({
                          ...prevFields,
                          lowerCase: !passwordFields.lowerCase,
                        }));
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ span: 12 }}
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                style={{ marginBottom: "20px" }}
              >
                <Row gutter={16} justify="center" align="middle">
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      (0-9)
                    </Title>
                  </Col>
                  <Col>
                    <Switch
                      checked={passwordFields.numeric}
                      onChange={() => {
                        setPasswordFields((prevFields) => ({
                          ...prevFields,
                          numeric: !passwordFields.numeric,
                        }));
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                lg={{ span: 12 }}
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                style={{ marginBottom: "20px" }}
              >
                <Row gutter={16} justify="center" align="middle">
                  <Col>
                    <Title level={4} style={{ margin: 0 }}>
                      symbol
                    </Title>
                  </Col>
                  <Col>
                    <Switch
                      checked={passwordFields.symbol}
                      onChange={() => {
                        setPasswordFields((prevFields) => ({
                          ...prevFields,
                          symbol: !passwordFields.symbol,
                        }));
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Content>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "#FFFFFF",
        }}
      >
        &copy; 2023 password-generator. All rights reserved.
      </Footer>
    </>
  );
};

export default Dashboard;
