import { useRouter  } from "next/router";
import Image from "next/image";
import toursStyles from '../../../styles/tours.module.css'
import styles from '../../../styles/layout.module.css'
import fallback from '../../../public/images/fallback.jpg'

const Tour = ({ tours, paths }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(paths)
  console.log(tours)
  
  const filteredTour = tours.filter(tour => tour.id === id);
  
  return (
    <div className={styles.container}>
      {/* <p>&larr; back</p> */}
      <ul className={toursStyles.list}>
        {filteredTour.map(tour => (
          <li key={tour.id} className={toursStyles.listItem}>
            <Image src={fallback} alt='Tour' />
            <section className={toursStyles.tourFooter}>
            <div className={toursStyles.flex}>
              <h3>{tour.name}</h3>
              <p>$ {tour.price}</p>
            </div>
              <small className={toursStyles.justifyText}>
                {tour.info}
              </small>
          </section>
          </li>
        ))}
      </ul>
    </div>
  )

}


// 1ST METHOD
// fetch data at the time of request
// export const getServerSideProps = async () => {
//   const url = `https://course-api.com/react-tours-project`;

//   const res = await fetch(url)
//   const tours = await res.json()
  
//   return {
//     props: {
//       tours
//     }
//   }
// }

 

// 1ST METHOD: COMBINES getStaticProps and getStaticPaths
// You can use this method in a static website 
export const getStaticProps = async () => {
  const url = `https://course-api.com/react-tours-project`;

  const res = await fetch(url)
  const tours = await res.json()
  
  return {
    props: {
      tours
    }
  }
}

export const getStaticPaths = async () => {
  const url = `https://course-api.com/react-tours-project`;

  const res = await fetch(url)
  const tours = await res.json()

  const ids = tours.map((tour) => tour.id);
  
  const paths = ids.map((id) => ({
    params: {
      id: id.toString()
    }
  }))
  console.log('paths: ', paths)
  
  return {
    paths,
    fallback: false
  }
}


export default Tour;