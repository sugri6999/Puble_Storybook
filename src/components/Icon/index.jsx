import React from 'react';
import styled from 'styled-components';

const Icon = ({ icon, width, height, text }) => {
  return <IconComponents className="icon" $icon={icon} $width={width ? width : 18} $height={height ? height : 18}>

  </IconComponents>;
};

export default Icon;
const IconBaseStyle = styled.span`
  display: block;
  width: ${(props) => props.$width && `${props.$width}px`};
  height: ${(props) => props.$height && `${props.$height}px`};
`;

const IconComponents = styled(IconBaseStyle)`
  flex: 0 0 auto;
  ${(props) =>
    props.$icon &&
    `
        background:url('/assets/images/icons/${props.$icon}.svg') no-repeat center / cover;
  `}
`;

