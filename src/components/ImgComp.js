import React from 'react';
import '../styles/ImgComp.css';

function ImgComp({ src }) {
  return (
    <img src={src} alt="space x slide" className="img-comp" />
  );
}

export default ImgComp;
