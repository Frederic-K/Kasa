import aboutBanner from '../assets/picture/aboutBanner.svg'

function About() {
  return (
    <main>
      <div className="main__banner">
        <div className="main__banner--about">
          <img
            src={aboutBanner}
            alt="Bannière de la page à propos avec paysage de montagne"
          />
        </div>
      </div>
    </main>
  )
}

export default About
