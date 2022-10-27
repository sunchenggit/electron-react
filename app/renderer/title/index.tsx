import React from 'react'

interface IProps {
  text: string;
  styles: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <div style={styles}>{text}</div>
  )
}
export default Title;