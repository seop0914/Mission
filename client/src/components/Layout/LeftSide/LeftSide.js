import React from "react";
import styled from "styled-components";

function LeftSide() {
    return <FullPage>사이드 컨텐츠</FullPage>;
}
const FullPage = styled.div`
    width: 220px;
    margin-right: 30px;
`;

export default LeftSide;
