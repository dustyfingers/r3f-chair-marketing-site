import React, { useEffect, useRef } from 'react';
import { Html } from 'drei';
import { useFrame } from 'react-three-fiber';
import { useInView } from "react-intersection-observer";

import { Section } from './section';
import Model from './model';


const HTMLContent = ({ bgColor, children, modelPath, yPos, domContent }) => {

    const ref = useRef();
    const [refItem, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        inView && (document.body.style.background = bgColor)
    })

    // rotate mesh position every frame
    useFrame(() => (ref.current.rotation.y += 0.01))

    return (
        <Section factor={1.5} offset={1}>
            <group position={[0, yPos, 0]}>
                <mesh ref={ref} position={[0,-45, 0]}>
                    <Model modelPath={modelPath} />
                </mesh>
                <Html portal={domContent} fullscreen>
                    <div className="container" ref={refItem}>
                        {children}
                    </div>
                </Html>
            </group>
        </Section>
    );
}

export default HTMLContent;