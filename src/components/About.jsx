import AboutImg from '../assets/img2.png'

export default function About() {


    return(
        <section className="flex flex-col md:flex-row secondary px-5 py-3 pb-10 pt-10" id='about'>
            <div className='md:w-1/2 py-10'>
                <img src={AboutImg} alt="" />
            </div>

            <div className='md:w-1/2 flex justify-center pl-10'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white border-b-2  border-[#33cfd5]  w-[180px] font-fav '><span className='text-red-600'>A</span>bout <span className='text-red-600'>M</span>e</h1>
                    <p className='text-white text-[20px] py-5'>Hi, I am Vishva, I am Full Stack Web Developer.</p>
                    <p className='text-white text-[18px]'>I’m a passionate web developer with a strong foundation in front-end and back-end technologies. 
                      <br /><br />
                       Recently graduated in <span className='text-sky-300 font-bold'>BCA</span> , I am eager to apply my skills in  <span className='text-sky-300 font-bold'>HTML, CSS, JavaScript, React JS, TailWind CSS,
                       MySql, Pyton, Django and Github</span> to create engaging and user-friendly websites.  
                      <br /><br />
                       I’m excited to collaborate on projects that challenge me and allow me to grow. Explore my portfolio to 
                       see my work and get in touch.</p>
                </div>
            </div>
        </section>
    );
} 