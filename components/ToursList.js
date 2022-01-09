import Link from 'next/link'
import Image from 'next/image';
import toursStyles from '../styles/tours.module.css'
import ToursItem from './ToursItem';

const ToursList = ({ tours }) => {
  return (
    <ul>
      {tours.map(tour => (
        <li key={tour.id}>
          <ToursItem 
            tour={tour}
          />
        </li>
      ))}
    </ul>
	);
}

export default ToursList;
