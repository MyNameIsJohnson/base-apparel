import React from 'react'

export default function hero() {
  return (
    <picture className='hero'>
      <source media="(min-width:650px)" srcSet="./images/hero-desktop.jpg"/>
      <img src="./images/hero-mobile.jpg" alt="hero"/>
    </picture>
  )
}
