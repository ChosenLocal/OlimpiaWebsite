"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/Button"

interface IntakeFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function IntakeFormModal({ isOpen, onClose }: IntakeFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
      }, 3000)
    } catch (err) {
      setError("Failed to submit form. Please call us directly at (971) 895-4262")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full my-8 max-h-[calc(100vh-4rem)]">
        <div className="sticky top-0 bg-coal text-white p-6 flex justify-between items-center border-b-4 border-gold z-10">
          <div>
            <h2 className="text-2xl font-heading font-bold">Same-Day Assessment Request</h2>
            <p className="text-gray-300 text-sm mt-1">We&apos;ll respond within 1 hour</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-gold transition-colors" aria-label="Close">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-coal mb-2">Request Received!</h3>
            <p className="text-gray-600">We&apos;ll contact you within the hour to schedule your assessment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-coal mb-1">
                  First Name <span className="text-fire">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-coal mb-1">
                  Last Name <span className="text-fire">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-coal mb-1">
                  Phone Number <span className="text-fire">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(503) 555-1234"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coal mb-1">
                  Email Address <span className="text-fire">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-coal mb-1">
                Property Address <span className="text-fire">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="123 Main St, Portland, OR 97201"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-coal mb-1">
                Type of Service Needed <span className="text-fire">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="">Select a service...</option>
                <option value="crime-scene">Crime Scene Cleanup</option>
                <option value="biohazard">Biohazard Remediation</option>
                <option value="unattended-death">Unattended Death Cleanup</option>
                <option value="hoarder">Hoarder Cleanup</option>
                <option value="water-damage">Water Damage Restoration</option>
                <option value="fire-damage">Fire Damage Restoration</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-coal mb-1">
                Urgency Level <span className="text-fire">*</span>
              </label>
              <select
                id="urgency"
                name="urgency"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="">Select urgency...</option>
                <option value="emergency">Emergency (within 2 hours)</option>
                <option value="same-day">Same Day (within 6 hours)</option>
                <option value="next-day">Next Day</option>
                <option value="planning">Planning Ahead</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-coal mb-1">
                Brief Description <span className="text-fire">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                placeholder="Please describe the situation and what services you need..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              />
            </div>

            <div>
              <label htmlFor="insuranceClaim" className="block text-sm font-medium text-coal mb-1">
                Will this be an insurance claim?
              </label>
              <select
                id="insuranceClaim"
                name="insuranceClaim"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="unsure">Not Sure</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-sm font-medium text-coal mb-1">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
              </select>
            </div>

            {error && <div className="bg-fire/10 border border-fire text-fire px-4 py-3 rounded-lg">{error}</div>}

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={onClose}
                className="flex-1 bg-transparent"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1 bg-gold text-coal hover:bg-gold/90 font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Assessment"}
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center pt-2">
              By submitting, you agree to be contacted about your request. Your information is kept confidential.
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}
