import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Charu Sood</h1>
        <p className="subtitle">Full-Stack Developer specializing in React, Node.js, and AI Solutions.</p>
        <a className="cta" href="#projects">See my work</a>
      </div>
      <a className="hero-image-link" href="#about">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="profile"/>
        <span className="click-hint">⬇️ Click image to continue</span>
      </a>
    </section>
  )
}
