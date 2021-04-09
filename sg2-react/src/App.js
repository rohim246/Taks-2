import Nav from "./Nav"
import AppRouter from "./AppRouter"
import { useHistory, useLocation } from "react-router-dom"

const App = () => {
  let history = useHistory();
  let location = useLocation();

  return (
    <>
      <Nav />
      <AppRouter />
      {!location.pathname === "/" && (
        <>
          <h2>Ini gak ikutan</h2>
          <button onClick={() => history.push("/Home")}>Login</button>
        </>
      )}
      {location.pathname === "/contact" && <h3>Contact Nih</h3>}
    </>
  )
}

export default App;