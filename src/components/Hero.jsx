import computerImg from '../assets/About2.png'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

    const config = {
        subtitle : 'Im a Full-Stack Developer',
        social : {
            twitter : 'https://x.com/vishva_1725?t=vOAnULo99DMavkogtfkplg&s=08',
            insta : 'https://www.instagram.com/vishva._.1725/profilecard/?igsh=dWRzajcyMwMR3',
            linkedin : 'https://www.linkedin.com/in/vishva-s-3b209b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    }

    return(<section className="flex flex-col md:flex-row px-5 py-20 primary justify-center">
       <div className='md:w-1/3 flex flex-col '>
            <h1 className=' text-white text-5xl font-fav'>Hi, <br /> Im <span className='text-red-700'>S</span> Vishva
            <p className='text-xl '>{config.subtitle}</p>
            </h1>

            <div className='flex py-5'>
                <a target='_blank' href={config.social.twitter} className='pr-5 hover:text-green-400'><AiOutlineTwitter size={35}/></a>
                <a target='_blank' href={config.social.insta} className='pr-5 hover:text-red-600'><AiOutlineInstagram size={35}/></a>
                <a target='_blank' href={config.social.linkedin} className='hover:text-blue-900'><AiOutlineLinkedin size={35}/></a>
            </div>
        </div> 

        <img className='md:w-1/3' src={computerImg}/>
    </section>);
}