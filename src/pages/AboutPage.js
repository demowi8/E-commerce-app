import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-center'>
    <img src={aboutImg} alt='nice desk' />
    <article>
      <div className='title'>
        <h2>Our Story</h2>
        <div className='underline'></div>
      </div>
      <p>This is a story all about how our little life got flipped and turned upside down. Too many times have furniture been discarded due to cheap materials. It can be hard finding furniture that'll actually last longer than your lease. Look no further than Comfy Sloth. We provide everything from desks to chairs to bourdaires and more. Spend your hard earned money on furniture with materials that will last a lifetime!</p>
    </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
