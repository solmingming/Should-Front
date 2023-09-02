import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

const AllMyRecordPage=()=>{
    return(
       <Wallpaper>

        <Header title="All my records" />
       <Footer/>
        </Wallpaper>
    );

}

export default AllMyRecordPage;

const Wallpaper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


