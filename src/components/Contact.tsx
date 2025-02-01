"use client"

import type React from "react"
import { useState } from "react"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
    setIsModalOpen(true)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div id="contact" className="p-10 mt-10 w-full max-w-md mx-auto">
      <div className="relative bg-white p-6 rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
        <p className="text-center text-xl font-bold tracking-widest mb-6">CONTACT US</p>
        <input
          placeholder="Your name"
          className="w-full mb-4 p-2 border-b border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-300 ease-in-out"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Your e-mail"
          className="w-full mb-4 p-2 border-b border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-300 ease-in-out"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          className="w-full mb-4 p-2 border-b border-gray-300 focus:border-blue-900 focus:outline-none transition-colors duration-300 ease-in-out resize-none h-20"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="absolute right-0 bottom-0 transform translate-y-1/2 -translate-x-4 bg-blue-900 text-white px-6 py-3 rounded-full rounded-br-none text-xs font-bold tracking-widest hover:bg-blue-800 transition-colors duration-300 ease-in-out shadow-lg"
        >
          SUBMIT
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Message Sent!</h2>
            <p className="mb-4">Your message has been sent successfully.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
