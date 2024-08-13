import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "../Main";


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main/>}/>

                <Route path="*" element={<Navigate to="/main"/>} />
            </Routes>
        </BrowserRouter>
    );
}