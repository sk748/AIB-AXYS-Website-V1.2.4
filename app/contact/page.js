'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GlassCard from '@/components/GlassCard';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    hasCDSC: '',
    cdscNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const subjectOptions = [
    { value: 'account-opening', label: 'Account Opening' },
    { value: 'kpc-ipo', label: 'KPC IPO Application' },
    { value: 'leverage', label: 'Apply for Leverage' },
    { value: 'general', label: 'General Inquiries' },
  ];

  const needsCDSC = formData.subject === 'kpc-ipo' || formData.subject === 'leverage';
  const isAccountOpening = formData.subject === 'account-opening';

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (needsCDSC && !formData.hasCDSC) {
      newErrors.hasCDSC = 'Please select an option';
    }

    if (needsCDSC && formData.hasCDSC === 'yes' && !formData.cdscNumber.trim()) {
      newErrors.cdscNumber = 'CDSC number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          hasCDSC: '',
          cdscNumber: '',
        });
        setErrors({});
      } else {
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-stagger-1">
            <GlassCard hover3d className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office Address</h3>
                  <p className="text-sm text-muted-foreground">
                    5th floor, The Promenade
                    <br />
                    General Mathenge Road
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover3d className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+254 711 047000</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM EAT</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover3d className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@aib-axysafrica.com</p>
                  <p className="text-sm text-muted-foreground">www.aib-axysafrica.com</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-stagger-2">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {successMessage && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-600 dark:text-green-400">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="+254 ..."
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Account Opening Message */}
                {isAccountOpening && (
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <p className="text-sm mb-4">
                      To open an account, please download our DigiTrader app for instant account creation.
                    </p>
                    <button
                      type="button"
                      onClick={() => router.push('/platforms')}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                    >
                      Download DigiTrader App
                    </button>
                  </div>
                )}

                {/* CDSC Number Section */}
                {needsCDSC && (
                  <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Do you have a CDSC number? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hasCDSC"
                            value="yes"
                            checked={formData.hasCDSC === 'yes'}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary focus:ring-primary"
                          />
                          <span className="text-sm">Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hasCDSC"
                            value="no"
                            checked={formData.hasCDSC === 'no'}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary focus:ring-primary"
                          />
                          <span className="text-sm">No</span>
                        </label>
                      </div>
                      {errors.hasCDSC && <p className="text-red-500 text-sm mt-1">{errors.hasCDSC}</p>}
                    </div>

                    {formData.hasCDSC === 'yes' && (
                      <div>
                        <label htmlFor="cdscNumber" className="block text-sm font-medium mb-2">
                          CDSC Number *
                        </label>
                        <input
                          type="text"
                          id="cdscNumber"
                          name="cdscNumber"
                          value={formData.cdscNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          placeholder="Enter your CDSC number"
                        />
                        {errors.cdscNumber && (
                          <p className="text-red-500 text-sm mt-1">{errors.cdscNumber}</p>
                        )}
                      </div>
                    )}

                    {formData.hasCDSC === 'no' && (
                      <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                          Please create an account first. Download our DigiTrader app or visit our office to open a CDSC account before applying.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
