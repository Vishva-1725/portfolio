import Web from '../assets/project1.gif'
import Web1 from '../assets/project2.gif'
import Web2 from '../assets/project3.gif'
import Web3 from '../assets/project4.gif'
import Web4 from '../assets/project5.gif'
import Web5 from '../assets/project6.gif'


export default function Projects() {

    const config = {
        projects : [
            {
                Image: Web,
                description: 'E-Commerce Website like Amazon. Built With HTML, CSS and JAVASCRIPT.',
                link: 'https://github.com/Vishva-1725/Amazon/'
            },

            {
                Image: Web1,
                description: 'It is a Youtube clone. Built with HTML, CSS.',
                link: 'https://vishva-1725.github.io/Youtube/'
            },

            {
                Image: Web2,
                description: 'It is a Game like Stone Paper Scissor. Built with HTML, CSS and JAVASCRIPT.',
                link: 'https://vishva-1725.github.io/Rock-Papper-Scissor/'
            },
        ]
    }

    const config1 = {
        projects : [
            {
                Image: Web3,
                description: 'It is a TO-DO-LIST App. Built with REACT JS.',
                link: 'https://vishva-1725.github.io/To-Do-List/'
            },

            {
                Image: Web4,
                description: 'It is a Digital Clock. Built with REACT JS.',
                link: 'https://vishva-1725.github.io/Digital-Clock/'
            },

            {
                Image: Web5,
                description: 'It is a STOP WATCH. Built with REACT JS.',
                link: 'https://vishva-1725.github.io/StopWatch/'
            },
        ]
    }
       

    return(
        <section id='projects' className="flex flex-col px-5 py-10 justify-center primary text-white pb-[70px]">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                   <h1 className='text-4xl text-white border-b-2 border-[#33cfd5] mb-5 w-[145px] font-fav'><span className="text-red-600">P</span>rojects</h1>
                   <p className='text-[20px]'>This are some of my best projects. I have built these with <span className='text-fav text-[#ee5c94]'>HTML, CSS, JAVASCRIPT and REACT JS</span>.
                    <br /> Check them out.</p>
                </div>  
            </div>
            <br />

            <div className="w-full">
                <div className='flex flex-col md:flex-row px-5 gap-7 pb-5'> 
                    {config.projects.map((project) => (
                        <div className='relative'>
                        <img className='h-[200px] w-[400px] static' src={project.Image} /> 
                        <div className='pro'>
                          <p className='text-center px-5 py-8'>{project.description}</p>
                          <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link}>View Projects</a>
                         </div>
                        </div>   
                      </div> 
                    ))}
                    
                </div>                
            </div>



         <div className="w-full">
            <div className='flex flex-col md:flex-row px-5 gap-7 mt-10'>
                {config1.projects.map((project) => (
                    <div className='relative'>
                    <img className='h-[200px] w-[400px]' src={project.Image} alt="" />
                    <div className='pro'>
                        <p className='text-center px-5 py-8'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link}>View Projects</a>
                        </div>
                    </div>
                </div>
                ))}
                

              
            </div>
          </div>

        </section>
    );
}