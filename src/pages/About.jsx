import aboutBanner from '../assets/picture/aboutBanner.svg'
import Footer from '../components/Footer/Footer'

function About() {
  return (
    <div>
      <main>
        <div className="main__aboutBanner">
          <img
            className="main__aboutBanner--img"
            src={aboutBanner}
            alt="Bannière de la page à propos avec paysage de montagne"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
