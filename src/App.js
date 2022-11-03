import Content from "./Content";
import Sidebar from "./sidebar/Sidebar";
import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      <Sidebar logo={Logo} title={"Aqumex"} />
      <Content />
    </>
  );
}

export default App;
