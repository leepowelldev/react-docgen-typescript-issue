import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Component: FC<Props> = ({ children }) => <div>{children}</div>;

export { Component, Props };
