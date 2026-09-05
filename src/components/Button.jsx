import React from 'react'
import { ArrowUpRightIcon, DownloadIcon } from './Icons'

/**
 * text: label
 * href: optional link target (defaults to smooth-scrolling to #work)
 * variant: "primary" (gradient) | "outline" (glass)
 * icon: "arrow" | "download" | null
 * download: pass true to trigger a file download instead of navigation
 */
const Button = ({ text, className, id, href, variant = 'primary', icon = 'arrow', download = false, target }) => {
  const isPrimary = variant === 'primary'

  const handleClick = (e) => {
    if (href) return // let the anchor behave normally (external link / download / in-page anchor)
    e.preventDefault()
    const target = document.getElementById(id || 'work')
    if (target) {
      const offset = window.innerHeight * 0.1
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <a
      href={href || `#${id || 'work'}`}
      onClick={handleClick}
      download={download}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      className={`${className ?? ''} cta-wrapper group`}
    >
      <div className={isPrimary ? 'cta-button group' : 'btn-outline group'}>
        <p className={isPrimary ? 'text' : 'uppercase tracking-wide'}>{text}</p>
        {icon === 'arrow' && (
          <div className={isPrimary ? 'arrow-wrapper' : 'size-8 rounded-full bg-white/10 flex-center transition-transform duration-300 group-hover:translate-x-1'}>
            <ArrowUpRightIcon className={isPrimary ? 'size-4 text-white' : 'size-4 text-white'} />
          </div>
        )}
        {icon === 'download' && (
          <div className={isPrimary ? 'arrow-wrapper' : 'size-8 rounded-full bg-white/10 flex-center transition-transform duration-300 group-hover:-translate-y-0.5'}>
            <DownloadIcon className="size-4 text-white" />
          </div>
        )}
      </div>
    </a>
  )
}

export default Button
