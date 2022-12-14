import { Route, Routes } from "react-router-dom"
import {Footer, Navigation, 
    Counter, TodoInput} from "../components"

const Fdd = () => {
    return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Navigation/>
                <Routes>
                    <Route path="/counter" element={<Counter/>}></Route>
                    <Route path="/todos/*" element={<TodoInput/>}></Route>
                </Routes>
                </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
        <td style={{ width: "100%", border: "1px solid black"}}></td>
        </tr>
        <tr style={{ width: "100%", height: "20%", border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>

             회사소개 | 인재채용 | 제휴제안 | 이용약관 | 개인정보처리방침 | 청소년보호정책 | 아카데미 정책고객센터ⓒ AI Academy Corp.
            </td>
        </tr>
        </tbody>
    </table>
    </>)
}
export default Fdd




