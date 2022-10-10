import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import NftCard from "./cardPremium";
import { v4 as uuidv4 } from "uuid";
// import Carrusel3d from '../carrusel3d/carrusel3d'

// Importación dinamica para Carrusel3d
const Carrusel = dynamic(() => import('../carrusel3d/carrusel_Premium'), { ssr: false })



const style = {
    container: 'flex-col mt-8 items-center w-full p-8 pb-44 mb-4 ',
    category_box: ' border rounded-md cursor-pointer border-primary mr-2 text-sm w-20 translate-y-2'
}

function Carousel(props) {
    //const [isConnected, setIsConnected] = useState(false);
    //const [hasMetamask, setHasMetamask] = useState(false);
    //const [signer, setSigner] = useState(undefined);
    //const [account, setAccount] = useState(undefined);
    const [nfts_legendary, setNft_Legendary ] = useState(undefined);
    
/*     const signer = props.signer;
    const connected = props.connected;

    console.log(signer)
    console.log(connected) */

    useEffect(() => {
        getAPI();
    }, []);

    const getAPI = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/NFTsMongo/`);
            const data = await res.json();
            setNft_Legendary(data);
            console.log(data.data[0].id);
            console.log(data.data.length);
            console.log("data saved")
        } catch (err) {
            console.log(err);
        }
    }; 

    async function checkSold(){
        //
        console.log(nfts_legendary)
    } 

    const gold = [
        {
            key: uuidv4(),
            content: <NftCard
                id='0'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/0.png'
                title='NFT Dragonkeeper Legendary 0'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
    
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='1'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/1.png'
                title='NFT Dragonkeeper Legendary 1'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='2'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/2.png'
                title='NFT Dragonkeeper Legendary 2'
                description="DragonKeeper NFT collection"
                price='0.1'
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='3'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/3.png'
                title='NFT Dragonkeeper Legendary 3'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='4'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/4.png'
                title='NFT Dragonkeeper Legendary 4'
                description="DragonKeeper NFT collection"
                price='0.1'
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='5'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/5.png'
                title='NFT Dragonkeeper Legendary 5'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='6'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/6.png'
                title='NFT Dragonkeeper Legendary 6'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='7'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/7.png'
                title='NFT Dragonkeeper Legendary 7'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        }]
    const bronce = [
        {
            key: uuidv4(),
            content: <NftCard
                id='8'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/8.png'
                title='NFT Dragonkeeper Legendary 8'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
    
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='9'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/9.png'
                title='NFT Dragonkeeper Legendary 9'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='10'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/10.png'
                title='NFT Dragonkeeper Legendary 10'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='11'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/11.png'
                title='NFT Dragonkeeper Legendary 11'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='12'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/12.png'
                title='NFT Dragonkeeper Legendary 12'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='13'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/13.png'
                title='NFT Dragonkeeper Legendary 13'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='14'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/14.png'
                title='NFT Dragonkeeper Legendary 14'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='15'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/15.png'
                title='NFT Dragonkeeper Legendary 15'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        }]
    const silver = [
        {
            key: uuidv4(),
            content: <NftCard
                id='16'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/16.png'
                title='NFT Dragonkeeper Legendary 16'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
    
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='17'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/17.png'
                title='NFT Dragonkeeper Legendary 17'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='18'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/18.png'
                title='NFT Dragonkeeper Legendary 18'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='19'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/19.png'
                title='NFT Dragonkeeper Legendary 19'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='20'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/20.png'
                title='NFT Dragonkeeper Legendary 20'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='21'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/21.png'
                title='NFT Dragonkeeper Legendary 21'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='22'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/22.png'
                title='NFT Dragonkeeper Legendary 22'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='23'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/23.png'
                title='NFT Dragonkeeper Legendary 23'
                description="DragonKeeper NFT collection"
                price='0.1'

            />
        }]

    const [category, setCategory] = useState(gold);



    // category changue 
    const changeA = () => {
        setCategory(gold)
    }
    const changeB = () => {
        setCategory(bronce)
    }
    const changeC = () => {
        setCategory(silver)
    }
    const changeD = () => {
        setCategory('D')
    }
    const changeE = () => {
        setCategory('E')
    }
    // ----------------

    const Test = (props) => {
        return (<Carrusel category={props.category} />)
    }

    return (
        <>
            <div className={style.container}>
                <h2 className='mb-4 text-xl may text-secondary'>LEGENDARY CATEGORY</h2>
                
                {/* --------- Description --------- */}
                <div className='mb-4 text-justify'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur 
                </div>
                {/* --------- Categorys --------- */}
                {/* <p className='border-t'>SubCategorys</p> */}
                <div className='flex flex-row justify-center '>
                    
                    <div
                        className={`${style.category_box}${category === gold ? " font-bold border-secondary shadow-xl shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changeA}
                    >
                        Bold
                    </div>
                    <div
                        className={`${style.category_box}${category === bronce ? " font-bold border-secondary shadow-xl shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changeB}
                    >
                        Bronce
                    </div>
                    <div
                        className={`${style.category_box}${category === silver ? " font-bold border-secondary shadow-xl shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changeC}
                    >
                        Silver
                    </div>
                    <div
                        className={`${style.category_box}${category === "D" ? "font-bold border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changeD}
                    >
                        Category D
                    </div>
                    <div
                        className={`${style.category_box}${category === "E" ? "font-bold border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changeE}
                    >
                        Category E
                    </div>
                </div>
                {/* ------Carousel(category A) */}
                <div className='mt-4'>

                    <Test category={category} />
                </div>



            </div>
        </>
    )
}

export default Carousel
