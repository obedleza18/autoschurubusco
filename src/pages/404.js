import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import TopHeader from "../components/TopHeader"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = ({ data }) => {
  const tagline = 'Buying or Selling,<br />just got easier!'
  const links = [
    { link: '/404', text: 'Buy' },
    { link: 'add-listing-pricing.html', text: 'Sell' },
    { link: 'joinus.html', text: 'Join' }
  ]
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <TopHeader tagline={tagline} links={links} logo={getImage(data.file)} />
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const data = graphql`
  query {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`