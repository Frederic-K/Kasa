import homeBanner from '../assets/picture/homeBanner.svg'
import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'
import Loader from '../components/Loader/Loader'
import Footer from '../components/Footer/Footer'
import useFetch from '../utils/API/getData'
import Gallery from '../components/Gallery/Gallery'

function Home() {
  // const { data, isLoading, error } = useFetch('../data/logements.json')
  const { data, isLoading, error } = useFetch('../data/logements.json')

  if (error) {
    return (
      <section className="main__gallery">
        <div className="main__gallery--errorMsg">
          Oups ! Une erreur s'est produite ...
        </div>
      </section>
    )
  }
  return (
    <div>
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
        <section className="main__gallery">
          {isLoading ? (
            <div className="loader-center">
              <Loader />
            </div>
          ) : (
            <div className="main__gallery--cards">
              <Gallery data={data} />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
