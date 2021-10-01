import React from 'react'

interface IProps {
  name: string
  url: string
  icon: {
    src: string
  }
}

const SocialLink: React.FC<IProps> = ({ name, url, icon }) => {
  return (
    <a href={url} title={name} target="_blank" rel="noopener noreferrer">
      <img src={`.${icon.src}`} alt={name} className="h-5 w-5" />
    </a>
  )
}

export default SocialLink
