import Link from 'next/link'
import Image from 'next/image';
import toursStyles from '../styles/tours.module.css'

const ToursItem = ({ tour }) => {
  const origin = 'http://localhost:8000';

  return (
    <Link href='/tours/[id]' as={`/tours/${tour.id}`}>
      <a className={toursStyles}>
        {/*<Image src={origin + tour.image}/>*/}
        <h2>{tour.name}</h2>
        <p>{tour.price}</p>
      </a>
    </Link>
	);
}

export default ToursItem;
