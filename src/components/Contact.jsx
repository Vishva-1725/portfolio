

export default function Contact() {

    const config ={
        email : 'vishvasaravanakumar2002@gmail.com',
        mobileNumber : '8637487994'
    }


    return(
        <section id="contact" className="flex flex-col primary  py-[135px] text-white">
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl  border-b-2 border-[#33cfd5] mb-5 w-[140px] font-fav'><span className='text-red-600'>C</span>ontact</h1>
                <p className="pb-5 text-2xl pt-10">If you want to discuss more in detail, please contact me.</p>
              <div>
                <p className="py-3 text-xl"><span className="font-bold text-green-400">Email:</span> {config.email} </p>
                <p className="py-3 text-xl"><span className="font-bold text-green-400">Mobile Number:</span> {config.mobileNumber}</p>
              </div>

            </div>
        </section>
    );
}