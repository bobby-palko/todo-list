import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import {
  StyledCardHeaderProps,
  StyledCardProps,
  StyledButtonProps,
  StyledHeaderProps,
} from '../types';

const StyledCardBody = styled.div`
  padding: 0.5rem;
`;

const StyledCardHeader = styled.div<StyledCardHeaderProps>`
  background-color: rgba(0, 170, 170, 0.9);
  text-align: center;
  border-radius: 10px 10px 0 0;
  border-bottom: 5px solid rgb(0, 200, 200);
  color: ${(props) => props.inputColor || 'inherit'};
`;

const StyledFooter = styled.footer`
  position: relative;
  text-align: center;
  bottom: 0;
  color: rgba(0, 0, 0, 0.5);
`;

const StyledHeader = styled.header<StyledHeaderProps>`
  margin-top: 0;
  background-color: rgba(0, 170, 170, 0.7);
  height: 100px;
  text-align: center;
  font-size: 1.1rem;
  padding: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
`;

const StyledCard = styled.div<StyledCardProps>`
  background-color: #eee;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.3);
  flex: 1;
  max-width: 240px;
  min-width: 240px;
  min-height: 260px;
  max-height: 260px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 5fr 1fr;
  ${(props) =>
    props.isMouseOver &&
    css`
      &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
      }
    `}
`;

const StyledButton = styled(Button)<StyledButtonProps>`
  && {
    width: 25%;
    border-radius: 10px 0 10px 0;
    border: none;
    color: rgb(0, 0, 0);
    background-color: rgb(0, 200, 200);
    ${(props) =>
      props.pencil &&
      css`
        border-radius: 0 10px 0 10px;
      `}
    &:hover {
      background-color: rgb(230, 128, 10);
    }
  }
`;

const StyledInput = styled.input`
  display: block;
  background: inherit;
  font-family: inherit;
  font-size: 1rem;
  width: 80%;
  max-width: 80%;
  height: 30%;
  margin: 10px 0 0 10px;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
`;

const StyledTextArea = styled.textarea`
  display: block;
  background: inherit;
  margin: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  width: 80%;
  max-width: 80%;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
`;

const HRule = styled.hr`
  border-style: dotted none none;
  border-color: rgba(50, 50, 50, 0.5);
  border-width: 2px;
  width: 100%;
`;

const StyledFabButton = styled(Fab)`
  && {
    position: relative;
    border: none;
    color: rgb(0, 0, 0);
    background-color: rgb(230, 128, 10);
    left: 200px;
    top: -135px;
    &:hover {
      background-color: rgb(255, 128, 0);
    }
  }
`;

export {
  StyledCardBody,
  StyledCardHeader,
  StyledFooter,
  StyledHeader,
  StyledCard,
  StyledButton,
  StyledInput,
  StyledTextArea,
  HRule,
  StyledFabButton,
};
