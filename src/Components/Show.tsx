/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

export const Show: any = ({ children }: any) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  React.Children.toArray(children).forEach((child) => {
    const childElement = child as any;

    if (childElement.type === Show.When && childElement.props.isTrue) {
      when = childElement.props.children;
    } else if (childElement.type === Show.Else) {
      otherwise = childElement.props.children;
    }
  });

  return when !== null ? when : otherwise;
};

Show.When = ({ isTrue, children }: any) =>
  isTrue ? (children as ReactNode) : null;

Show.Else = ({ children }: any) => children as ReactNode;
