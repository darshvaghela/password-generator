import { Button, Col, Input, Modal, Row, Typography, message } from "antd";
import { FC, useEffect, useState } from "react";
import { CopyOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface IPasswordModal {
  password: string;
  handleGeneratePassword: () => void;
}
const PasswordModal: FC<IPasswordModal> = ({
  password,
  handleGeneratePassword,
}) => {
  const [copied, setCopied] = useState(false);
  const hasPasswordLength = Boolean(password.length);
  const [open, setOpen] = useState<boolean>(false);

  const getTitle = () => {
    return (
      <Title level={2} style={{ color: "#16DB65", marginTop: 0 }}>
        Password
      </Title>
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    message.success("Password copied successfully!");
  };

  useEffect(() => {
    setCopied(false);
    setOpen(hasPasswordLength);
  }, [hasPasswordLength, password]);

  return (
    <Modal
      title={getTitle()}
      open={open}
      closeIcon={false}
      footer={
        <Row
          gutter={12}
          justify="center"
          style={{ marginTop: "30px", marginBottom: "20px" }}
        >
          <Col lg={{ span: 6 }} xs={{ span: 12 }} sm={{ span: 12 }}>
            <Button size="large" block onClick={() => setOpen(false)}>
              <b>cancel</b>
            </Button>
          </Col>
          <Col lg={{ span: 6 }} xs={{ span: 12 }} sm={{ span: 12 }}>
            <Button
              type="primary"
              size="large"
              block
              onClick={handleGeneratePassword}
            >
              <b>Re-generate</b>
            </Button>
          </Col>
        </Row>
      }
      style={{ textAlign: "center", marginTop: "150px" }}
    >
      <Input
        value={password}
        readOnly
        addonAfter={
          copied ? (
            <CopyOutlined style={{ color: "#16DB65" }} />
          ) : (
            <CopyOutlined
              style={{ cursor: "pointer" }}
              onClick={copyToClipboard}
            />
          )
        }
      />
    </Modal>
  );
};

export default PasswordModal;
