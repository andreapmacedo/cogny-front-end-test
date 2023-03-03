import styled from 'styled-components';

export const StyleCard = styled.div`
  display: grid; 
  grid-template-columns: 15% 50% 15% 20%;
  grid-template-areas:
  "image description quantity subTotal";
  
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 30px;
  width: 100%;
`;

export const StyleImage = styled.div`
  align-items: center;
  display: flex;  
  grid-area: image;
  height: 100px;
  width: 100px;

  img {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
  }
`;

export const StyleDescription = styled.div`
  grid-area: description;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 700;
  }

`;

export const StyleQuantity = styled.div`
  grid-area: quantity;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #999;
  display: flex;
  font-weight: 500;
  height: 36px;
  justify-content: center;
  width: 48px;
`;

export const StyleSubTotal = styled.div`
  grid-area: subTotal;
  align-items: center;
  font-weight: 700;
  display: flex;
`;