import React from 'react';

interface IProps {
  name: string;
  url: string;
  icon: string;
}

const SocialLink = ({ name, url, icon }: IProps) => (
  <a href={url} title={name} target="_blank">
    <img src={icon} alt={name} className="h-5 w-5" />
  </a>
);

export default SocialLink;
