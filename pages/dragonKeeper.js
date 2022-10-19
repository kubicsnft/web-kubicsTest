import React from "react";
import dynamic from "next/dynamic";
import { FormattedMessage } from "react-intl";
import AppLayout from "../components/layout/AppLayout";
import Swich from "../components/toggleSwitch";
// import Premium from '../components/mint_page/Carousel_legendary';
import { BiArrowBack } from "react-icons/bi";
import Roadmap from "../components/dragonKeeper/roadmapDK";
import Image from "next/image";
import Link from "next/link";
import NFTZone from "../components/mint_page/NFT_zone";
import DkProject from "../components/dragonKeeper/dkProject";
import Whitelist from "../components/mint_page/Whithelist";


// =========== Import dinamic ===========

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// =========== Import Image =================
import titulo from "../public/dragonkeeper/titulo.png";
import portada from "../public/dragonkeeper/portada.png";

const style = {
    section:
        "w-full   md:px-6 xl:px-12 p-4 border-b flex flex-col items-center  text-center bord  bg-[#ffffffd8] pb-8 min-h-[45em]    max-w-screen-2xl   z-10 ",
};


function Proyecto({ data }) {
    return (
        <>
            <AppLayout>
                {/* {access? */}
                <div className="flex flex-col items-center justify-center w-full text-primary">
                    <div className={`${style.section}z-10`}>
                        {/*  ============================ buttons ============================ */}
                        <div className="grid items-center w-11/12 grid-cols-2 -mt-2 ">
                            <div className="text-lg text-start">
                                <Link href="/">
                                    <div className="w-8 p-1 ml-4 text-xl text-center transition duration-300 ease-in-out border-2 rounded-full cursor-pointer border-primary text-secondary hover:-translate-x-2">
                                        <BiArrowBack />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-end">
                                <Swich />
                            </div>
                        </div>
                        {/* ============================ Img - Title ============================ */}
                        <div className='flex justify-center w-2/5 mb-2'>
                            <Image
                                src={titulo}
                                alt="Título película"
                            />
                        </div>
                        {/* ---------- WHITELIST ----------- */}
                        <div className='flex justify-center w-11/12 mt-4 mb-8 '>
                            <div className='bg-white'>
                                <Whitelist />
                            </div>
                        </div>
                        {/* ============================ Video/Image ============================= */}
                        <div className="flex flex-col items-center w-11/12 p-2 border-t-2 border-b-2 border-primary">
                            <div className="flex justify-center w-full ">
                                {/* <ReactPlayer
                                    url='https://www.youtube.com/watch?v=UYNH-_3SEPg'
                                    controls
                                /> */}
                                <Image
                                    className="rounded-lg"
                                    src={portada}
                                    alt="niña con dragón"
                                />
                            </div>
                            {/* ---- Sinopsis ---- */}
                            <div className='w-full mt-2 text-justify bg-white'>
                                <p>
                                    Dragonkeeper es la primera película de animación coproducida entre España y China, con el apoyo español de Antena 3 y Telefónica, distribuida en España por Contacorriente, una de las mayores distribuidoras del país.
                                </p>
                                <p>
                                    Basada en el primer libro de la colección Dragonkeeper de Carol Wilkinson, best seller internacional y dirigida por el galardonado director español Salvador Simó.
                                </p>
                                <p>
                                    Dragonkeeper cuenta una historia que transcurre durante la dinastía Han en la antigua China.  Ping es una joven niña  que vive como esclava en una remota fortaleza y en las mazmorras de esa fortaleza se  custodian a los últimos Dragones imperiales.
                                </p>
                                <p>
                                    Ping ayudará a escapar a Danzi ,el último dragón, y recuperará el huevo de dragón de las manos del enfermo emperador y su malvado consejero Diao. Esta historia es  un viaje donde Ping conocerá su poder interior y aceptará su destino como la última cuidadora de dragones …  los llamados Dragonkeepers.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ============================ NFT ============================= */}
                    <div className={`${style.section}z-20`}>
                        <NFTZone nfts_Sold={data.data} />
                    </div>
                    {/* ============================ Project ============================= */}
                    <div className={`${style.section}`}>
                        <h2 className="py-6 mb-8 text-3xl may">
                            <FormattedMessage
                                id='dk.project'
                                defaultMessage='PROYECTO'
                            />
                        </h2>
                        <DkProject />
                    </div>
                    {/* ============================ ROADMAP ============================= */}
                    <div className={style.section}>
                        <h2 className="py-6 mb-8 text-3xl">ROADMAP</h2>
                        <Roadmap />
                    </div>
                </div>
            </AppLayout>
        </>
    );
}

export async function getServerSideProps() {
    
    // Fetch data from external API
    const url = "http://https://web-kubics.vercel.app/api/NFTsMongo/";
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default Proyecto;
