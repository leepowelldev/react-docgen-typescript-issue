import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Component: FC<Props> = ({ children }: Props) => <div>{children}</div>;

export { Component, Props };
