'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'

interface ContactFormProps {
  locale?: 'en' | 'es'
}

export function ContactForm({ locale = 'en' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const translations = {
    en: {
      title: 'Request a Callback',
      description: "Fill out the form below and we'll get back to you as soon as possible. For immediate assistance, please call our 24/7 emergency line.",
      name: 'Name',
      namePlaceholder: 'John Doe',
      phone: 'Phone',
      phonePlaceholder: '(503) 555-1234',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      zip: 'ZIP Code',
      zipPlaceholder: '97222',
      service: 'Service Needed',
      selectService: 'Select a service',
      services: {
        'crime-scene': 'Crime Scene Cleanup',
        'biohazard': 'Biohazard Remediation',
        'unattended-death': 'Unattended Death Cleanup',
        'water-damage': 'Water Damage Restoration',
        'fire-damage': 'Fire Damage Restoration',
        'hoarding': 'Hoarding Cleanup',
        'other': 'Other'
      },
      message: 'Message',
      messagePlaceholder: 'Please describe your situation...',
      consent: 'I consent to being contacted about my inquiry and understand this information will be handled according to the privacy policy.',
      submit: 'Submit Request',
      submitting: 'Submitting...',
      privacyNote: 'By submitting this form, you agree to our privacy policy. We will never share your information.',
      successMessage: 'Thank you for your message. We will contact you shortly.',
      errorMessage: 'An error occurred. Please try again or call us directly.',
      requiredField: 'This field is required'
    },
    es: {
      title: 'Solicitar una Llamada',
      description: 'Complete el formulario a continuación y nos comunicaremos con usted lo antes posible. Para asistencia inmediata, llame a nuestra línea de emergencia 24/7.',
      name: 'Nombre',
      namePlaceholder: 'Juan Pérez',
      phone: 'Teléfono',
      phonePlaceholder: '(503) 555-1234',
      email: 'Correo Electrónico',
      emailPlaceholder: 'juan@ejemplo.com',
      zip: 'Código Postal',
      zipPlaceholder: '97222',
      service: 'Servicio Necesario',
      selectService: 'Seleccione un servicio',
      services: {
        'crime-scene': 'Limpieza de Escena del Crimen',
        'biohazard': 'Remediación de Materiales Peligrosos',
        'unattended-death': 'Limpieza de Muerte sin Atención',
        'water-damage': 'Restauración de Daños por Agua',
        'fire-damage': 'Restauración de Daños por Fuego',
        'hoarding': 'Limpieza de Acumulación',
        'other': 'Otro'
      },
      message: 'Mensaje',
      messagePlaceholder: 'Por favor describa su situación...',
      consent: 'Doy mi consentimiento para ser contactado sobre mi consulta y entiendo que esta información se manejará de acuerdo con la política de privacidad.',
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      privacyNote: 'Al enviar este formulario, acepta nuestra política de privacidad. Nunca compartiremos su información.',
      successMessage: 'Gracias por su mensaje. Nos pondremos en contacto pronto.',
      errorMessage: 'Ocurrió un error. Por favor intente nuevamente o llámenos directamente.',
      requiredField: 'Este campo es requerido'
    }
  }

  const t = translations[locale]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      zip: formData.get('zip') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      consent: formData.get('consent') === 'on',
      locale
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus('error')
        if (result.errors) {
          setErrorMessage(result.errors.map((err: any) => err.message).join(', '))
        } else {
          setErrorMessage(result.message || t.errorMessage)
        }
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(t.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-white mb-6">
        {t.title}
      </h2>
      <p className="text-gray-300 mb-8">
        {t.description}
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-hazard/20 border border-hazard rounded-lg text-hazard">
          {t.successMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-fire/20 border border-fire rounded-lg text-fire">
          {errorMessage || t.errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label={t.name}
          name="name"
          required
          placeholder={t.namePlaceholder}
          disabled={isSubmitting}
        />

        <Input
          label={t.phone}
          name="phone"
          type="tel"
          required
          placeholder={t.phonePlaceholder}
          disabled={isSubmitting}
        />

        <Input
          label={t.email}
          name="email"
          type="email"
          required
          placeholder={t.emailPlaceholder}
          disabled={isSubmitting}
        />

        <Input
          label={t.zip}
          name="zip"
          required
          placeholder={t.zipPlaceholder}
          maxLength={5}
          pattern="\d{5}"
          disabled={isSubmitting}
        />

        <Select
          label={t.service}
          name="service"
          required
          disabled={isSubmitting}
          options={[
            { value: '', label: t.selectService },
            ...Object.entries(t.services).map(([value, label]) => ({
              value,
              label
            }))
          ]}
        />

        <Textarea
          label={t.message}
          name="message"
          required
          placeholder={t.messagePlaceholder}
          rows={5}
          disabled={isSubmitting}
        />

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="mt-1 mr-2"
            required
            disabled={isSubmitting}
          />
          <label htmlFor="consent" className="text-sm text-gray-400">
            {t.consent}
          </label>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.submitting : t.submit}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          {t.privacyNote}
        </p>
      </form>
    </div>
  )
}
