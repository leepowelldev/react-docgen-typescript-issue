import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & { children?: ReactNode };

const Component = ({ children }: Props) => <div>{children}</div>;

export { Component, Props };
