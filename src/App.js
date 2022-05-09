import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";

//Components
import Header from "./components/header";
import HTMLContent from "./components/HTMLContent";
import Lights from "./components/lights";

import "./App.scss";

// page state
import state from "./components/state";

export default function App() {
    const domContent = useRef();
    const scrollArea = useRef();

    const onScroll = evt => state.top.current = evt.target.scrollTop

    useEffect(() => void onScroll({ target: scrollArea.current }))

    return (
        <>
            <Header />
            <Canvas
                colorManagement
                camera={{ position: [0, 0, 120], fov: 70 }}
            >

                <Lights />

                <Suspense fallback={null}>
                    <HTMLContent bgColor={'#f15946'} domContent={domContent} modelPath={'/armchairYellow.gltf'} yPos={250}>

                        <h1 className="title">Yellow</h1>
                    </HTMLContent>
                    <HTMLContent bgColor={'#571ec1'} domContent={domContent} modelPath={'/armchairGreen.gltf'} yPos={0}>
                        <h1 className="title">Green</h1>
                    </HTMLContent>
                    <HTMLContent bgColor={'#636567'} domContent={domContent} modelPath={'/armchairGray.gltf'} yPos={-250}>
                        <h1 className="title">Gray</h1>
                    </HTMLContent>
                </Suspense>

            </Canvas>

            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
                <div style={{ position: 'sticky', top: 0 }} ref={domContent}></div>
                <div style={{ height: `${state.sections * 100}vh`}}></div>
            </div>
        </>
    );
}
