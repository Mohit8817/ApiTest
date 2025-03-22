import React, { useState, useEffect, useRef } from 'react';
import "./impress.css"

const Impress = () => {
    const [names, setNames] = useState([]);
    const animationFrameIdRef = useRef(null);

    const addName = () => {
        setNames((prevNames) => [...prevNames, 'helloo']);
        animationFrameIdRef.current = requestAnimationFrame(addName);
    };

    const startLoop = () => {
        if (!animationFrameIdRef.current) {
            animationFrameIdRef.current = requestAnimationFrame(addName);
        }
    };
    useEffect(() => {
        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

    // const [showLoader, setShowLoader] = useState(false);

    // const toggleLoader = () => {
    //     setShowLoader(!showLoader);
    // };

    return (
        <div>
            <div className="name-row text-center mt-5">
                <button onClick={startLoop} className='btn btn-info p-3 fw-bold'>For try</button>
                {names.map((name, index) => (
                    <div key={index} className="name-item">
                        <div className="row">
                            {[...Array(4)].map((_, colIndex) => (
                                <div className="col-lg-3" key={colIndex}>
                                    <span className='text-danger'><h1>{name}</h1></span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>




            {/* <div className='text-center m-auto mt-5'>
                {!showLoader && <button onClick={toggleLoader} className='btn btn-danger'>Touch</button>} 
                {showLoader && (
                    <div class="con">
                        <div class="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="shadow"></div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default Impress;
