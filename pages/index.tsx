import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  width: 100px;
  height: 10px;
  color: red;
`;

export default function Home(props: { test?: any }) {
  return (
    <div data-testid="test">
      <Test>Test</Test>
    </div>
  );
}
