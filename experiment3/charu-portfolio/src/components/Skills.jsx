import React from 'react'

export default function Skills(){
  const items = [
    {name:'JavaScript',pct:'90%'},
    {name:'React',pct:'88%'},
    {name:'Node.js',pct:'85%'},
    {name:'AI / ML',pct:'78%'}
  ]
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {items.map(i => (
          <div className="skill" key={i.name}>
            <div className="skill-name">{i.name}</div>
            <div className="skill-bar"><div className="skill-fill" style={{width:i.pct}}></div></div>
          </div>
        ))}
      </div>
    </section>
  )
}
