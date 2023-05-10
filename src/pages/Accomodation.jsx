import React from 'react'
import Footer from '../components/Footer/Footer'
import Error404 from '../pages/Error404'
import Carousel from '../components/Carousel/Carousel'
import Dropdown from '../components/Dropdown/Dropdown'
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
          <div className="main__accomodation--caption">Caption</div>
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
