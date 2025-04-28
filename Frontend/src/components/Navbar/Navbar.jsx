import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {

        switch(event.target.value){
            case 'usd':{
                setCurrency({name:'usd',symbol:'$'});
                break;
            }
            case 'eur':{
                setCurrency({name:'eur',symbol:'€'});
                break;
            }
            case 'inr':{
                setCurrency({name:'inr',symbol:'₹'});
                break;
            }
            default :{
                setCurrency({name:'usd',symbol:'$'});
                break;
            }
        }

        }

    

    return(
        <div className=" flex items-center justify-between py-6 px-[6%] text-[#ddd] border-b border-[#3c3c3c] ">
            <Link to={'/'}><img src={logo} alt="" className="w-48 sm:w-52"/></Link>
            <ul className='flex gap-10'>
                <li className=' cursor-pointer ' ><Link to={'/'} >Home</Link></li>
                <li className=' cursor-pointer '>Features</li>
                <li className=' cursor-pointer '>Pricing</li>
                <li className=' cursor-pointer '>Blog</li>
            </ul>
            <div className="flex items-center gap-10">
                <select onClick={currencyHandler} className=" px-8 py-3 bg-transparent rounded-md border border-white" >
                    <option value="usd" className='bg-[#0b5b80]'>USD</option>
                    <option value="eur" className='bg-[#0b5b80]'>EUR</option>
                    <option value="inr" className='bg-[#0b5b80]'>INR</option>
                </select>
                <button className='flex items-center gap-4 py-3 px-8 rounded-md text-lg text-[#393939] bg-white cursor-pointer '>Sign Up <img src={arrow_icon} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar;