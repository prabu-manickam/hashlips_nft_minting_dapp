import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  padding : 20px;
`;

export const TextTitle = styled.p`
  -1px 2px 1px #737272;
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  padding-right: 15px;
`;

export const TextTitleGlow = styled.p`
  text-shadow: 
        1px -1px 1px #fff, 
        1px 1px 0 #2e2e2e, 
        1px 2px 0 #2c2c2c, 
        0 3px 0 #2a2a2a, 
        0 4px 0 #282828, 
        0 5px 0 #262626, 
        0 6px 0 #242424
  font-size: 30px;
  font-weight: 500;
  line-height: 1.6;
   //background: -webkit-linear-gradient(rgba(63,94,251,1) 50%, rgba(252,70,107,1) 50%);
   //-webkit-background-clip: text;
   //-webkit-text-fill-color: transparent;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const ListTextDescription = styled.p`
  color: var(--primary-text);
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 1px ;
  background-color: var(--primary);
  padding: 20px;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
