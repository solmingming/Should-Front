import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

const PlantPage=()=>{
    return(

        <Wallpaper>

        <Header title="My Plant" />
       <Footer/>
        </Wallpaper>
    );
}

export default PlantPage;

const Wallpaper = styled.div`
backgroud: #000000;
`