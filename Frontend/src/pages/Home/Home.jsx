import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CoinContext } from "../../Context/CoinContext";
import Footer from "../../components/Navbar/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  const [input, setInput] = useState('');

  const inputHandler = (event) =>{
    setInput(event.target.value);

    if(event.target.value === ''){
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (event)=>{
    event.preventDefault();
    const coin = allCoin.filter((item)=>{
      return(
        item.name.toLowerCase().includes(input.toLowerCase())
      ) 
    })

    setDisplayCoin(coin);
    

  }


  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <>
      <Navbar />
      <div className=" flex flex-col items-center pb-36 ">
        <div className="hero flex flex-col w-screen items-center pt-20">
          <h1 className=" text-center text-6xl xl:text-8xl font-semibold">
            Largest <br /> Crypto Marketplace
          </h1>
          <p className=" my-10 text-center text-lg">
            Welcome to the world's largest cryptocurrency marketplace. <br />{" "}
            Sign up to explore more about cryptos.
          </p>
          <form onClick={searchHandler} action="" className=" bg-white px-2  py-2 rounded-md">

            <input
              onChange={inputHandler}
              value={input}
              type="text"
              list="coinlist"
              placeholder="Search Crypto"
              required
              className="px-4 text-neutral-700 w-80 focus:outline-none"
            />

              <datalist id="coinlist">
                    {allCoin.map((item, index)=>(<option key={index} value={item.name}/>))}
              </datalist>


            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-md text-white"
            >
              Search
            </button>
          </form>
        </div>
        <div className=" w-[96%] sm:w-[90%] md:w-[80%] xl:w-[60%] 2xl:w-[40%] Crypto-table bg-white text-neutral-900 rounded-md  mt-20 overflow-hidden">
          <div className="crypto-layout grid grid-cols-[0.5fr_2fr_1fr_.5fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] py-4 px-8 border-b border-neutral-200">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className="">24H Change</p>
            <p className="hidden lg:block">Market Cap</p>
          </div>
          {displayCoin.slice(0, 20).map((item, index) => {
            return (
              <Link to={`coin/${item.id}`}
                key={index}
                className="crypto-layout grid grid-cols-[0.5fr_2fr_1fr_.5fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] py-4 px-8 border-b border-neutral-200"
              >
                <p>{item.market_cap_rank}</p>
                <div className="flex items-center">
                  <img src={item.image} alt="" className=" w-8 " />
                  <p className="ml-6 mr-2">{item.name}</p>
                  <p className="uppercase text-left hidden md:block">{`- ${item.symbol}`}</p>
                </div>

                <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
                <p className={` ${item.price_change_24h >0 ? 'text-green-500' :'text-red-500'}`}>
                  {Math.floor(item.price_change_24h * 100)/100}
                </p>
                <p className="hidden lg:block">{currency.symbol}{item.market_cap.toLocaleString()}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
