import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus(null)

    if(!form.name || !form.email || !form.message){
      setStatus({ type: 'error', text: 'Please fill out all fields.' })
      return
    }

    setLoading(true)
    try{
      // Simulate network request
      await new Promise(r => setTimeout(r, 800))
      setStatus({ type: 'success', text: 'Message sent — thank you!' })
      setForm({ name: '', email: '', message: '' })
    }catch(err){
      setStatus({ type: 'error', text: 'Something went wrong. Please try again.' })
    }finally{
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <button type="submit" className="cta" disabled={loading}>{loading ? 'Sending...' : 'Send message'}</button>
          {status && (
            <div style={{color: status.type === 'error' ? '#ff7b7b' : '#7ef5b3'}}>{status.text}</div>
          )}
        </div>
      </form>
    </section>
  )
}
