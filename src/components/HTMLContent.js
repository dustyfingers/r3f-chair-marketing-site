import React, { useRef } from 'react';
import { Html } from 'drei';
import { useFrame } from 'react-three-fiber';

import { Section } from './section';
import Model from './model';


const HTMLContent = ({ children, modelPath, yPos, domContent }) => {

    const ref = useRef();

    // rotate mesh position every frame
    useFrame(() => (ref.current.rotation.y += 0.01))

    return (
        <Section factor={1.5} offset={1}>
            <group position={[0, yPos, 0]}>
                <mesh ref={ref} position={[0,-45, 0]}>
                    <Model modelPath={modelPath} />
                </mesh>
                <Html portal={domContent} fullscreen>
                    {children}
                </Html>
            </group>
        </Section>
    );
}

export default HTMLContent;