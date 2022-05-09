import React from 'react';

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10,10,5]} intensity={1} />
            <directionalLight position={[0,10,0]} intensity={1.5} />
            <spotLight position={[1000, 0, 0]} intensity={1}/>
        </>
    )
}

export default Lights;