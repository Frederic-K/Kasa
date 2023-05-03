import homeBanner from '../assets/picture/homeBanner.svg'
import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'
import Loader from '../components/Loader/Loader'
import Gallery from '../components/Gallery/Gallery'
import useGetAccomodationData from '../utils/hooks/getDataAccomodation'

function Home() {
  const { isLoading, data, error } = useGetAccomodationData()

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
      <section className="main__gallery">
        {error && (
          <div className="main__gallery--errorMsg">
            Une erreur s'est produite !
          </div>
        )}
        {isLoading ? (
          <div className="loader-center">
            <Loader />
          </div>
        ) : (
          <Gallery accomodation={data} />
        )}
      </section>
    </main>
  )
}

export default Home
