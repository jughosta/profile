import React from 'react'
import iconCodepen from '@fortawesome/fontawesome-free/svgs/brands/codepen.svg'
import iconGithub from '@fortawesome/fontawesome-free/svgs/brands/github.svg'
import iconTwitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import iconLinkedIn from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg'
import iconBlog from '@fortawesome/fontawesome-free/svgs/solid/feather-alt.svg'

import ProfileImage from '../ProfileImage/ProfileImage'
import SocialLinks from '../SocialLinks/SocialLinks'
import SocialLink from '../SocialLink/SocialLink'

const Profile = () => (
  <section className="min-h-screen bg-white flex flex-col justify-center items-center">
    <ProfileImage />
    <h1 className="mt-8 font-bold text-xl">Julia Rechkunova</h1>
    <p className="mt-2 text-gray-700">Software Engineer</p>
    <SocialLinks>
      <SocialLink
        name="Github"
        url="https://github.com/jughosta"
        icon={iconGithub}
      />
      <SocialLink
        name="Codepen"
        url="https://codepen.io/jughosta"
        icon={iconCodepen}
      />
      <SocialLink
        name="Twitter"
        url="https://twitter.com/jughosta"
        icon={iconTwitter}
      />
      <SocialLink
        name="LinkedIn"
        url="https://de.linkedin.com/in/juliarechkunova/en"
        icon={iconLinkedIn}
      />
      <SocialLink name="Blog" url="https://blog.jughosta.com" icon={iconBlog} />
    </SocialLinks>
  </section>
)

export default Profile
