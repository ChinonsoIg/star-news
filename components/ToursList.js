import toursStyles from '../styles/Tours.module.css'
import ToursItem from './ToursItem';


const ToursList = ({ tours }) => {

  return (
    <ul className={toursStyles.list}>
      {tours.map(tour => (
        <li key={tour.id} className={toursStyles.listItem}>
          <ToursItem 
            tour={tour}
          />
        </li>
      ))}
    </ul>
	);
}


export default ToursList;
