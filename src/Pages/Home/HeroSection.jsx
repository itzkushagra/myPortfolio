export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title" >Hey, </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">I'm <b>Kushagra Pandey</b></span>{" "}
          </h1>
          <p className="hero--section-description" style={{color:"white"}}>
            Welcome to my portfolio, <br/>here you can find my projects, passion and my experience.
          </p>
        </div>
      </div>
      <div className="hero--section--img ">
        <img src="./img/PassportSizePhoto.jpg" alt="Hero Section" style={{ borderRadius: "10%" }} />
      </div>
    </section>
  );
}
