import React from 'react';
import styled from 'styled-components';


const StyleBanner = styled.div`
    background:url('../img/${props => props.img}');
    backgroundSize: cover;
`;


export default StyleBanner;