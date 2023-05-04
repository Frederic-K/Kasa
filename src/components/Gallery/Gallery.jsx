//import Card from '../Card/Card'

// function Gallery({ data }) {
//   return (
//     <main>
//       <section className="gallery">
//         <ul className="gallery__thumb">
//           {data.map((accomodation) => (
//             <Card key={accomodation.id} accomodation={accomodation} />
//           ))}
//         </ul>
//       </section>
//     </main>
//   )
// }

// export default Gallery

// import { NavLink } from 'react-router-dom'

// function Gallery({ data }) {
//   return (
//     <ul className="gallery">
//       {data.map((card) => (
//         <NavLink to={'/accomodation/${card.id}'} key={card.id}>
//           <li className="gallery__card">
//             <img
//               className="gallery__card--cover"
//               src={card.cover}
//               alt={card.title}
//             />
//             <div className="gallery__card--title">
//               <h2>{card.title}</h2>
//             </div>
//           </li>
//         </NavLink>
//       ))}
//     </ul>
//   )
// }

// export default Gallery
