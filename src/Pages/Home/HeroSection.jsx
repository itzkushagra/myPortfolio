export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title" style={{ color: '#B6EADA' }}>Hey, </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color" style={{ color: '#B6EADA' }}>I'm <b>Kushagra Pandey</b></span>{" "}
          </h1>
          <p className="hero--section-description">
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
