import React from 'react';

const Roadmap = () => {

    const style={
        wraaper:'flex flex-col w-full sm:max-h-full sm:overflow-auto barra-scroll sm:h-4/5 scroll-smooth',
        row:'flex flex-row justify-center',
        row_r:'hidden sm:flex flex-row justify-center',
        text_l:'w-32 h-32 mr-8 text-xs text-justify',
        text_r:'w-32 h-32 ml-8 text-xs text-justify',
        horizontal:'h-16 border-b-2 w-44 border-primary',
        vertical_i:'w-1 mr-4 h-44 bg-primary',
        vertical_r:'w-1 ml-4 h-44 bg-primary',
        cube:'w-28 h-28 bg-primary',
        div4:'',
    }
    return (
        <div className={style.wraaper}>
            <div className={style.row}>
                <div className={style.text_l}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
                <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                <div className={style.horizontal}></div>
                <div className={style.vertical_i}></div>
                <div className='w-32'></div>
                <div className='w-44'></div>
                <div className='w-32'></div>

            </div>
            <div className={style.row_r}>
                <div className='w-32'></div>
                <div className='w-32'></div>
                <div className='w-44'></div>
                <div className={style.vertical_r}></div>
                <div className={style.horizontal}></div>
                <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                <div className={style.text_r}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
            </div>
            <div className={style.row} >
                <div className={style.text_l}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
                <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                <div className={style.horizontal}></div>
                <div className={style.vertical_i}></div>
                <div className='w-32'></div>
                <div className='w-44'></div>
                <div className='w-32'></div>

            </div>
            <div className={style.row_r}>
                <div className='w-32'></div>
                <div className='w-32'></div>
                <div className='w-44'></div>
                <div className= {style.vertical_r}></div>
                <div className={style.horizontal}></div>
                <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                <div className={style.text_r}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
            </div>
            <div className={style.row}>
                <div className={style.text_l}>
                    Lorem Ipsum has been the  standard dummy text ever since the 1500s,e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </div>
                <div className={style.cube} style={{ clipPath: 'polygon(0 7%, 66% 0, 100% 17%, 100% 88%, 33% 100%, 0 74%)' }}></div>
                <div className={style.horizontal}></div>
                <div className={style.vertical_i}></div>
                <div className='w-32'></div>
                <div className='w-44'></div>
                <div className='w-32'></div>

            </div>


        </div>
    );
}

export default Roadmap;
