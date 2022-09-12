import Image from 'next/image'
import React from 'react'
import { useState } from "react"
import dynamic from 'next/dynamic'
// import Carrusel3d from '../carrusel3d/carrusel3d'

// Importación dinamica para Carrusel3d
const Carrusel = dynamic(() => import('../carrusel3d/carrusel_Premium'), { ssr: false })

// =========== Imagenes =================
import dragon1 from '../../public//nft/dragon1.png'
import dragon2 from '../../public//nft/dragon2.png'
import dragon3 from '../../public//nft/dragon3.png'
import dragon4 from '../../public//nft/dragon4.png'

const style = {
    container: 'flex-col mt-8 items-center w-4/5 p-8 pb-12 mb-4 rounded-xl shadow-lg shadow-[#7B94b1] bg-gray-100  border-primary',
    category_box: ' border-2 rounded-lg cursor-pointer border-primary text-sm'
}

function Carousel() {

    const [category, setCategory] = useState('A');
    const [card, setCard] = useState('nft/dragon1.png');
    

    // category changue 
    const changueA =  () => {
        setCategory('A'),setCard('nft/dragon1.png')
    }
    const changueB = () => {
        setCategory('B'),setCard('nft/dragon2.png' )
    }
    const changueC = () => {
        setCategory('C'),setCard('nft/dragon3.png' )
    }
    const changueD = () => {
        setCategory('D'),setCard('nft/dragon4.png' )
    }
    const changueE = () => {
        setCategory('E'),setCard('nft/dragon2.png' )
    }
    // ----------------

    const Test = (props)=>{
        return(<Carrusel category={props.card2} />)
    }

    return (
        <>
            <div className={style.container}>
                <h2 className='mb-8 text-3xl '>NFTs Category Premium</h2>
                {/* --------- Categorys --------- */}

                <div className='flex flex-row justify-between mt-4 mb-14'>
                    <div
                        className={`${style.category_box}${category === "A" ? "  border-secondary shadow-xl shadow-[#7B94b1]" : ""}`}
                        onClick={changueA}
                    >
                        Category A
                    </div>
                    <div
                        className={`${style.category_box}${category === "B" ? " border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changueB}
                    >
                        Category B
                    </div>
                    <div
                        className={`${style.category_box}${category === "C" ? " border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changueC}
                    >
                        Category C
                    </div>
                    <div
                        className={`${style.category_box}${category === "D" ? " border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changueD}
                    >
                        Category D
                    </div>
                    <div
                        className={`${style.category_box}${category === "E" ? " border-secondary shadow-xl  shadow-[#7B94b1]" : ""}`}
                        onClick={changueE}
                    >
                        Category E
                    </div>
                </div>
                {/* ------Carousel(category A) */}
                <div className='mt-6'>
                    <div className='text-3xl text-secondary'>{category}</div>
                    <Test card2={card} />
                </div>



            </div>
        </>
    )
}

export default Carousel
