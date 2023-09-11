import styled from 'styled-components'

export const AddButton = styled.button`
    background:#D29226;
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    font-size: 15px;

    &:hover{
    opacity: 0.8;
    }
    



`
export const Container = styled.div`
background:#663332 ;
border-radius: 10px;
padding: 30px;
height:50vh;
width: 600px;
opacity: 0.8;



h1{
    color:#ffff;
    font-size: 40px;
   text-align: center;
  
}

input{
    height: 35px;
    outline: none;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    background: #fff;
    color:black ;
    width: 400px;
}

`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: black;
  background:#D29226;
  border-radius: 5px;
  margin-top: 15px;
  padding:  0 10px;
  width:400px;


  p{
    text-transform: capitalize;
    font-weight:bold;
    font-size: 20px;
  }


`

export const ButtonDelete = styled.button`
background: transparent;
border:none;
cursor: pointer;
font-size: 25px;




`