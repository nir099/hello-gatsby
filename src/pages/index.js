import React , { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component { 

  componentDidMount () {
    const script = document.createElement("script");
  
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    script.async = true;
  
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      })
    }
  
    document.body.appendChild(script);
  }

  render () { return (
  <Layout>
    <SEO title="Home" />
    <h1>Crash it</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
  }
}

export default IndexPage
