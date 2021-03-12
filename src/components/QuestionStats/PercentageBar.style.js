import styled from 'styled-components';


const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.inactive};
  height: 3px;
  margin: .75rem 0 2rem;
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  background: ${({theme}) => theme.colors.active};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: ${({ percentage }) => percentage};
`;

const Text = styled.div`
  display: block;
  font-size: ${({theme}) => theme.fontSize.small};
  position: absolute;
  text-align: right;
  top: 5px;
  width: ${({ percentage }) => percentage};
`;

export { Wrapper, Inner, Text };
