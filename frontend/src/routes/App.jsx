import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import { Login } from '../components/Login';
export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )


}