import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

export function ThumbNail() {
    const fileRef = useRef(null);
    let videoRef = React.createRef();
    let imageRef = React.createRef();
    let canvasRef = React.createRef();
    let imageTestRef = React.createRef();

    const videoCreation = React.createElement('video', { ref: videoRef, style: { display: 'none' } });
    const imageCreation = React.createElement('img', { ref: imageRef, style: { maxWidth: '200px' } });
    const canvasCreation = React.createElement('canvas', { ref: canvasRef, style: { display: 'none' } });

    useEffect(() => {
        const thumbnail = function (event) {
            console.log('entry ');
            var file = event.target.files[0];
            var fileReader = new FileReader();
            if (file) {
                if (file.type.match('image')) {
                    fileReader.onload = function () {
                        var img = imageRef.current;
                        img.src = fileReader.result;
                        document.getElementsByTagName('div')[0].appendChild(img);
                    };
                    fileReader.readAsDataURL(file);
                } else {
                    fileReader.onload = function () {
                        var blob = new Blob([fileReader.result], { type: file.type });
                        var url = URL.createObjectURL(blob);
                        var video = videoRef.current;
                        console.log(videoCreation);
                        var timeupdate = function () {
                            console.log('1');

                            if (snapImage()) {
                                video.removeEventListener('timeupdate', timeupdate);
                                video.pause();
                            }
                        };
                        video.addEventListener('loadeddata', function () {
                            console.log('2');
                            if (snapImage()) {
                                video.removeEventListener('timeupdate', timeupdate);
                            }
                        },false);
                        var snapImage = function () {
                            var canvas = canvasRef.current;
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                            var image = canvas.toDataURL();
                            console.log('3',image);
                            var success = image.length > 100000;
                            if (success) {
                                var img = document.createElement('img');
                                img.src = image;
                                imageTestRef.current.appendChild(img);
                                URL.revokeObjectURL(url);
                            }
                            return success;
                        };
                        console.log('1')
                        video.preload = 'metadata';
                        video.src = url;
                        // Load video in Safari / IE11
                        video.muted = true;
                        video.playsInline = true;
                        video.play();
                    };
                    fileReader.readAsArrayBuffer(file);
                }
            }
        };
        console.log('4');
        fileRef.current.addEventListener('change', thumbnail);

        return () => fileRef.current.removeEventListener('change', thumbnail);
    }, [imageRef, videoRef, canvasRef]);

    return (
        <ThumbNailBlock>
            <Input ref={fileRef} type={'file'} accept={'.jpg,.jpeg.,.gif,.png,.mov,.mp4'} />
            {videoCreation}
            {imageCreation}
            {canvasCreation}
            <div ref={imageTestRef}></div>
        </ThumbNailBlock>
    );
};

const ThumbNailBlock = styled.div`
    & img {
        max-width: 200px;
        max-height: 200px;
    }
`;

const Input = styled.input``;

const ImageDisplayBlock = styled.div``;