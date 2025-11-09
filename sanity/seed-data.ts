/**
 * Seed data for Sanity CMS
 * Run with: npx sanity exec sanity/seed-data.ts --with-user-token
 */

export const services = {
  en: [
    {
      _type: 'service',
      title: 'Crime Scene Cleanup',
      slug: { _type: 'slug', current: 'crime-scene-cleanup' },
      summary: 'Professional crime scene cleanup and biohazard removal. Discreet, certified technicians available 24/7 throughout Portland Metro.',
      locale: 'en',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'When law enforcement releases a crime scene, the responsibility for cleanup falls to property owners. Our certified technicians safely remove all biohazardous materials, restore affected areas, and handle the process with complete discretion.',
            },
          ],
        },
      ],
    },
    {
      _type: 'service',
      title: 'Biohazard Remediation',
      slug: { _type: 'slug', current: 'biohazard-remediation' },
      summary: 'Complete biohazard cleanup and decontamination services. OSHA-certified technicians, proper disposal, available 24/7.',
      locale: 'en',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Biohazardous materials require specialized handling and disposal. We follow all OSHA and EPA regulations to safely clean, decontaminate, and restore properties affected by blood, bodily fluids, and other potentially infectious materials.',
            },
          ],
        },
      ],
    },
    {
      _type: 'service',
      title: 'Unattended Death Cleanup',
      slug: { _type: 'slug', current: 'unattended-death-cleanup' },
      summary: 'Compassionate, discreet cleanup after unattended death. Complete decontamination and odor removal. 24/7 response.',
      locale: 'en',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'After an unattended death, decomposition can cause significant biohazard contamination and persistent odors. Our trained technicians handle these sensitive situations with compassion and professionalism, restoring the property to a safe, habitable condition.',
            },
          ],
        },
      ],
    },
    {
      _type: 'service',
      title: 'Water Damage Restoration',
      slug: { _type: 'slug', current: 'water-damage-restoration' },
      summary: 'Emergency water extraction, drying, and restoration. Prevent mold growth. Work directly with insurance. 24/7 response.',
      locale: 'en',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Time is critical after water damage. We respond immediately to extract water, dry affected areas, and prevent secondary damage like mold growth. Our technicians use industrial equipment and work directly with your insurance company.',
            },
          ],
        },
      ],
    },
    {
      _type: 'service',
      title: 'Fire Damage Restoration',
      slug: { _type: 'slug', current: 'fire-damage-restoration' },
      summary: 'Fire and smoke damage cleanup. Soot removal, odor elimination, structural restoration. Insurance assistance.',
      locale: 'en',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Fire damage extends beyond what you can see. Smoke and soot can cause lasting damage to structures and belongings. We provide comprehensive fire damage restoration, including smoke odor removal, soot cleanup, and structural repairs.',
            },
          ],
        },
      ],
    },
    {
      _type: 'service',
      title: 'Hoarding Cleanup',
      slug: { _type: 'slug', current: 'hoarding-cleanup' },
      summary: 'Compassionate hoarding cleanup and decluttering. Respectful, non-judgmental service. Biohazard removal if needed.',
      locale: 'en',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Hoarding situations require understanding and sensitivity. We work with families and individuals to safely clean and restore hoarded properties, removing hazards while treating belongings with respect. Biohazard remediation available if needed.',
            },
          ],
        },
      ],
    },
  ],
  es: [
    {
      _type: 'service',
      title: 'Limpieza de Escenas del Crimen',
      slug: { _type: 'slug', current: 'limpieza-de-escenas-del-crimen' },
      summary: 'Limpieza profesional de escenas del crimen y eliminación de materiales peligrosos. Técnicos certificados y discretos disponibles 24/7 en todo el área de Portland.',
      locale: 'es',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Cuando las autoridades liberan una escena del crimen, la responsabilidad de la limpieza recae en los propietarios. Nuestros técnicos certificados eliminan de manera segura todos los materiales peligrosos, restauran las áreas afectadas y manejan el proceso con total discreción.',
            },
          ],
        },
      ],
    },
    {
      _type: 'service',
      title: 'Remediación de Materiales Peligrosos',
      slug: { _type: 'slug', current: 'remediacion-de-materiales-peligrosos' },
      summary: 'Servicios completos de limpieza y descontaminación de materiales peligrosos. Técnicos certificados por OSHA, eliminación adecuada, disponibles 24/7.',
      locale: 'es',
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Los materiales peligrosos requieren manejo y eliminación especializados. Seguimos todas las regulaciones de OSHA y EPA para limpiar, descontaminar y restaurar propiedades afectadas por sangre, fluidos corporales y otros materiales potencialmente infecciosos.',
            },
          ],
        },
      ],
    },
  ],
}

export const cities = [
  { _type: 'city', name: 'Milwaukie', slug: { _type: 'slug', current: 'milwaukie' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'Portland', slug: { _type: 'slug', current: 'portland' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'Beaverton', slug: { _type: 'slug', current: 'beaverton' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'Gresham', slug: { _type: 'slug', current: 'gresham' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'Tigard', slug: { _type: 'slug', current: 'tigard' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'Lake Oswego', slug: { _type: 'slug', current: 'lake-oswego' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'Oregon City', slug: { _type: 'slug', current: 'oregon-city' }, state: 'OR', locale: 'en' },
  { _type: 'city', name: 'West Linn', slug: { _type: 'slug', current: 'west-linn' }, state: 'OR', locale: 'en' },
]

export const faqs = {
  en: [
    {
      _type: 'faq',
      question: 'How quickly can you respond to an emergency?',
      answer: 'We typically arrive within 1-2 hours of your call anywhere in the Portland Metro area. Our crews are on call 24/7, including weekends and holidays.',
      locale: 'en',
      tags: ['general', 'emergency'],
    },
    {
      _type: 'faq',
      question: 'Is biohazard cleanup covered by insurance?',
      answer: 'Many homeowners and commercial insurance policies cover biohazard cleanup services. We work directly with insurance companies and can help you navigate the claims process. Contact us to discuss your specific situation.',
      locale: 'en',
      tags: ['general', 'insurance'],
    },
    {
      _type: 'faq',
      question: 'Are your technicians certified?',
      answer: 'Yes, all our technicians are OSHA-certified in bloodborne pathogen handling and biohazard remediation. We maintain all required licenses and follow strict safety protocols.',
      locale: 'en',
      tags: ['general', 'certification'],
    },
    {
      _type: 'faq',
      question: 'Do you provide discreet service?',
      answer: 'Absolutely. We understand the sensitive nature of our work. Our vehicles are unmarked, and our technicians wear plain uniforms. We respect your privacy and work with complete discretion.',
      locale: 'en',
      tags: ['general', 'discretion'],
    },
    {
      _type: 'faq',
      question: 'What should I do immediately after a crime scene or trauma?',
      answer: 'First, ensure your safety and call 911 if needed. Once law enforcement clears the scene, do not attempt to clean it yourself. Contact us immediately for professional biohazard remediation. Do not let anyone enter the affected area.',
      locale: 'en',
      tags: ['crime-scene', 'emergency'],
    },
    {
      _type: 'faq',
      question: 'How long does cleanup take?',
      answer: 'Cleanup time varies depending on the size and severity of contamination. Most residential jobs are completed within 4-8 hours. We provide an estimated timeframe after our initial assessment.',
      locale: 'en',
      tags: ['general', 'timeline'],
    },
    {
      _type: 'faq',
      question: 'Can I stay in my home during cleanup?',
      answer: 'For safety reasons, we recommend vacating the property during biohazard cleanup. The area must be properly contained and decontaminated before it\'s safe to occupy again.',
      locale: 'en',
      tags: ['general', 'safety'],
    },
    {
      _type: 'faq',
      question: 'How do you dispose of biohazardous materials?',
      answer: 'We follow all EPA and Oregon Department of Environmental Quality regulations for biohazard waste disposal. All contaminated materials are transported to licensed medical waste facilities for proper incineration.',
      locale: 'en',
      tags: ['general', 'disposal'],
    },
  ],
  es: [
    {
      _type: 'faq',
      question: '¿Qué tan rápido pueden responder a una emergencia?',
      answer: 'Generalmente llegamos dentro de 1-2 horas de su llamada en cualquier lugar del área metropolitana de Portland. Nuestros equipos están disponibles 24/7, incluidos fines de semana y días festivos.',
      locale: 'es',
      tags: ['general', 'emergency'],
    },
    {
      _type: 'faq',
      question: '¿El seguro cubre la limpieza de materiales peligrosos?',
      answer: 'Muchas pólizas de seguro de propietarios y comerciales cubren servicios de limpieza de materiales peligrosos. Trabajamos directamente con compañías de seguros y podemos ayudarlo a navegar el proceso de reclamos.',
      locale: 'es',
      tags: ['general', 'insurance'],
    },
  ],
}

export const testimonials = [
  {
    _type: 'testimonial',
    name: 'Sarah M.',
    quote: 'After a traumatic incident at our rental property, Olimpia\'s team responded immediately. They were professional, compassionate, and restored the property quickly. I can\'t thank them enough.',
    rating: 5,
    city: 'Portland, OR',
    locale: 'en',
  },
  {
    _type: 'testimonial',
    name: 'Robert K.',
    quote: 'Dealing with water damage is stressful, but this team made everything easy. They worked with our insurance company and had us back in our home within days.',
    rating: 5,
    city: 'Beaverton, OR',
    locale: 'en',
  },
  {
    _type: 'testimonial',
    name: 'Maria G.',
    quote: 'Servicio excepcional y discreto. El equipo fue muy profesional y compasivo durante un momento muy difícil. Altamente recomendado.',
    rating: 5,
    city: 'Milwaukie, OR',
    locale: 'es',
  },
]

export const settings = {
  _type: 'settings',
  _id: 'siteSettings',
  businessName: 'Olimpia\'s Biohazard & Restoration',
  phone: '(503) 555-1234',
  email: 'info@olimpiasbiohazard.com',
  address: 'Milwaukie, Oregon 97222',
  hours: '24/7 Emergency Response',
  localBusinessJsonLd: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmergencyService'],
    name: 'Olimpia\'s Biohazard & Restoration',
    telephone: '+15035551234',
    email: 'info@olimpiasbiohazard.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milwaukie',
      addressRegion: 'OR',
      postalCode: '97222',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }),
}
