import aboutBanner from '../assets/picture/aboutBanner.svg'

function About() {
  return (
    <main>
      <div className="main__aboutBanner">
        <img
          className="main__aboutBanner--img"
          src={aboutBanner}
          alt="Bannière de la page à propos avec paysage de montagne"
        />
      </div>
    </main>
  )
}

export default About
