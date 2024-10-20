
function App() {

  return (

    <>

  <section id="intro">
 
    <div className="intro-content">
      <div className="row">
        <div className="col-twelve">
          <h5>Hello.</h5>
          <h1>I'm Lowe David Tubat.</h1>
          <p className="intro-position">
            <span>Web Developer</span>
          </p>
          <a className="button stroke smoothscroll" href="#about" title="">
            More About Me
          </a>
        </div>
      </div>
    </div>{" "}
    {/* /intro-content */}
    <ul className="intro-social">
      <li>
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-behance" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-dribbble" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
      </li>
    </ul>{" "}
    {/* /intro-social */}
  </section>{" "}
  {/* /intro */}
  {/* about section
   ================================================== */}
  <section id="about">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>About Me</h5>
        <h1>Let me introduce myself.</h1>
        <div className="intro-info">
          <img src="/personal-portfolio/assets/images/profile-pic.jpg" alt="Profile Picture" />
          <p className="lead">
          I’m Lowe David Tubat, a skilled Web Developer with expertise in building responsive, high-performance websites. I specialize in front-end technologies and focus on creating seamless user experiences through clean, efficient code. Passionate about staying at the forefront of web development trends, I continually refine my skills to deliver innovative solutions.
          </p>
        </div>
      </div>
    </div>{" "}
    {/* /section-intro */}
    <div className="row about-content">
      <div className="col-six tab-full">
        <h3>Profile</h3>
        <p>
        I specialize in front-end development, focusing on building user-friendly and visually engaging web interfaces. My work involves translating design concepts into functional and interactive websites using core technologies like HTML for content structure, CSS for layout and styling, and JavaScript for dynamic behavior and interactivity.
        </p>
        <ul className="info-list">
          <li>
            <strong>Fullname:</strong>
            <span>Lowe David Tubat</span>
          </li>
          <li>
            <strong>Birth Date:</strong>
            <span>September 28, 1987</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>Web Developer</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>www.kardswebsite.com</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>louiecamarines21@gmail.com</span>
          </li>
        </ul>{" "}
        {/* /info-list */}
      </div>
      <div className="col-six tab-full">
        <h3>Skills</h3>
        <p>
        Experienced and versatile web developer known for delivering innovative solutions,
fostering collaboration, and embracing new technologies. With a creative mindset
and a diverse skill set including HTML, CSS, JavaScript, React, Node.js, and
MongoDB, I add substantial value to projects and teams. Eager to contribute to web
development roles that leverage my technical expertise for continuous growth and
excellence.
        </p>
        <ul className="skill-bars">
          <li>
            <div className="progress percent90">
              <span>90%</span>
            </div>
            <strong>HTML5</strong>
          </li>
          <li>
            <div className="progress percent85">
              <span>85%</span>
            </div>
            <strong>CSS3</strong>
          </li>
          <li>
            <div className="progress percent70">
              <span>70%</span>
            </div>
            <strong>TAILWIND</strong>
          </li>
          <li>
            <div className="progress percent95">
              <span>95%</span>
            </div>
            <strong>PHP</strong>
          </li>
          <li>
            <div className="progress percent75">
              <span>75%</span>
            </div>
            <strong>REACT JS</strong>
          </li>
        </ul>{" "}
        {/* /skill-bars */}
      </div>
    </div>
    <div className="row button-section">
      <div className="col-twelve">
        <a
          href="#contact"
          title="Hire Me"
          className="button stroke smoothscroll"
        >
          Hire Me
        </a>
        <a href="/personal-portfolio/assets/resume/lowedavidtubatcv.pdf" title="Download CV" className="button button-primary" download >
          Download CV
        </a>
      </div>
    </div>
  </section>{" "}
  {/* /process*/}
  {/* resume Section
   ================================================== */}

  {/* /features */}
  {/* Portfolio Section
   ================================================== */}
  <section id="portfolio">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Portfolio</h5>
        <h1>Check Out Some of My Works.</h1>
        <p className="lead">
        Explore how I blend creativity, technical expertise, and attention to detail to develop high-quality digital solutions. Each project is a reflection of my passion for building functional, visually appealing, and user-centric web applications. Whether it's creating sleek landing pages, developing complex e-commerce platforms, or designing interactive dashboards, I ensure that every solution is optimized for performance, accessibility, and seamless user experience.
        </p>
      </div>
    </div>{" "}
    {/* /section-intro*/}
    <div className="row portfolio-content">
      <div className="center col-twelve">
        {/* portfolio-wrapper */}
        <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
          <div className=" folio-item">
            <div className="item-wrap">
              <img src="/personal-portfolio/assets/images/portfolio/simmons.jpg" alt="Liberty" />
              <a href="https://simmonsactivity.netlify.app/" target="_blank" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">CLICK HERE TO CHECK OUT</h3>
                    <span className="folio-types">
                   
                      </span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className=" folio-item">
            <div className="item-wrap">
              <img src="/personal-portfolio/assets/images/portfolio/lowe-project.jpg" alt="Shutterbug" />
              <a href="#modal-02" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">CLICK HERE TO CHECK OUT</h3>
                    <span className="folio-types"></span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className=" folio-item">
            <div className="item-wrap">
              <img src="/personal-portfolio/assets/images/portfolio/control.jpg" alt="Clouds" />
              <a href="https://infographlowe.netlify.app/" target="_blank" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                    <h3 className="folio-title">CLICK HERE TO CHECK OUT</h3>
                    <span className="folio-types"></span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* /folio-item */}
          <div className=" folio-item">
            <div className="item-wrap">
              <img src="/personal-portfolio/assets/images/portfolio/daniels.jpg" alt="Beetle" />
              <a href="https://danielscof.netlify.app/" target="_blank" className="overlay">
                <div className="folio-item-table">
                  <div className="folio-item-cell">
                  <h3 className="folio-title">CLICK HERE TO CHECKOUT</h3>
                    <span className="folio-types"></span>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}

        </div>{" "}
        {/* /portfolio-wrapper */}
      </div>{" "}
      {/* /twelve */}
    </div>{" "}
    {/* /portfolio-content */}
  </section>{" "}
  {/* /portfolio */}
  {/* CTA Section
   ================================================== */}

  {/* services Section
   ================================================== */}

  {/* stats Section
   ================================================== */}

  {/* contact
   ================================================== */}
  <section id="contact">
    <div className="row section-intro">
      <div className="col-twelve">
        <h5>Contact</h5>
        <h1>I'd Love To Hear From You.</h1>
        <p className="lead">
        Whether you have a question, a project idea, or just want to connect, feel free to reach out. I’m always open to discussing new opportunities, collaborations, or freelance work. Let’s work together to turn your ideas into high-quality, functional digital solutions.
        </p>
      </div>
    </div>{" "}
    {/* /section-intro */}
    <div className="row contact-form">
      <div className="col-twelve">
        {/* form */}
        <form name="contactForm" id="contactForm" method="post" action="">
          <fieldset>
            <div className="form-field">
              <input
                name="contactName"
                type="text"
                id="contactName"
                placeholder="Name"
                defaultValue=""
                minLength={2}
                required=""
              />
            </div>
            <div className="form-field">
              <input
                name="contactEmail"
                type="email"
                id="contactEmail"
                placeholder="Email"
                defaultValue=""
                required=""
              />
            </div>
            <div className="form-field">
              <input
                name="contactSubject"
                type="text"
                id="contactSubject"
                placeholder="Subject"
                defaultValue=""
              />
            </div>
            <div className="form-field">
              <textarea
                name="contactMessage"
                id="contactMessage"
                placeholder="message"
                rows={10}
                cols={50}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-field">
              <button className="submitform">Submit</button>
              <div id="submit-loader">
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1" />
                  <div className="bounce2" />
                  <div className="bounce3" />
                </div>
              </div>
            </div>
          </fieldset>
        </form>{" "}
        {/* Form End */}
        {/* contact-warning */}
        <div id="message-warning"></div>
        {/* contact-success */}
        <div id="message-success">
          <i className="fa fa-check" />
          Your message was sent, thank you!
          <br />
        </div>
      </div>{" "}
      {/* /col-twelve */}
    </div>{" "}
    {/* /contact-form */}
    <div className="row contact-info">
      <div className="col-four tab-full">
        <div className="icon">
          <i className="icon-pin" />
        </div>
        <h5>Where to find me</h5>
        <p>
          Sampaloc, Apalit
          <br />
          Pampanga, Philippines
          <br />
          2016
        </p>
      </div>
      <div className="col-four tab-full collapse">
        <div className="icon">
          <i className="icon-mail" />
        </div>
        <h5>Email Me At</h5>
        <p>
          louiecamarines21@gmail.com
          <br />
        </p>
      </div>
      <div className="col-four tab-full">
        <div className="icon">
          <i className="icon-phone" />
        </div>
        <h5>Call Me At</h5>
        <p>
          Phone: (+63) 555 1212
          <br />
          Mobile: (+63) 555 0100
          <br />
          Fax: (+63) 555 0101
        </p>
      </div>
    </div>{" "}
    {/* /contact-info */}
  </section>{" "}
  {/* /contact */}
  {/* footer
   ================================================== */}
  <footer>
    <div className="row">
      <div className="col-six tab-full pull-right social">
        <ul className="footer-social">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-behance" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-six tab-full">
        <div className="copyright">
          <span>© Copyright Kards 2016.</span>
          <span>
            Design by <a href="http://www.styleshout.com/">styleshout</a>
          </span>
        </div>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <i className="fa fa-long-arrow-up" />
        </a>
      </div>
    </div>{" "}
    {/* /row */}
  </footer>
  <div id="preloader">
    <div id="loader" />
  </div>
</>


   )
  }

export default App
