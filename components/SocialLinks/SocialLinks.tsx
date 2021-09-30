import React from 'react'

interface IProps {
  children: JSX.Element[]
}

const SocialLinks: React.FC<IProps> = ({ children }) => (
  <ul className="mt-8 flex flex-row items-center">
    {children.map((child, index) => (
      <li key={index} className="mx-4">
        {child}
      </li>
    ))}
  </ul>
)

export default SocialLinks
