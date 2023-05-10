import React from 'react'
import Footer from '../components/Footer/Footer'
import Error404 from '../pages/Error404'
import Carousel from '../components/Carousel/Carousel'
import Dropdown from '../components/Dropdown/Dropdown'
import Tags from '../components/Tags/Tags'
import Rating from '../components/Rating/Rating'

import { useLocation } from 'react-router-dom'

function Accomodation() {
  const location = useLocation()
  // const state = location.state
  const { state } = location
  const accomodationData = state.accomodationDatas

  if (state.accomodationDatas) {
    return (
      <div className="container">
        <main className="main__accomodation">
          <div className="main__accomodation--carousel">
            <Carousel data={accomodationData} />
          </div>
          <div className="main__accomodation--infos">
            <section className="accomodation__infos">
              <div className="accomodation__infos--détails">
                <h1>{accomodationData.title}</h1>
                <p>{accomodationData.location}</p>
              </div>
              <div className="accomodation__infos--tags">
                <Tags data={accomodationData.tags} />
              </div>
            </section>
            <section className="accomodation__infos--host">
              <div className="accomodation__infos--hostName">
                {accomodationData.host.name}
              </div>
              <div className="accomodation__infos--hostPix">
                <img
                  src={accomodationData.host.picture}
                  alt={accomodationData.host.name}
                />
              </div>
              <div className="accomodation__infos--rating">
                <Rating data={accomodationData.rating} />
              </div>
            </section>
          </div>
          <div className="main__accomodation--dropdowns">
            <div className="main__accomodation--dropdown">
              <Dropdown
                title="Description"
                content={`${accomodationData.description}`}
              />
            </div>
            <div className="main__accomodation--dropdown">
              <Dropdown
                title="Equipement"
                content={accomodationData.equipments}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  } else {
    return <Error404 />
  }
}

export default Accomodation
