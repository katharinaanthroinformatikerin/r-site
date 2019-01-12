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
          <Carousel autoplay={false} autoplayInterval={2000} transitionMode="fade" speed={4000} wrapAround={true} withoutControls={true}>
            <img className="carousel_img" src={water} alt=""/>
            <img className="carousel_img" src={tap} alt=""/>
          </Carousel>
        </div>
        <div id="contact_card_container">

        </div>
      </div>

      <div id="team_section_container">
        <h1 id="team_heading">Unser Team</h1>
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

    <div id="landing_section_container">
      <div id="carousel_container">
        <Carousel autoplayInterval={2000} transitionMode="fade" speed={4000} wrapAround={true} withoutControls={true}>
          <img className="carousel_img" src={water} alt=""/>
          <img className="carousel_img" src={tap} alt="" />
        </Carousel>
      </div>
      <div id="business_card_container">
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

  </Layout>
)

export default IndexPage

