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
      <div id="start_section_container">
        <div id="carousel_container">
          <Carousel autoplay={true} autoplayInterval={2000} transitionMode="fade" speed={4000} wrapAround={true} withoutControls={true}>
            <img className="carousel_img" src={water} alt=""/>
            <img className="carousel_img" src={tap} alt=""/>
          </Carousel>
        </div>
        <div id="business_card_container">
          <div id="card_wrapper">
          <p>
            <span id="business_card_title">JT Systemtech GmbH Pernicka</span><br/>
            2285 Leopoldsdorf/i. M.<br/><br/>
            Gas - Wasser - Heizungsinstallationen<br/><br/>
            Öffnungszeiten: <br/>
            Mo-Fr: 8:00 - 17:00 <br/><br/>
            Wir sind in <br/>Niederösterreich und Wien <br/>für Sie da!
          </p>
          </div>
        </div>
      </div>

      <div id="leistungen_section_container">
        <h1 className="section_heading">Unsere Leistungen</h1>
        <div className="leistung_container">
          <h2>Gas</h2>
          <p>
            Kochen, Backen, Heizen - und alles mit Gas. Unsere modernen Koch- und Heizgeräte sind den Höchstanfoderungen
            an sparsamen Energieverbrauch und schadstoffarme Verbrennung gewachsen. <span style={{fontWeight: `bold`}}>Mehr lesen...</span>
          </p>
        </div>
        <div className="leistung_container">
          <h2>Wasser</h2>
        </div>
        <div className="leistung_container">
          <h2>Heizung</h2>
        </div>
        <div className="leistung_container">
          <h2>Beratung und Planung</h2>
          <p>
            Kochen, Backen, Heizen - und alles mit Gas. Unsere modernen Koch- und Heizgeräte sind den Höchstanfoderungen
            an sparsamen Energieverbrauch und schadstoffarme Verbrennung gewachsen. <span style={{fontWeight: `bold`}}>Mehr lesen...</span>
          </p>
        </div>
        <div className="leistung_container">
          <h2>Service</h2>
        </div>
        <div className="leistung_container">
          <h2>Abgasmessung <br/>und<br/> Kaminsanierung</h2>
        </div>
      </div>

      <div id="team_section_container">
        <h1 className="section_heading">Unser Team</h1>
        <div className="team_member_left">
          <img src={profilePic} alt="Franz Pernicka" className="profile_pic"/>
          <div className="profile_text">
            <h3>Franz Pernicka</h3>
            <p>Franz Pernicka ist einer unserer Projektleiter und Product Owner.</p>
          </div>
        </div>
        <div className="team_member_right">
          <img src={profilePic2} alt="Hannes Tomek" className="profile_pic"/>
          <div className="profile_text">
            <h3>Hannes Tomek</h3>
            <p>Hannes Tomek erreicht Orte, die für andere unmöglich erscheinen.</p>
          </div>
        </div>
      </div>

  </Layout>
)

export default IndexPage

