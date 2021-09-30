import React from 'react'

interface IProps {
  name: string
  url: string
  icon: {
    src: string
  }
}

declare global {
  interface Window {
    ga?: (command: string, type: string, action: string, value: string) => void
  }
}

const SocialLink: React.FC<IProps> = ({ name, url, icon }) => {
  const onClick = () => {
    window.ga?.('send', 'event', 'click', name)
  }

  return (
    <a
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <img src={icon.src} alt={name} className="h-5 w-5" />
    </a>
  )
}

export default SocialLink
