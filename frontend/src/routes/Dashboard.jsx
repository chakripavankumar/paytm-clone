import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";

function Dashboard(){
  return(
    <div>
   <AppBar/>
   <Balance value={"10,000"}/>
    </div>
  )
}

export default Dashboard;

