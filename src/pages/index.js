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
      <div id="landing_section_container" style={{position: `static`, top: `100px`, height:`450px`, marginTop: `100px`, padding: `0`, clear: `both`}}>
        <div id="carousel_container" style={{ float: `left`, width: `66%`, height: `100%`}}>
          <Carousel autoplay={true} autoplayInterval={2000} transitionMode="fade" speed={4000} wrapAround={true}>
            <img src={water} style={{height: `450px`}} />
            <img src={tap} style={{height: `450px`}} />
          </Carousel>
        </div>
        <div id="business_card_container" style={{ float: `right`, width: `34%`, height: `100%`}}>
          <p>
            <span id="business_card_title">JT Systemtech GmbH Pernicka</span><br/>
            2285 Leopoldsdorf/i. M.<br/>
            Gas - Wasser - Heizungsinstallationen<br/><br/>
            Ihr Installateur für Niederösterreich und Wien<br/>
          </p>
        </div>
      </div>
      <div id="team_section" style={{clear: `both`}}>

      </div>
  </Layout>
)

/*
    position: `absolute`, height:`100%`, right: `34%`, width: `100%`
    position: `absolute`, height:`100%`, left: `66%`, width: `100%`
*/

export default IndexPage

