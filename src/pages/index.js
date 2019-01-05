import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Installateur Pernicka" keywords={[`Installateur`, `Wien`, `Niederösterreich`, `Pernicka`, `Gas`, `Wasser`, `Heizung`]} />
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem`, marginLeft: `auto`, marginRight: `auto`, justifyContent: `center` }}>
      <p>{' '}</p>
      <Image/>
    </div>
    <Link to="/page-2/" style={{display: `none`}}>Go to page 2</Link>
  </Layout>
)

export default IndexPage
