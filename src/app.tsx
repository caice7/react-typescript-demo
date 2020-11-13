
import React from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";

declare global {
  interface Window { SYSTEM_CONFIGS: any, user: any }
}

export default function APP() {
  return <div>test</div>
}

function getPic(pic: string){
  return { background: `url(${process.env.PUBLIC_URL}/images/${pic}) 0% 0% / 100% 100%`};
}
