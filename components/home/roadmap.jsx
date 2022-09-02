import Image from 'next/image';
import React from 'react';

const Roadmap = () => {

    const style = {
        wraaper: 'flex flex-col items-center w-9/12 xl:w-full mb-8',
        row_l: 'flex flex-row justify-start xl:items-center w-full xl:w-auto',
        row_r: 'flex flex-row justify-start xl:items-center w-full xl:w-auto',
        text_l: 'w-32 h-32 mr-8 text-xs text-justify',
        text_r: 'w-32 h-32 ml-2 xl:ml-8 text-xs text-justify hidden xl:flex',
        text_m: 'w-52 h-32 mt-4 ml-2 xl:ml-8 text-xs text-justify xl:hidden ',
        text_m2: 'w-52 h-32  xl:ml-8 text-xs text-justify xl:hidden -ml-28',
        horizontal: 'h-6  border-b-2 w-full xl:w-44   border-primary',
        horizontal2: 'h-6 flex border-b-2 w-1/5  border-primary',
        vertical_l: 'border-2 border-primary mr-4 h-44 bg-primary',
        vertical_r: ' border-2 border-primary ml-4 h-56 xl:h-44 bg-primary',
        cube: 'w-10 h-10 sm:w-16 sm:h-16 xl:w-28 xl:h-28 bg-primary mb-2',
        cubetest: 'w-10 h-10 sm:w-16 sm:h-16 xl:w-28 xl:h-28  mb-10 sm:mb-8',
        div4: '',
    }
    return (
        <div className={style.wraaper}>
        {/* ==================== left colums ====================  */}
            <div className={style.row_l}>
                <div className='flex-row items-center justify-center hidden xl:flex'>
                    <div className={style.text_l}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                    {/* <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}> */}
                    <div className={style.cubetest} >
                        <div className='absolute '>
                            <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={135}
                            height={120}
                            alt='logo'/>
                        </div>

                    </div>
                    <div className={style.horizontal}></div>
                    <div className={style.vertical_l}></div>
                    <div className='w-32 '></div>
                    <div className='w-44'></div>
                    <div className='w-32'></div>
                </div>
                {/*------------- For Mobile ------------*/}
                <div className='flex flex-row justify-start w-full xl:items-center xl:hidden'>
                    <div className={style.vertical_r}></div>
                    <div className={style.horizontal2}></div>
                    <div>
                    <div className={style.cubetest} >
                        <div className='absolute -ml-2'>
                            <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={90}
                            height={80}
                            alt='logo'/>
                        </div>
                    </div>                        
                    <div className={style.text_m}>
                            Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </div>
                    </div>
                    <div className={style.text_r}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                </div>
                {/* ------------------------------------- */}
            </div>
            {/* ========================== right colums ====================== */}
            <div className={style.row_r}>
                <div className='hidden w-32 xl:flex'></div>
                <div className='hidden w-32 xl:flex'></div>
                <div className='hidden w-44 xl:flex'></div>
                <div className={style.vertical_r}></div>
                <div className={style.horizontal}></div>
                <div>
                    <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                    <div className={style.text_m2}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    </div>
                </div>
                <div className={style.text_r}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
            </div>
            {/* ==================== left colums ====================  */}
            <div className={style.row_l}>
                <div className='flex-row items-center justify-center hidden xl:flex'>
                    <div className={style.text_l}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                    {/* <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}> */}
                    <div className={style.cubetest} >
                        <div className='absolute '>
                            <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={135}
                            height={120}
                            alt='logo'/>
                        </div>

                    </div>
                    <div className={style.horizontal}></div>
                    <div className={style.vertical_l}></div>
                    <div className='w-32 '></div>
                    <div className='w-44'></div>
                    <div className='w-32'></div>
                </div>
                {/*------------- For Mobile ------------*/}
                <div className='flex flex-row justify-start w-full xl:items-center xl:hidden'>
                    <div className={style.vertical_r}></div>
                    <div className={style.horizontal2}></div>
                    <div>
                    <div className={style.cubetest} >
                        <div className='absolute -ml-2'>
                            <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={90}
                            height={80}
                            alt='logo'/>
                        </div>
                    </div>                        
                    <div className={style.text_m}>
                            Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </div>
                    </div>
                    <div className={style.text_r}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                </div>
                {/* ------------------------------------- */}
            </div>
            <div className={style.row_r}>
                <div className='hidden w-32 xl:flex'></div>
                <div className='hidden w-32 xl:flex'></div>
                <div className='hidden w-44 xl:flex'></div>
                <div className={style.vertical_r}></div>
                <div className={style.horizontal}></div>
                <div>
                    <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                    <div className={style.text_m2}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    </div>
                </div>
                <div className={style.text_r}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
            </div>
            {/* ==================== left colums ====================0 */}
            <div className={style.row_l}>
                <div className='flex-row items-center justify-center hidden xl:flex'>
                    <div className={style.text_l}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                    {/* <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}> */}
                    <div className={style.cubetest} >
                        <div className='absolute '>
                            <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={135}
                            height={120}
                            alt='logo'/>
                        </div>

                    </div>
                    <div className={style.horizontal}></div>
                    <div className={style.vertical_l}></div>
                    <div className='w-32 '></div>
                    <div className='w-44'></div>
                    <div className='w-32'></div>
                </div>
                {/*------------- For Mobile ------------*/}
                <div className='flex flex-row justify-start w-full xl:items-center xl:hidden'>
                    <div className={style.vertical_r}></div>
                    <div className={style.horizontal2}></div>
                    <div>
                    <div className={style.cubetest} >
                        <div className='absolute -ml-2'>
                            <Image
                            className=''
                            src='/logos/logo_primary.png'
                            width={90}
                            height={80}
                            alt='logo'/>
                        </div>
                    </div>                        
                    <div className={style.text_m}>
                            Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        </div>
                    </div>
                    <div className={style.text_r}>
                        Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                </div>
                {/* ------------------------------------- */}
            </div>


        </div>
    );
}

export default Roadmap;
