import styled from 'styled-components';

export const StyleCartFooter = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 0 0 4px 4px ; 
  padding: 15px 15px;

  div {
    width: 200px;
    display: flex;
    align-items: center;
    background-color : #fff;
  }
  p {
    background-color : #fff;
    color: #999;
    padding-right: 4px;
    font-style: bolder;
    
  }
  h2 {
    background-color : #fff;
  }


  button {
    border: none;
    background-color: #c62c4a;
    padding: 10px 20px;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    
    :enabled {
      &:hover {
      transform: scale(1.05);
      }
      
      &:active {
        transform: scale(1);
      }
    }  

    :disabled {
     background-color: #999;
      cursor: not-allowed;
    }


  }

`;