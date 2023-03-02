import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Namephoto from "./components/Namephoto";
import Footerhome from "./components/Footerhome";
import ContactPage from "./pages/ContactPage";
import PortofolioPage from "./pages/PortofolioPage";
import Sidebar from "./components/Slidebar";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <Sidebar />

      <Namephoto />
      <div className="row-span-5 ">
        <Route path="/aboutme">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/portofolio">
          <PortofolioPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </div>
      <Footerhome />
    </div>
  );
  // <h1 className="text-3xl font-bold underline">Radu's Portofolio</h1>;
}
export default App;
