import Image from 'next/image'
import React from 'react'

function collage() {
  const style = {
    container: ' absolute h-40 sm:h-64 w-60 sm:w-80 transition ease-in-out duration-500 delay-100 border-8 shadow-2xl hover:shadow-black hover:scale-110 hover:z-10 border-slate-200 ',
    photo1: 'translate-y-40 translate-x-52  rotate-6 hidden xl:block',
    photo2: 'translate-y-44 -translate-x-52  -rotate-12 hidden xl:block',

    photo3: 'md:-translate-y-12 md:translate-x-28 -translate-y-16 sm:translate-x-14 trnaslate-x-8 -rotate-6 ',
    photo4: 'md:-translate-x-28 md:rotate-6 sm:-translate-x-8 rotate-6 translate-y-6',

    photo5: 'translate-y-44 sm:rotate-3 -rotate-6',
  }
  return (
    <>
      <div className=' justify-center w-full h-[30em] mt-20 hidden sm:flex'>
        <div className={`${style.container}${style.photo1}`} >
          <Image
            src='/animals/Cangrejo_02.png'
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
            src='/animals/Toro_05_DOF.png'
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
        <div className='flex justify-center w-full h-[25em] mt-20 sm:hidden'>
          <div className={`${style.container}${style.photo3}`} >
            <Image
              src='/animals/Tiburon_04.png'
              className=''
              width={205}
              height={130}
              layout="responsive"
              alt='nft image'
            />
          </div>
          <div className={`${style.container}${style.photo4}`} >
            <Image
             src='/animals/Toro_05_DOF.png'
              className=''
              width={205}
              height={130}
              layout="responsive"
              alt='nft image'
            />
          </div>
          <div className={`${style.container}${style.photo5}`} >
            <Image
              src='/animals/Ardilla_01.png'
              className=''
              width={205}
              height={130}
              layout="responsive"
              alt='nft image'
            />
          </div>
        </div>

    </>
  )
}

export default collage
