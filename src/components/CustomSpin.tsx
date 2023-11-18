import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FC } from "react";

interface ISpin {
  loading: boolean;
}
const CustomSpin: FC<ISpin> = ({ loading }) => {
  return (
    <>
      {loading && (
        <Spin
          size="default"
          style={{ position: "fixed", zIndex: 10000 }}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        />
      )}
    </>
  );
};

export default CustomSpin;
