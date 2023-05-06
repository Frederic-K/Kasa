import aboutBanner from '../assets/picture/aboutBanner.svg'
import aboutBannerMobile from '../assets/picture/aboutBannerMobile.svg'
import Dropdown from '../components/Dropdown/Dropdown'
import Footer from '../components/Footer/Footer'

function About() {
  return (
    <div className="container">
      <main className="main__about">
        <div className="main__aboutBanner">
          <img
            className="main__aboutBanner--img"
            src={aboutBanner}
            alt="Bannière de la page à propos avec paysage de montagne"
          />
          <img
            className="main__aboutBanner--imgMobile"
            src={aboutBannerMobile}
            alt="Bannière de la page à propos avec paysage de montagne"
          />
        </div>
        <section className="main__aboutInfos">
          <Dropdown
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />

          <Dropdown
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Dropdown
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />

          <Dropdown
            title="Responsabilité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
