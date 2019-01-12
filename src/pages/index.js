import React from 'react'
/*import { Link } from 'gatsby'*/

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import '../styles/global.scss'
import './index.scss'
import Carousel from 'nuka-carousel';
import tap from '../images/pan-xiaozhen-543981-unsplash.jpg'
import water from '../images/clean-drop-of-water-liquid-40784.jpg'
import profilePic from '../images/profile_picture_male.jpg'
import profilePic2 from '../images/profile_picture_male_2.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Installateur Pernicka" keywords={[`Installateur`, `Wien`, `Niederösterreich`, `Pernicka`, `Gas`, `Wasser`, `Heizung`]} />
      <div id="landing_section_container" style={{position: `static`, top: `100px`, height:`450px`, marginTop: `100px`, padding: `1em 0 0 1em`, clear: `both`}}>
        <div id="carousel_container" style={{ float: `left`, width: `66%`, height: `100%`}}>
          <Carousel autoplay={true} autoplayInterval={2000} transitionMode="fade" speed={4000} wrapAround={true}>
            <img src={water} style={{height: `450px`, borderRadius: `10px`}} alt=""/>
            <img src={tap} style={{height: `450px`, borderRadius: `10px`}} alt="" />
          </Carousel>
        </div>
        <div id="business_card_container" style={{ float: `right`, width: `34%`, height: `100%`, textAlign: `center`, paddingTop: `2em`}}>
          <p>
            <span id="business_card_title">JT Systemtech GmbH Pernicka</span><br/>
            2285 Leopoldsdorf/i. M.<br/>
            Gas - Wasser - Heizungsinstallationen<br/><br/>
            Ihr Installateur für Niederösterreich und Wien<br/><br/>
            Öffnungszeiten: <br/>
            Mo-Fr: 8:00 - 17:00 <br/>
          </p>
        </div>
      </div>
      <div id="team_section" style={{clear: `both`, width: `100%`, height: `20em`,
        backgroundColor: ``, color: `#051620`}}>
        <h1 style={{textAlign: `center`, paddingTop: `1em`}}>Unser Team</h1>
        <div style={{backgroundColor: ``, float: `left`, height: `100%`, width: `50%`}}>
          <img src={profilePic} alt="Franz Pernicka" style={{display: `block`, marginLeft: `auto`, marginRight: `auto`, height: `50%`, borderRadius: `50%`}}/>
          <div style={{display: `block`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center`, paddingRight: `1em`}}>
            <h3>Franz Pernicka</h3>
            <p>Franz Pernicka ist einer unserer Projektleiter und Product Owner.</p>
          </div>
        </div>
        <div style={{backgroundColor: ``, float: `right`, height: `100%`, width: `50%`}}>
          <img src={profilePic2} alt="Hannes Tomek" style={{display: `block`, marginLeft: `auto`, marginRight: `auto`, height: `50%`, borderRadius: `50%`}}/>
          <div style={{display: `block`, marginLeft: `auto`, marginRight: `auto`, textAlign: `center`, paddingLeft: `1em`}}>
            <h3>Hannes Tomek</h3>
            <p>Hannes Tomek erreicht Orte, die für andere unmöglich erscheinen.</p>
          </div>
        </div>
      </div>
  </Layout>
)

/*
    position: `absolute`, height:`100%`, right: `34%`, width: `100%`
    position: `absolute`, height:`100%`, left: `66%`, width: `100%`
*/

export default IndexPage

