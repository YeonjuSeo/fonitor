import React, { Suspense } from "react";
//[TODO] react-router-dom 안깔고 @types/react-router-dom만 깔면 아래에서 일부가 로드 되지 않음
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Password from "./pages/Password";
import Notification from "./pages/Notification";
import Warning from "./pages/Warning";
import Analysis from "./pages/Analysis";
import Processing from "@pages/Processing";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pw" element={<Password />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/warning" element={<Warning />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
