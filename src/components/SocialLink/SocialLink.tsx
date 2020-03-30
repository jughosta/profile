import React from 'react';

interface IProps {
  name: string;
  url: string;
  icon: string;
}

declare global {
  interface Window {
    ga?: (command: string, type: string, action: string, value: string) => void;
  }
}

const SocialLink = ({ name, url, icon }: IProps) => {
  const onClick = () => {
    window.ga?.('send', 'event', 'click', name);
  };

  return (
    <a
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <img src={icon} alt={name} className="h-5 w-5" />
    </a>
  );
};

export default SocialLink;
