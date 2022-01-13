import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'


const Header = () => {

  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Tourz </span> Site
      </h1>
      <style jsx>
        {`
          .title {
            color: teal;
            borderBottom: '3px solid teal'
          }
        `}
      </style>
    </div>
	);
  
}


export default Header;
