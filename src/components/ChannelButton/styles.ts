import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;

  cursor:pointer;
  padding: 5px 3px;
  background-color:transparent;

  transition: background-color .2s;


  > div {
    display:flex;
    align-items:center;
  }

  > div span {
    margin-left:5px;

    font-size:15px;
    color:var(--senary);
  }

  > div.containerActions {
    opacity:0;
    transition: opacity 0.3;
  }

  &.active, &:hover { 
    background-color:var(--quinary);

    > div span {
      color:var(--white);
    }

    > div.containerActions {
      opacity:1;
    }
  }
`

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height:20px;
  color:var(--symbol);
`
export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height:16px;

  color:var(--symbol);
  cursor:pointer;

  transition: color .2s;

  &:hover {
    color:var(--white);
  }
`
export const SettingsIcon = styled(Settings)`
  width: 16px;
  height:16px;

  color:var(--symbol);
  cursor:pointer;

  transition: color .2s;

  margin-left: 5px;

  &:hover {
    color:var(--white);
  }
` 