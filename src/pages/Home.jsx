import homeBanner from '../assets/picture/homeBanner.svg'
// import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'

function Home() {
  return (
    <main>
      <div className="main__banner">
        <div className="main__banner--home">
          <img
            src={homeBanner}
            alt="Bannière de la page d'acceuil avec paysage de montagne"
          />
          {/* <img
            src={homeBannerMobile}
            alt="Bannière de la page d'acceuil avec paysage de montagne"
          /> */}
          <h1 className="main__banner--homeTitle">
            Chez vous, partout et ailleurs
          </h1>
        </div>
      </div>
    </main>
  )
}

export default Home
