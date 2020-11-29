import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { TextInput as Component } from '../components';

export default {
  title: 'TextInput',
  component: Component,
} as Meta;

export const Email: React.FunctionComponent = () => (
  <Component type="email" initialValue={'email@textinput.com'} />
);

export const Number: React.FunctionComponent = () => (
  <Component type="number" initialValue={10} />
);

export const Password: React.FunctionComponent = () => (
  <Component type="password" initialValue={'mysecretkey'} />
);

export const Search: React.FunctionComponent = () => (
  <Component type="search" initialValue={'My search'} />
);

export const Tel: React.FunctionComponent = () => (
  <Component type="tel" initialValue={'00 00 00 00 00'} />
);

export const Text: React.FunctionComponent = () => (
  <Component type="text" initialValue={'A text input'} />
);

export const Url: React.FunctionComponent = () => (
  <Component type="url" initialValue={'www.awesomewebsite.com'} />
);
