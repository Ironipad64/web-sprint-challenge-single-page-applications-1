import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

export default function Home() {
    return (
        <StyledHome>
            <h2>Wassup Home</h2>
        </StyledHome>
    );
};

const StyledHome = styled.div`
h2{
    
}
`