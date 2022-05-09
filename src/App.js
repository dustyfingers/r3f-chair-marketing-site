import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

//Components
import Header from "./components/header";
import HTMLContent from "./components/HTMLContent";
import Lights from "./components/lights";

import "./App.scss";

export default function App() {
    return (
        <>
            <Header />
            <Canvas
                colorManagement
                camera={{ position: [0, 0, 120], fov: 70 }}
            >

                <Lights />

                <Suspense fallback={null}>
                    <HTMLContent />
                </Suspense>

            </Canvas>
        </>
    );
}
