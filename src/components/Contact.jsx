import { CiLocationOn } from 'react-icons/ci';
import { BsTelephonePlus,BsStopwatch } from 'react-icons/bs';
import { GiNotebook } from 'react-icons/gi';
const Contact = () => {
    return (
        <div className="w-8/12 pt-10 gap-2 mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 ">

<div className="bg-orange-500  text-white p-10 rounded-xl font-semibold ">
<CiLocationOn className='text-3xl '></CiLocationOn>
<h1> Postal Address</h1>
 <p>Unica Event Agency</p>
 <p>85 Fentiman Ave</p>
 <p>Ottawa, ON K1S 0T7</p>

</div>
<div className="bg-lime-500  text-white p-10 rounded-xl font-semibold">
<BsTelephonePlus className='text-3xl '></BsTelephonePlus>
<h1>Phone & E-mail</h1>
 <p> Phone: 1-800-64-38</p>
 <p>Fax: 1-800-64-39</p>
 <p> office@fable.com</p>

</div>
<div className="bg-sky-500  text-white p-10 rounded-xl font-semibold">
<BsStopwatch className='text-3xl '></BsStopwatch>
<h1> Open Hours</h1>
 <p> Monday t0 Friday</p>
 <p> 8.00 am to 5.00 pm</p>
 <p>Weekend Closed</p>

</div>
<div className="bg-purple-700  text-white p-10 rounded-xl font-semibold">
<GiNotebook className='text-3xl '></GiNotebook>
<h1> Sessions</h1>
 <p>  8 am /12 noon</p>
 <p> 1 pm/5 pm</p>
 <p> 8 am/5 pm </p>

</div>










        </div>
    );
};

export default Contact;