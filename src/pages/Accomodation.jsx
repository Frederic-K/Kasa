import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Loader from '../components/Loader/Loader'
import Error404 from '../pages/Error404'
import useFetch from '../utils/API/getData'
import Carousel from '../components/Carousel/Carousel'

function Accomodation() {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch('../data/logements.json')

  // console.log('data', data)

  if (error || !data) {
    return <Error404 />
  }

  if (isLoading) {
    return <Loader />
  }

  if (!error && !isLoading && data) {
    const accomodationData = data.find((el) => el.id === id)
    // const accomodationData = data.filter((el) => el.id === id)

    const {
      title,
      // pictures,
      description,
      host,
      rating,
      location,
      equipments,
      tags,
    } = accomodationData

    return (
      <div className="container">
        <main className="main__accomodation">
          <div className="main__accomodation--carousel">
            {/* Carousel {pictures} */}
            <Carousel data={accomodationData} />
          </div>
          {/* ou bien je passe directement accomodationData ??? */}
          <div className="main__accomodation--caption">
            Caption {(title, host, rating, location, tags)}
          </div>
          <div className="main__accomodation--dropdowns">
            <div className="main__accomodation--dropdown">
              Dropdown {description}
            </div>
            <div className="main__accomodation--dropdown">
              Dropdown {equipments}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Accomodation
