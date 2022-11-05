import Content from "./Content";
import Sidebar from "./sidebar/Sidebar";
import Logo from "./assets/logo.png";

const menuItems = [
  { icon: <i class="bx bx-tachometer" />, solidIcon: <i class="bx bxs-tachometer" />, title: "Dashboard" },
  { icon: <i class="bx bx-folder" />, solidIcon: <i class="bx bxs-folder" />, title: "Projects" },
  { icon: <i class="bx bx-bar-chart-square" />, solidIcon: <i class="bx bxs-bar-chart-square" />, title: "Analitics" },
  {
    icon: <i class="bx bx-message-square-detail" />,
    solidIcon: <i class="bx bxs-message-square-detail" />,
    title: "Messages",
  },
];

const shortcutItems = [
  { icon: <i class="bx bx-notepad" />, solidIcon: <i class="bx bxs-notepad" />, title: "Tasks" },
  { icon: <i class="bx bx-help-circle" />, solidIcon: <i class="bx bxs-help-circle" />, title: "Help" },
  { icon: <i class="bx bx-cog" />, solidIcon: <i class="bx bxs-cog" />, title: "Settings" },
];

function App() {
  return (
    <>
      <Sidebar logo={Logo} title={"Aqumex"} menuItems={menuItems} shortcutItems={shortcutItems} />
      <Content />
    </>
  );
}

export default App;
