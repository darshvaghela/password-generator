import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import { Flex } from "../lib/Flex";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.dashboard);
  };

  return (
    <Flex style={{ width: "100%" }} $justifyContent="center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, page not found :("
        extra={
          <Button type="primary" onClick={goToHome}>
            Back to Dashboard
          </Button>
        }
      />
    </Flex>
  );
};

export default PageNotFound;
