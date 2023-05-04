import homeBanner from '../assets/picture/homeBanner.svg'
import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'
import Loader from '../components/Loader/Loader'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'

import useFetch from '../utils/hooks/getData'

import test from '../data/logements.json'

function Home() {
  console.log('testJSON', test)

  const { data, isLoading, error } = useFetch('../data/logements.json')

  // console.log('fetchData', data)
  // const { data, isLoading, error } = useFetch(test)

  const accomodationList = data?.accomodationList

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
          {/* {error && (
            <div className="main__gallery--errorMsg">
              Oups ! Une erreur s'est produite ...
            </div>
          )} */}
          {isLoading ? (
            <div className="loader-center">
              <Loader />
            </div>
          ) : (
            <div className="main__gallery--cards">
              {accomodationList.map((card) => (
                <Card
                  key={`card-${card.id}`}
                  id={`${card.id}`}
                  cover={card.cover}
                  title={card.title}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
