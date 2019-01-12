import React from 'react'
/*import { Link } from 'gatsby'*/

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import '../styles/global.scss'
import './index.scss'
import Carousel from 'nuka-carousel';
import tap from '../images/pan-xiaozhen-543981-unsplash.jpg'
import water from '../images/clean-drop-of-water-liquid-40784.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Installateur Pernicka" keywords={[`Installateur`, `Wien`, `Niederösterreich`, `Pernicka`, `Gas`, `Wasser`, `Heizung`]} />
      <div id="landing_section_container" style={{position: `relative`, top: `100px`, height:`450px`, margin: `0`, padding: `0`}}>
        <div id="carousel_container" style={{position: `absolute`, height:`100%`, right: `34%`, width: `100%`}}>
          <Carousel autoplay={true} autoplayInterval={2000} heightMode="max" transitionMode="fade" speed={4000} wrapAround={true}>
            <img src={water} />
            <img src={tap} />
          </Carousel>
        </div>
        <div id="business_card_container" style={{position: `absolute`, height:`100%`, left: `66%`, width: `100%`}}>
          <p>
            <span id="business_card_title">JT Systemtech GmbH Pernicka</span><br/>
            2285 Leopoldsdorf/i. M.<br/>
            Gas - Wasser - Heizungsinstallationen<br/><br/>
            Ihr Installateur für Niederösterreich und Wien<br/>
          </p>
        </div>
      </div>
    <section id="team_section" style={{position: `relative`}}>

    </section>
  </Layout>
)

export default IndexPage
