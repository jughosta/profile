import React from 'react'
import Head from 'next/head'

import Profile from '../components/Profile/Profile'

const Index: React.FC = () => {
  return (
    <main className="text-gray-900 antialiased leading-tight">
      <Head>
        <title>Julia Rechkunova (@jughosta)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Julia Rechkunova (@jughosta)" />
        <meta name="twitter:description" content="Software Engineer" />
        <meta name="twitter:site" content="@jughosta" />
        <meta
          name="twitter:image"
          content="https://gravatar.com/avatar/052f072b073a409550a938d2ddaf8dc6?size=500.png"
        />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Profile />
    </main>
  )
}

export default Index
