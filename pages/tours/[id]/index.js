import { useRouter  } from "next/router";

const Tour = ({ tours }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const tour = tours.filter(tour => tour.id === id);
  
  console.log('tours: ', tours)
  console.log('tour: ', tour)


  return (
    <div>
      <p>This is a tour with id {id}</p>
    </div>
  )

}

export const getServerSideProps = async () => {
  const url = `https://course-api.com/react-tours-project`;

  const res = await fetch(`https://course-api.com/react-tours-project`)

  
  return {
    props: {
      tours: await res.json()
    }
  }
}

export default Tour;