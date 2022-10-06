import Image from 'next/image'
import React from 'react'
import { useState } from "react"
import dynamic from 'next/dynamic'
import NftCard from "./Card_Legendary";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from 'react-intl';

// Importación dinamica para Carrusel3d
const Carrusel = dynamic(() => import('../carrusel3d/carrusel'), { ssr: false })



// ------- Categorys of arrays -------
const gold = [
    {
        key: uuidv4(),
        content: <NftCard
            id='0'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/0.png'
            title='Dragonkeeper Legendary 0'
            description="DragonKeeper collection"
            price='0.1'
        />

    },
    {
        key: uuidv4(),
        content: <NftCard
            id='1'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/1.png'
            title='Dragonkeeper Legendary 1'
            description="DragonKeeper collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='2'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/2.png'
            title='Dragonkeeper Legendary 2'
            description="DragonKeeper collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='3'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/3.png'
            title='Dragonkeeper Legendary 3'
            description="DragonKeeper collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='4'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/4.png'
            title='Dragonkeeper Legendary 4'
            description="DragonKeeper collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='5'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/5.png'
            title='Dragonkeeper Legendary 5'
            description="DragonKeeper collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='6'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/6.png'
            title='Dragonkeeper Legendary 6'
            description="DragonKeeper collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='7'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/7.png'
            title='Dragonkeeper Legendary 7'
            description="DragonKeeper collection"
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
const stone = [
    {
        key: uuidv4(),
        content: <NftCard
            id='16'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/32.png'
            title='NFT Dragonkeeper Legendary 32'
            description="DragonKeeper NFT collection"
            price='0.1'
        />

    },
    {
        key: uuidv4(),
        content: <NftCard
            id='17'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/33.png'
            title='NFT Dragonkeeper Legendary 33'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='18'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/34.png'
            title='NFT Dragonkeeper Legendary 34'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='19'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/35.png'
            title='NFT Dragonkeeper Legendary 35'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='20'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/36.png'
            title='NFT Dragonkeeper Legendary 36'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='21'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/37.png'
            title='NFT Dragonkeeper Legendary 37'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='22'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/38.png'
            title='NFT Dragonkeeper Legendary 38'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    },
    {
        key: uuidv4(),
        content: <NftCard
            id='23'
            image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/39.png'
            title='NFT Dragonkeeper Legendary 39'
            description="DragonKeeper NFT collection"
            price='0.1'
        />
    }]
const marble = [
{
    key: uuidv4(),
    content: <NftCard
        id='16'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/24.png'
        title='NFT Dragonkeeper Legendary 24'
        description="DragonKeeper NFT collection"
        price='0.1'
    />

},
{
    key: uuidv4(),
    content: <NftCard
        id='17'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/25.png'
        title='NFT Dragonkeeper Legendary 25'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
},
{
    key: uuidv4(),
    content: <NftCard
        id='18'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/26.png'
        title='NFT Dragonkeeper Legendary 26'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
},
{
    key: uuidv4(),
    content: <NftCard
        id='19'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/27.png'
        title='NFT Dragonkeeper Legendary 27'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
},
{
    key: uuidv4(),
    content: <NftCard
        id='20'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/28.png'
        title='NFT Dragonkeeper Legendary 28'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
},
{
    key: uuidv4(),
    content: <NftCard
        id='21'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/29.png'
        title='NFT Dragonkeeper Legendary 29'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
},
{
    key: uuidv4(),
    content: <NftCard
        id='22'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/30.png'
        title='NFT Dragonkeeper Legendary 30'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
},
{
    key: uuidv4(),
    content: <NftCard
        id='23'
        image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/31.png'
        title='NFT Dragonkeeper Legendary 31'
        description="DragonKeeper NFT collection"
        price='0.1'
    />
}]







    const style = {
        container: 'flex-col mt-8 items-center w-full   mb-16',
        category_box: ' border rounded-md cursor-pointer border-primary mr-2 text-sm w-20 translate-y-2'
    }


function Carousel() {

    const [category, setCategory] = useState(gold);



    // category changue 
    const changueA = () => {
        setCategory(gold)
    }
    const changueB = () => {
        setCategory(bronce)
    }
    const changueC = () => {
        setCategory(silver)
    }
    const changueD = () => {
        setCategory(marble)
    }
    const changueE = () => {
        setCategory(stone)
    }
    // ----------------

    const CarruselSize = (props) => {
        return (<Carrusel category={props.category} radius={props.radius}/>)
    }

    return (
        <>
            <div className={style.container}>
                {/* --------- Description --------- */}
                <div className='flex flex-col items-start '>
                    <h2 className='w-full mb-4 text-xl border-b may text-secondary text-start'>LEGENDARY CATEGORY</h2>
                    <div className='flex flex-col justify-center w-full pl-6 mb-8 items-star'>
                        <ul className='list-disc text-start'>
                            <li><FormattedMessage id='nft.legendary1' default='description'/></li>
                            <li><FormattedMessage id='nft.legendary2' default='description'/></li>
                            <li><FormattedMessage id='nft.legendary3' default='description'/></li>
                            <li><FormattedMessage id='nft.legendary4' default='description'/></li>
                            <li><FormattedMessage id='nft.legendary5' default='description'/></li>
                            <li><FormattedMessage id='nft.legendary6' default='description'/></li>
                            <li><FormattedMessage id='nft.legendary7' default='description'/></li>
                        </ul>
                    
                    </div>
                </div>
                {/* --------- Categorys --------- */}
                {/* <p className='border-t'>SubCategorys</p> */}
                <div className='flex flex-row justify-center '>

                    <div
                        className={`${style.category_box}${category === gold ? " font-bold border-secondary shadow-xl shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueA}
                    >
                        Bold
                    </div>
                    <div
                        className={`${style.category_box}${category === bronce ? " font-bold border-secondary shadow-xl shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueB}
                    >
                        Bronce
                    </div>
                    <div
                        className={`${style.category_box}${category === silver ? " font-bold border-secondary shadow-xl shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueC}
                    >
                        Silver
                    </div>
                    <div
                        className={`${style.category_box}${category === marble ? "font-bold border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changueD}
                    >
                        Marble
                    </div>
                    <div
                        className={`${style.category_box}${category === stone ? "font-bold border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changueE}
                    >
                        Stone
                    </div>
                </div>
                {/* -------------- Carousel ---------- */}
                {/* Carousel xl */}
                <div className='mt-4 md:hidden' >
                    <CarruselSize category={category} radius={1}/>
                </div>
                {/* Carousel md */}
                <div className='hidden mt-4 md:flex xl:hidden'>
                    <CarruselSize category={category} radius={2}/>
                </div>
                {/* Carousel sm */}
                <div className='hidden mt-4 xl:flex'>
                    <CarruselSize category={category} radius={4}/>
                </div>



            </div>
        </>
    )
}

export default Carousel
