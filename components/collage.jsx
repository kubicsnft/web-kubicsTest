import Image from 'next/image'
import React from 'react'

function collage() {
  const style ={
      container:'hidden xl:block absolute h-64 w-80 transition ease-in-out duration-500  border-8 shadow-2xl hover:shadow-black hover:scale-110 hover:z-10 border-slate-200 ',
      photo1:'translate-y-40 translate-x-52  rotate-6',
      photo2:'translate-y-44 -translate-x-52  -rotate-12',
      photo3:'-translate-y-12 translate-x-28  -rotate-6',
      photo4:'-translate-x-28 rotate-6',
      photo5:'translate-y-44 rotate-3',
  }
  return (

    

    <div className='flex justify-center w-full h-[30em] mt-20'>
      <div className={`${style.container}${style.photo1}`} >
        <Image
          src='/animals/Toro_05_DOF.png'
          className=''
          width={320}
          height={253}
          layout="responsive"
          alt='nft image'
        />
      </div>
      <div className={`${style.container}${style.photo2}`} >
        <Image
          src='/animals/Conejo_manchado.png'
          className=''
          width={320}
          height={253}
          layout="responsive"
          alt='nft image'
        />
      </div>
      <div className={`${style.container}${style.photo3}`} >
        <Image
          src='/animals/Tiburon_04.png'
          className=''
          width={320}
          height={253}
          layout="responsive"
          alt='nft image'
        />
      </div>
      <div className={`${style.container}${style.photo4}`} >
        <Image
          src='/animals/Cangrejo_02.png'
          className=''
          width={320}
          height={253}
          layout="responsive"
          alt='nft image'
        />
      </div>
      <div className={`${style.container}${style.photo5}`} >
        <Image
          src='/animals/Ardilla_01.png'
          className=''
          width={320}
          height={253}
          layout="responsive"
          alt='nft image'
        />
      </div>
    </div>

  )
}

export default collage
