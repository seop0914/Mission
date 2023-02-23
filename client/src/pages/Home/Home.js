import React from "react";
import styled from "styled-components";

function Home() {
    return <FullPage>홈입니다.</FullPage>;
}
const FullPage = styled.div`
    position: relative;
    margin: 200px auto 0px;
    width: 1280px;
`;

export default Home;
