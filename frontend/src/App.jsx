import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup  from "./helper/Signup.jsx";
import Signin from "./helper/Signin.jsx";
 import Dashbord from "./helper/Dashboard.jsx";
  import SendMoney from "./helper/SendMoney.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashbord/>}/>
          <Route path="/sendmoney" element={<SendMoney/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
