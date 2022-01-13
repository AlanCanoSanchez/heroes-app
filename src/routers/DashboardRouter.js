import { Routes, Route } from "react-router-dom";

import React from 'react'

import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { DCScreen } from '../components/DC/DCScreen';
import { Navbar } from "../components/ui/NavBar";
import { HeroScreen } from "../components/Hero/HeroScreen";

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>

            <div className="container">

                <Routes>

                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen/>} />

                </Routes>

                </div>

              
        </>
    )
}
