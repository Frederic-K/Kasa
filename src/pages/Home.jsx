import homeBanner from '../assets/picture/homeBanner.svg'
// import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'

function Home() {
  return (
    <main>
      <div className="main__homeBanner">
        <img
          className="main__homeBanner--img"
          src={homeBanner}
          alt="Bannière de la page d'acceuil avec paysage de montagne"
        />
        <h1 className="main__homeBanner--homeTitle">
          Chez vous, partout et ailleurs
        </h1>
      </div>
    </main>
  )
}

export default Home
