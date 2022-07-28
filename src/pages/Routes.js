import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index="/*" element={<Frontend />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index