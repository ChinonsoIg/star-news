import Link from 'next/link'
import Image from 'next/image';
import toursStyles from '../styles/tours.module.css';
import fallback from '../public/images/fallback.jpg'

const ToursItem = ({ tour }) => {

  return (
    <>
      <Image src={fallback} alt='Tour'/>
      <section className={toursStyles.tourFooter}>
        <div className={toursStyles.flexRow}>
          <h3>{tour.name}</h3>
          <p>$ {tour.price}</p>
        </div>
        <div className={toursStyles.flexCol}>
          <small className={toursStyles.justifyText}>
            {tour.info.substring(0, 220)}....
            <Link href='/tours/[id]' as={`/tours/${tour.id}`}>      
              <a>
                <span className={toursStyles.readMore}>Find out more</span>
              </a>
            </Link>
          </small>
          <button className={toursStyles.btn}>Not Interested</button>
        </div>
      </section>
    </>
	);
}


export default ToursItem;
