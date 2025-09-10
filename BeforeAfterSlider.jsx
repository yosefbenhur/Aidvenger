import React, { useRef, useState, useEffect } from "react";

export default function BeforeAfterSlider({ before, after, altBefore="Before", altAfter="After" }){
  const wrap = useRef(null);
  const [pos, setPos] = useState(50);
  useEffect(()=>{
    const onMove = (e)=>{
      if(!wrap.current) return;
      const rect = wrap.current.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      setPos(Math.max(0, Math.min(100, (x/rect.width)*100)));
    };
    const el = wrap.current;
    const onDown = (e)=>{
      e.preventDefault();
      document.addEventListener("mousemove", onMove);
      document.addEventListener("touchmove", onMove, {passive:false});
      const up = ()=>{
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("mouseup", up);
        document.removeEventListener("touchend", up);
      };
      document.addEventListener("mouseup", up);
      document.addEventListener("touchend", up);
    };
    el?.addEventListener("mousedown", onDown);
    el?.addEventListener("touchstart", onDown, {passive:false});
    return ()=>{
      el?.removeEventListener("mousedown", onDown);
      el?.removeEventListener("touchstart", onDown);
    };
  }, []);
  return (
    <div ref={wrap} className="figure" role="group" aria-roledescription="before and after slider" aria-label="Compare images" style={{position:"relative"}}>
      <img src={before} alt={altBefore} style={{display:"block"}}/>
      <img src={after} alt={altAfter} style={{position:"absolute", inset:0, width:"100%", clipPath:`inset(0 0 0 ${pos}%)`}}/>
      <div aria-hidden="true" style={{position:"absolute", top:0, bottom:0, left:`calc(${pos}% - 1px)`, width:2, background:"var(--hero-yellow)"}}/>
      <button aria-label="Slider handle" className="badge" style={{position:"absolute", top:"50%", left:`${pos}%`, transform:"translate(-50%, -50%)", cursor:"ew-resize", background:"var(--hero-yellow)", color:"var(--jet-black)"}}>
        ↔
      </button>
    </div>
  );
}
