import React from 'react'
/*import { Link } from 'gatsby'*/

import Layout from '../components/layout'
/*import Image from '../components/image'*/
import SEO from '../components/seo'
import tap from '../images/pan-xiaozhen-543981-unsplash.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Installateur Pernicka" keywords={[`Installateur`, `Wien`, `Niederösterreich`, `Pernicka`, `Gas`, `Wasser`, `Heizung`]} />
      <div style={{paddingTop: `20px`}}>
        <div style={{margin: `0`, padding: `0`, width: `66%`,  backgroundColor: `blue`, height:`50px`, float: `left`}}>
            <img src={tap} alt="Wasserhahn" style={{ width: `100%`}} />
        </div>
        <div style={{margin: `0`, paddingTop: `2em`, width: `34%`, float: `right`, fontSize: `1.5em`}}>
          <p style={{display: `flex`, justifyContent: `center`}}>Ihr Installateur</p>
          <p style={{display: `flex`, justifyContent: `center`}}>für</p>
          <p style={{display: `flex`, justifyContent: `center`}}>Niederösterreich und Wien</p>
            <p style={{display: `flex`, justifyContent: `center`}}>JT Systemtech GmbH</p>
          <p style={{display: `flex`, justifyContent: `center`}}>Pernicka</p>
            <p style={{display: `flex`, justifyContent: `center`}}>2285 Leopoldsdorf/i. M.</p>
          <p style={{display: `flex`, justifyContent: `center`}}>Gas - Wasser - Heizungsinstallationen</p>
        </div>
      </div>
  </Layout>
)

export default IndexPage
