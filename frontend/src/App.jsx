import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup  from "./routes/Signup.jsx";
import Signin from "./routes/Signin.jsx";
 import Dashbord from "./routes/Dashboard.jsx";
  import SendMoney from "./routes/SendMoney.jsx"

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
