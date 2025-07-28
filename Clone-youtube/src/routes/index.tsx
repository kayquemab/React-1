import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (

        <>
            <Routes>
                <Route path="/pagina-inicial" element={<p>Página Incial</p>} />

                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>

            <Button>Teste</Button>
        </>

    )
}