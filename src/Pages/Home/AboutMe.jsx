export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/About-Me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading" style={{color: '#BC6FF1'}}>About Me</h1>
          <p className="hero--section-description" style={{color:"white"}}>
          I'm a passionate full stack web developer with expertise in the MERN stack, and I also specialize in digital marketing, focusing on social media marketing and content creation. With a strong interest in sports and music, I enjoy finding balance between the technical and creative sides of my work. In my free time, you can find me playing sports or indulging in my love for singing.
          </p>
        </div>
      </div>
    </section>
  );
}
