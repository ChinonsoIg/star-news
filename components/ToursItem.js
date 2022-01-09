import Link from 'next/link'
import Image from 'next/image';
import toursStyles from '../styles/tours.module.css';
import fallback from '../public/images/fallback.jpg'

const ToursItem = ({ tour }) => {

  return (
    <Link href='/tours/[id]' as={`/tours/${tour.id}`}>
      <a>
        <Image src={fallback} alt='Tour'/>
        <section className={toursStyles.tourFooter}>
          <div className={toursStyles.flex}>
            <h3>{tour.name}</h3>
            <p>$ {tour.price}</p>
          </div>
            <small>{tour.info.substring(0, 220)}....<span className={toursStyles.readMore}>Read more</span></small>
        </section>
      </a>
    </Link>
	);
}


export default ToursItem;
