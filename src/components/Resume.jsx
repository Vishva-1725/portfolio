import ResumeImg from '../assets/Resume.jpg'
import resume from  '../assets/resume.pdf'

export default function Resume() {

    return(
        <section id='resume' className="flex flex-col md:flex-row secondary px-5 py-[60px]">
            <div className='md:w-1/2 py-10 flex md:justify-end justify-center'>
                <img className='md:w-[400px] w-[250px]' src={ResumeImg} alt="" />
            </div>

            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white border-b-2 border-[#33cfd5] mb-5 w-[150px] font-fav'><span className='text-red-600'>R</span>esume</h1>
                    <p className='text-white text-xl'>You can view My Resume.<a className='btn' target='blank' href={resume} download="Resume">Resume</a></p>
                </div>
            </div>
        </section>
    );
} 