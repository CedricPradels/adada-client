import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button as Component } from '../components';

export default {
  title: 'Button',
  component: Component,
} as Meta;

export const Button: React.FunctionComponent = () => (
  <Component tag="button">Click here</Component>
);

export const Anchor: React.FunctionComponent = () => (
  <Component tag="anchor" href={'#'} target={'_blank'}>
    Click here
  </Component>
);
