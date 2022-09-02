import React from 'react';
import CenterLogo from '../centerLogo';
import Newsletter from '../Newsletter';
import Swich from '../toggleSwitch';
import { FormattedMessage } from "react-intl"

const Header = () => {
    return (
        <div className='grid content-between w-full min-h-screen max-w-screen-2xl'>
            <div className='grid sm:items-center sm:grid-cols-2 ' >
                <div className="hidden ml-10 text-lg xl:ml-0 2xl:-ml-2 text-start sm:flex">
                    <FormattedMessage
                        id='app.slogan'
                        defaultMessage='The world will never be round again'
                    />
                </div>
                <div className="flex justify-end 2xl:-mr-4">
                    <Swich />
                </div>
            </div>
            <div className="mb-40 text-center">
                <CenterLogo />
            </div>
            <div className='w-full mb-24 justify-self-center '>
                <Newsletter color='butt-color'/>
            </div>

        </div>

    );
}

export default Header;
