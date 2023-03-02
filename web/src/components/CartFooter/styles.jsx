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
    align-items: flex-end;
  }

  p {
    color: #999;
    padding-right: 4px;
    font-weight: 700;
  }

  
  button {
    background-color: #c62c4a;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    padding: 13px 20px;
    transition: all 0.3s ease-in-out;
    width: 162px;
    height: 42px;
    
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