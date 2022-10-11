import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import NftCard from "./Card_Legendary";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage } from 'react-intl';


// Import dynamic
const Carrusel = dynamic(() => import('../carrusel3d/carrusel'), { ssr: false })

// Array nft sold
const arrayTest = ['y']

const SoldNft = (id) => {
    var sold = false
    for (var i = 0; i < arrayTest.length; i++) {
        if (arrayTest[i] === id) {
            sold = true
        }
    }
    return sold
}


const style = {
    container: 'flex-col mt-8 items-center w-full justify-center   sm:mb-16',
    category_box: ' border rounded-md cursor-pointer shadow-lg mr-2 text-sm w-20 '
}


function Carousel(props) {

    const [nfts_legendary, setNft_Legendary ] = useState(undefined);
    
        useEffect(() => {
            getAPI();
        }, []);
    
        const getAPI = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/NFTsMongo/`);
                const data = await res.json();
                setNft_Legendary(data.data);
                console.log(data.data[0].id);
                console.log(data.data.length);
                //console.log(nfts_legendary)
                console.log("data saved")
            } catch (err) {
                console.log(err);
            }
        }; 


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
                sold={SoldNft('0')}
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
                sold={SoldNft('1')}
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
                sold={SoldNft('2')}
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
                sold={SoldNft('3')}
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
                sold={SoldNft('4')}
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
                sold={SoldNft('5')}
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
                sold={SoldNft('6')}
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
                sold={SoldNft('7')}
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
                sold={SoldNft('8')}
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
                sold={SoldNft('9')}
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
                sold={SoldNft('10')}
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
                sold={SoldNft('11')}
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
                sold={SoldNft('12')}
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
                sold={SoldNft('13')}
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
                sold={SoldNft('14')}
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
                sold={SoldNft('15')}
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
                sold={SoldNft('16')}
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
                sold={SoldNft('17')}
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
                sold={SoldNft('18')}
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
                sold={SoldNft('19')}
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
                sold={SoldNft('20')}
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
                sold={SoldNft('21')}
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
                sold={SoldNft('22')}
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
                sold={SoldNft('23')}
            />
        }]
    const stone = [
        {
            key: uuidv4(),
            content: <NftCard
                id='32'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/32.png'
                title='NFT Dragonkeeper Legendary 32'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('32')}
            />

        },
        {
            key: uuidv4(),
            content: <NftCard
                id='33'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/33.png'
                title='NFT Dragonkeeper Legendary 33'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('33')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='34'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/34.png'
                title='NFT Dragonkeeper Legendary 34'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('34')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='35'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/35.png'
                title='NFT Dragonkeeper Legendary 35'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('35')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='36'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/36.png'
                title='NFT Dragonkeeper Legendary 36'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('36')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='37'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/37.png'
                title='NFT Dragonkeeper Legendary 37'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('37')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='38'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/38.png'
                title='NFT Dragonkeeper Legendary 38'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('38')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='39'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/39.png'
                title='NFT Dragonkeeper Legendary 39'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('39')}
            />
        }]
    const marble = [
        {
            key: uuidv4(),
            content: <NftCard
                id='24'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/24.png'
                title='NFT Dragonkeeper Legendary 24'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('24')}
            />

        },
        {
            key: uuidv4(),
            content: <NftCard
                id='25'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/25.png'
                title='NFT Dragonkeeper Legendary 25'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('25')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='26'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/26.png'
                title='NFT Dragonkeeper Legendary 26'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('26')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='27'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/27.png'
                title='NFT Dragonkeeper Legendary 27'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('27')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='28'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/28.png'
                title='NFT Dragonkeeper Legendary 28'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('28')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='29'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/29.png'
                title='NFT Dragonkeeper Legendary 29'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('29')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='30'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/30.png'
                title='NFT Dragonkeeper Legendary 30'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('30')}
            />
        },
        {
            key: uuidv4(),
            content: <NftCard
                id='31'
                image='https://kubicsnft.mypinata.cloud/ipfs/QmPXHyjmy71fQgQqaNYR3h9pH2v5jqVfoYGw5uEV9ayC9t/31.png'
                title='NFT Dragonkeeper Legendary 31'
                description="DragonKeeper NFT collection"
                price='0.1'
                sold={SoldNft('31')}
            />
        }]


    const [category, setCategory] = useState(gold);
    const [categoryButton, setCategoryButton] = useState('gold');

    // category changue 
    const changueA = () => {
        setCategory(gold)
        setCategoryButton('gold')
    }
    const changueB = () => {
        setCategory(bronce)
        setCategoryButton('bronce')
    }
    const changueC = () => {
        setCategory(silver)
        setCategoryButton('silver')
    }
    const changueD = () => {
        setCategory(marble)
        setCategoryButton('marble')
    }
    const changueE = () => {
        setCategory(stone)
        setCategoryButton('stone')
    }
    // ----------------

    const CarruselSize = (props) => {
        return (<Carrusel category={props.category} radius={props.radius} />)
    }

    return (
        <>
            <div className={style.container}>
                {/* --------- Description --------- */}
                <div className='flex flex-col items-start '>
                    <h2 className='w-full mb-4 text-lg border-b may text-secondary text-start'>LEGENDARY CATEGORY</h2>
                    <div className='flex flex-col justify-center w-full pl-6 mb-8 items-star'>
                        <ul className='mb-2 list-disc text-start'>
                            <li><FormattedMessage id='nft.legendary1' default='description' /></li>
                            <li><FormattedMessage id='nft.legendary2' default='description' /></li>
                            <li><FormattedMessage id='nft.legendary3' default='description' /></li>
                            <li><FormattedMessage id='nft.legendary4' default='description' /></li>
                            <li><FormattedMessage id='nft.legendary5' default='description' /></li>
                            <li><FormattedMessage id='nft.legendary6' default='description' /></li>
                            <li><FormattedMessage id='nft.legendary7' default='description' /></li>
                        </ul>

                    </div>
                </div>
                {/* --------- Categorys --------- */}

                <div className='flex flex-row justify-center p-1 '>
                    <div
                        className={`${style.category_box}${categoryButton === 'gold' ? " font-bold border-secondary shadow-lg shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueA}
                    >
                        Bold
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'bronce' ? " font-bold border-secondary shadow-lg shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueB}
                    >
                        Bronce
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'silver' ? " font-bold border-secondary shadow-lg shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueC}
                    >
                        Silver
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'marble' ? "font-bold border-secondary shadow-lg  shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueD}
                    >
                        Marble
                    </div>
                    <div
                        className={`${style.category_box}${categoryButton === 'stone' ? "font-bold border-secondary shadow-lg  shadow-[#7B94b1] transition  scale-105" : ""}`}
                        onClick={changueE}
                    >
                        Stone
                    </div>
                </div>
                {/* -------------- Carousel ---------- */}
                {/* Carousel xl */}
                <div className='mt-4 md:hidden' >
                    <CarruselSize category={category} radius={1} />
                </div>
                {/* Carousel md */}
                <div className='hidden mt-4 md:flex xl:hidden'>
                    <CarruselSize category={category} radius={2} />
                </div>
                {/* Carousel sm */}
                <div className='hidden mt-4 xl:flex'>
                    <CarruselSize category={category} radius={4} />
                </div>



            </div>
        </>
    )
}

export default Carousel
