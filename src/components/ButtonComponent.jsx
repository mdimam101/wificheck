import React from "react";
import styled from "styled-components";

const ButtonCompo = styled.button`
  background-color: ${(props) => props.variant === 'authFrom'? "#707070" : null};
  width: ${(props) =>  props.variant === 'authFrom'? '115px' : null};
  margin: ${(props) => props.variant === 'authFrom'? '10px 28px 0px 0px'  : null};
  font-size: ${(props) => props.variant === 'authFrom'? '20px'  : null};
`;
// 

const ButtonComponent = ({
  children,
  styleVariant,
  type,
  id,
  style,
  onClick,
}) => {
  return (
    <>
      <ButtonCompo
        type={type ? type : "button"}
        variant={styleVariant}
        onClick={onClick}
      >
        {children}
      </ButtonCompo>
    </>
  );
};

export default ButtonComponent;
