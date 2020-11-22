import styled from 'styled-components';

const Test = styled.div`
  width: 100px;
  height: 10px;
  color: red;
`;

export default function Home() {
  return (
    <div data-testid="test">
      <Test>Test</Test>
    </div>
  );
}
