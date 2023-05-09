import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Loader from '../components/Loader/Loader'
import Error404 from '../pages/Error404'
import useFetch from '../utils/API/getData'
import Carousel from '../components/Carousel/Carousel'
import Dropdown from '../components/Dropdown/Dropdown'

function Accomodation() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch('../data/logements.json')

  // console.log('data', data)

  if (error || !data) {
    return <Error404 />
  }

  if (isLoading) {
    return (
      <div className="loader-center">
        <Loader />
      </div>
    )
  }

  if (!error && !isLoading && data) {
    const accomodationData = data.find((el) => el.id === id)

    console.log('description', accomodationData.description)

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
                content={`${accomodationData.description}`}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Accomodation
