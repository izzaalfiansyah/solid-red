import { Route, Routes } from "@solidjs/router";
import About from "../pages/About";
import Home from "../pages/Home";

export default () => {
  return (
    <Routes>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Routes>
  );
}