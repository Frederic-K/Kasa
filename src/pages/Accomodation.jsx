import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Loader from '../components/Loader/Loader'
import Error404 from '../pages/Error404'
import useFetch from '../utils/API/getData'

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
    const accommodation = data.find((el) => el.id === id)

    const {
      title,
      pictures,
      description,
      host,
      rating,
      location,
      equipments,
      tags,
    } = accommodation

    return (
      <div>
        <main>
          <div>Slider {pictures}</div>
          <div>Caption {(title, host, rating, location, tags)}</div>
          <div>Dropdown {description}</div>
          <div>Dropdown {equipments}</div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Accomodation
