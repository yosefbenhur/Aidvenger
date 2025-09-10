import React from "react";

export default function MissionCard({ title, location, status, progress=0, sponsorLogo, beforeAfterImgs=[], tags=[] }){
  const pct = Math.max(0, Math.min(100, progress));
  return (
    <article className="card" style={{padding:"16px"}}>
      <div className="label" aria-live="polite">
        <span className="badge" style={{marginRight:8}}>{status}</span>
        <span>{location}</span>
      </div>
      {beforeAfterImgs?.[0] && (
        <figure className="figure" style={{marginTop:12}}>
          <img src={beforeAfterImgs[0]} alt="" loading="lazy" />
        </figure>
      )}
      <h3 style={{marginTop:12}}>{title}</h3>
      <div className="progress" aria-label={`Funding progress ${pct}%`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} style={{marginTop:12}}>
        <span style={{transform:`scaleX(${pct/100})`}} />
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:12}}>
        <div>{tags.map(t => <span key={t} className="badge" style={{marginRight:6}}>{t}</span>)}</div>
        {sponsorLogo && <img src={sponsorLogo} alt="Sponsor logo" width="28" height="28" />}
      </div>
    </article>
  );
}
