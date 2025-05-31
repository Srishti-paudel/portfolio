
 'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) tempErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid'
    if (!formData.message.trim()) tempErrors.message = 'Message is required'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return

    // Here you can add your backend API call later

    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-purple-700 mb-6">Contact Me</h1>
        <p className="text-gray-700 mb-12">
          Got an idea or opportunity? I'd love to connect. Fill out the form below or email me directly.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 text-left space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-300 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-10 text-lg text-green-600 font-semibold">
            ✅ Thank you! Your message has been received. I will get back to you soon.
          </div>
        )}
      </div>
    </main>
  )
}
