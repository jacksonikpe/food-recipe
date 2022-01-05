import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus dolorum quam est omnis totam soluta sint velit
              dignissimos ratione quas
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing. eligendi quia
              facere
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in a Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
