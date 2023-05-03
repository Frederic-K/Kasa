import homeBanner from '../assets/picture/homeBanner.svg'
import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'

function Home() {
  return (
    <main>
      <div className="main__homeBanner">
        <img
          className="main__homeBanner--img"
          src={homeBanner}
          alt="Bannière de la page d'acceuil avec paysage de montagne"
        />
        <img
          className="main__homeBanner--imgMobile"
          src={homeBannerMobile}
          alt="Bannière de la page d'acceuil avec paysage de montagne"
        />
        <h1 className="main__homeBanner--title">
          Chez vous,<br className="main__homeBanner--title--breack"></br>{' '}
          partout et ailleurs
        </h1>
      </div>
    </main>
  )
}

export default Home
