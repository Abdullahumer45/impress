'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ResponseForm() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_zi2g93s', // Your service ID
        'template_c1aam4l', // Replace with your template ID from EmailJS
        {
          from_name: formData.name,
          message: formData.message,
          to_name: 'Abdullah Umer', // Replace with your name
        },
        'iLvlFF6ebi61bgErl' // Replace with your public key from EmailJS
      );
      setStatus('success');
      setFormData({ name: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Share your thoughts 💝</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center">Thank you for your response! 💖</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
} 