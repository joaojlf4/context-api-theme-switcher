import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: ${props => props.theme.colors.primary};
  height: 60px;
  color: #FFF;
  font-weight: bold;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;