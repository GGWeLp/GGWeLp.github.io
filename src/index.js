import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import Register from "./Register";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { userReducer } from "./store/reducer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const store = createStore(userReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route  exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// <BrowserRouter>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage}/>
//           <Route exact path="/about" component={AboutPage}/>
//           <Route exact path="/contact" component={ContactPage} />
//           <Route exact path="/company" component={CompanyPage} />
//           <Route exact path="/person" component={PersonListPage} />
//           <Route path="/*" component={ErrorPage}/>
//         </Switch>
//         <Footer/>
//       </BrowserRouter>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
