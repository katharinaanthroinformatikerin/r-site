import React from 'react'
/*import { Link } from 'gatsby'*/

import Layout from '../components/Layout/layout'
/*import Image from '../components/image'* */
import SEO from '../components/seo'
import '../styles/global.scss'
import './index.scss'
import Carousel from 'nuka-carousel';
import tap from '../images/pan-xiaozhen-543981-unsplash.jpg'
import water from '../images/clean-drop-of-water-liquid-40784.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Installateur Pernicka" keywords={[`Installateur`, `Wien`, `Niederösterreich`, `Pernicka`, `Gas`, `Wasser`, `Heizung`]} />
      <div style={{paddingTop: `20px`}}>
        <div style={{padding: `0`, width: `66%`,  backgroundColor: `blue`, height:`450px`, float: `left`}}>
          <Carousel autoplay="true" heightMode="first">
            <img src={water} />
            <img src={tap} />
          </Carousel>
        </div>
        <div className="business_card">
          <p>
            <span className="business_card_title">JT Systemtech GmbH Pernicka</span><br/>
            2285 Leopoldsdorf/i. M.<br/>
            Gas - Wasser - Heizungsinstallationen<br/><br/>
            Ihr Installateur für Niederösterreich und Wien<br/>
          </p>
        </div>
      </div>
  </Layout>
)

export default IndexPage
