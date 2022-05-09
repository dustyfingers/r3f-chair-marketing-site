import React from 'react';
import { useGLTFLoader } from 'drei';

const Model = () => {
    const gltf = useGLTFLoader('/armchairYellow.gltf', true);
    return <primitive object={gltf.scene} dispose={null} />;
}

export default Model;