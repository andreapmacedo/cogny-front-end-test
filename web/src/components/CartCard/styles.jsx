import styled from 'styled-components';

export const StyleCard = styled.div`

  display: grid; 
  grid-template-columns: 10% 50% 10% 10%;
  grid-template-areas:
  "image description quantity subTotal";
  
  width: 96%;
  
  align-items: center;
  
  border-bottom: 1px solid #ccc;
  border: 1px solid #ccc;
  /* background-color: #f2f2f2; */
  padding: 15px 30px;
`;

export const StyleImage = styled.div`
grid-area: image;

overflow: hidden;
/* background-color: blue; */

img {
    width: 100px;    
    height: 100px;
    /* object-fit: cover; */
  }
`;

export const StyleDescription = styled.div`
  grid-area: description;
  /* background-color: green; */
  /* width: 400px; */
  display: flex;
  flex-direction: column;
`;

export const StyleQuantity = styled.div`
  grid-area: quantity;
  width: 48px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #aaa;
  font-style: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleSubTotal = styled.div`
  grid-area: subTotal;
  /* background-color: yellow; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;