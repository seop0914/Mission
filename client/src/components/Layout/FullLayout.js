import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LayoutFooter from "./Footer/Footer";
import LayoutHeader from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const FullLayout = () => {
    return (
        <>
            <LayoutHeader />
            <MainStyle>
                <LeftSide />
                <Outlet />
                <RightSide />
            </MainStyle>
            <LayoutFooter />
        </>
    );
};

const MainStyle = styled.div`
    width: 1280px;
    margin: 100px auto 0;
    display: flex;
`;

export default FullLayout;
