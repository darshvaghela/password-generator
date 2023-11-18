import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import { Flex } from '../lib/Flex';

type WrapperProps = {
  height?: string;
  width?: string;
};

const Wrapper = styled(Flex)<WrapperProps>`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`;

type LoaderProps = {
  height?: string;
  width?: string;
  size?: 'small' | 'default' | 'large';
};

export const Loader: React.FC<LoaderProps> = ({ height, width, size }) => {
  return (
    <Wrapper
      $justifyContent="center"
      $alignItems="center"
      height={height}
      width={width}
    >
      <Spin size={size} />
    </Wrapper>
  );
};

Loader.defaultProps = {
  size: 'default',
};

export default Loader;
