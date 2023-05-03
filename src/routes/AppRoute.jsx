import { Route, Routes,Navigate} from 'react-router-dom'
import {Home, Login, Register} from "../views/index.js";
const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/signIn" />} />
            <Route exact path='/signIn' element={<Login/>} />
            <Route exact path='/signUp' element={<Register/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route path='*' element={<>Path not found</>} />
        </Routes>
    )
}

export default AppRoute
