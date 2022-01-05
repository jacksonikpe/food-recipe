import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iusto qui quibusdam vel laboriosam laudantium numquam delectus
              quae veniam           
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.        
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis iusto dolorum ipsum soluta quas qui possimus
              consequuntur.        
            </p>
          </article>
          <article>
              <form className="form contact-form">
                  <div className="form-row">
                      <label htmlFor="name">Your name</label>
                      <input type="text" name="name" id="name" />
                  </div>
                  <div className="form-row">
                      <label htmlFor="email">Your email</label>
                      <input type="text" name="email" id="email" />
                  </div>
                  <div className="form-row">
                      <label htmlFor="message">message</label>
                      <textarea name="message" id="message"></textarea>
                  </div>
                  <button type="submit" className="btn block">
                      submit
                  </button>
              </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
