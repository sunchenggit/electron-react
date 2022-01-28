import React from 'react';
import './style.less';
import Img from '../404.jpg';

interface IProps {
  text: string;
  styles?: React.CSSProperties;
}

function Test({ text, styles }: IProps) {
  return (
    <div style={styles}>
      <div styleName="dec">{text}</div>
      <div>这是 Electron + React </div>
      <div>
        <img src={Img} alt={text} />
      </div>
    </div>
  );
}

export default Test;
