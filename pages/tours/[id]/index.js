import { useRouter  } from "next/router";
import Image from "next/image";
import toursStyles from '../../../styles/tours.module.css'
import fallback from '../../../public/images/fallback.jpg'

const Tour = ({ tours }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const filteredTour = tours.filter(tour => tour.id === id);
  
  return (
    <ul className={toursStyles.list}>
      {filteredTour.map(tour => (
        <li key={tour.id} className={toursStyles.listItem}>
          <Image src={fallback} alt='Tour'/>
          <section className={toursStyles.tourFooter}>
          <div className={toursStyles.flex}>
            <h3>{tour.name}</h3>
            <p>$ {tour.price}</p>
          </div>
            <small>{tour.info}</small>
        </section>
        </li>
      ))}
    </ul>
  )

}

export const getServerSideProps = async () => {
  const url = `https://course-api.com/react-tours-project`;

  const res = await fetch(url)

  
  return {
    props: {
      tours: await res.json()
    }
  }
}

export default Tour;