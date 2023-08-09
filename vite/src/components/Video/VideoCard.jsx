import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const VideoCard = ({ peer, number }) => {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', (stream) => {
      console.log('stream: ', stream);
      ref.current.srcObject = stream;
    });
    peer.on('track', (track, stream) => {
    });
  }, [peer]);

  return (
    <Video
      autoPlay
      ref={ref}
    />
  );
};

const Video = styled.video``;

export default VideoCard;
