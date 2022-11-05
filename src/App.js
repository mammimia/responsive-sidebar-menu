import Content from "./Content";
import Sidebar from "./sidebar/Sidebar";
import Logo from "./assets/logo.png";

const menuItems = [{ icon: <i class="bx bxs-tachometer" />, title: "Dashboard" }];

function App() {
  return (
    <>
      <Sidebar logo={Logo} title={"Aqumex"} menuItems={menuItems} />
      <Content />
    </>
  );
}

export default App;
