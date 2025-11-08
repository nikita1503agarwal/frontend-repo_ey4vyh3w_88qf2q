import { useEffect } from 'react'

export default function SEO() {
  useEffect(() => {
    document.title = 'Satyam Singh | Robotics Developer & Educator'
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    metaDesc.setAttribute('content', 'Portfolio of Satyam Singh — Robotics Developer, Python Expert, IoT Innovator, and Educator. Projects, workshops, skills, and contact.')
    document.head.appendChild(metaDesc)

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'Satyam Singh, Robotics, Python, IoT, Educator, Raspberry Pi, Arduino, AI, Portfolio')
    document.head.appendChild(metaKeywords)
  }, [])
  return null
}
