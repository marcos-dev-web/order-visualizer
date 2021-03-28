import React, { memo } from "react";
import { nanoid } from 'nanoid';

import "./styles.css";

function Rect({style, widthRect}) {
  return (
    <div
      className="rect"
      style={style}>
      {widthRect >= 25 ? <p>{style.height.replace('px','')}</p> : null}
    </div>
  )
}

function Visualizer({array, widthRect}) {
  return (
    <section className="container">
      {array.map((block) => {
        const style = {
          width: `${widthRect}px`,
          height: `${block.height}px`,
        };

        return (
          <Rect key={nanoid()} style={style} widthRect={widthRect}/>
        );
      })}
    </section>
  );
}

export default memo(Visualizer);
