import React, { useEffect, useRef, useState } from 'react';

const WebcamComponent = () => {
    const [error, setError] = useState();
    const videoRef = useRef(null);
    const [isCameraOn, setCameraOn] = useState(false);
    let streamRef = useRef(null);
  
    const startWebcam = async () => {
        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: true,
            })
            .then((stream) => {
                streamRef.current = stream;
                videoRef.current.srcObject = streamRef.current;
                videoRef.current.onloadedmetadata = () => videoRef.current.play();
            })
            .catch((err) => {
                setError(err.name);
            });
    };

    const stopWebCam = () => {
        if(streamRef.current){
            streamRef.current.getTracks().forEach((track) => track.stop())
        }
    };

    useEffect(() => {
        setError(null);
        stopWebCam();
        if(isCameraOn) startWebcam();
    }, [isCameraOn])
  
    return (
      <div>
        <video ref={videoRef} playsInline muted autoPlay/>
        <div className='controls'>
            <button onClick={() => setCameraOn(!isCameraOn)}>
                {isCameraOn ? 'Выключить камеру' : 'Включить камеру'}
            </button>
        </div>
      </div>
    );
  };
  export default WebcamComponent;
  