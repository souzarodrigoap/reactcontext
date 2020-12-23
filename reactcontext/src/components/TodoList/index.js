import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};
  font-family: sans-serif;
  font-size: 18px;
`;

const TodoList = () => (
  <ul>
    <List>
      <li>Fazer café</li>
      <li>Entra na comunidade da Rocketseat</li>
      <li>Estudar ReactJS</li>
    </List>
  </ul>
)

export default TodoList;