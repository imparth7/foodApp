import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/foodApp' element={<Home />} />
                <Route path='/foodApp/cuisine/:type' element={<Cuisine />} />
                <Route path='/foodApp/searched/:search' element={<Searched />} />
                <Route path='/foodApp/recipe/:name' element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages