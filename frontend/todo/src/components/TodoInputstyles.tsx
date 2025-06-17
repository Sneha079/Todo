
import {styled} from 'styled-components';

export const MainContainer = styled.div`
display: flex;
gap:10px;

`;

export const Container = styled.div`
min-height:100vh;
display: flex;
flex-direction:column;
margin:60;
align-items:center;



`;
export const InputBox = styled.input`
padding: 8px 12px;
height:30px;
width:400px;
border-radius:5px;
`;

export const Button =styled.button`
padding: 8px 12px;
height:45px;
width:120px;
border-radius:5px;
background-color:blue;
color:white;
font-size:18px;

`;

interface TodoItemDataProps {
  completed?: boolean;
}

export const TodoItemData = styled.div<TodoItemDataProps>`
margin-Top:25px;
padding:10px;
border-radius: 5px;
font-size:18px;
background-color:grey;
color:white;

width: 100%;
max-width:600px;
word-wrap:break-word;
  white-space: pre-wrap;
word-break: break-all;
  line-height: 1.5;
cursor: pointer;


display: flex;                 
  justify-content: space-between; 
  align-items: center;


  
`;

export const DeleteButton= styled.button`
 background-color: red;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

`;


