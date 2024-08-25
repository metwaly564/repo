/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import VideoEditing from './Components/VideoEditing/VideoEditing'
import MotionGraphics from './Components/MotionGraphics/MotionGraphics'
import Home from "./Components/Home/Home";
import {BrowserRouter,createBrowserRouter,RouterProvider,} from "react-router-dom";
import GraphicDesign from './Components/GraphicDesign/GraphicDesign';

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "MotionGrphics", element: <MotionGraphics/> },
      { path: "VideoEditing", element: <VideoEditing/> },
      { path: "Graphic", element: <GraphicDesign/> },
      { path: "*", element: <Error /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
