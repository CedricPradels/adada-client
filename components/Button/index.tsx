import React, { HTMLAttributes, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonTypeProps = {
  tag: 'button';
} & Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'>;

type AnchorTypeProps = {
  tag: 'anchor';
} & Pick<HTMLAttributes<HTMLAnchorElement>, 'onClick'> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'>;

export type ButtonProps = ButtonTypeProps | AnchorTypeProps;

export const testId = {
  container: 'container',
};

const ButtonTag = styled.button.attrs(() => ({
  'data-testid': testId.container,
}))``;
const AnchorTag = styled.a.attrs(() => ({ 'data-testid': testId.container }))``;

export const Button: React.FC<ButtonProps> = (props) => {
  if (props.tag === 'anchor') {
    const { tag, ...anchorProps } = props;
    return <AnchorTag {...anchorProps} />;
  }

  if (props.tag === 'button') {
    const { tag, ...buttonProps } = props;
    return <ButtonTag {...buttonProps} />;
  }
  return null;
};
