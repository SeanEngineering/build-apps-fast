import { Card } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledCard = styled(Card).attrs({style: {
  width: '90vw',
  height: '90vh',
  marginTop: '30px',
background: 'rgba(0,0,0,0.1)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px'
}})``;