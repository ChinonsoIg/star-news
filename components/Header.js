import Link from 'next/link'
import headerStyles from '../styles/header.module.css'


const Header = () => {

  return (
    <div>
      <h1 className="title">
        <span>StarDev</span> Newz
      </h1>
      <style jsx>
        {`
          .title {
            color: teal;
          }
        `}
      </style>
    </div>
	);
  
}


export default Header;
