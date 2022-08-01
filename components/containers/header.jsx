import React from 'react';
import CenterLogo from '../centerLogo';
import Swich from '../toggleSwitch';
import { FormattedMessage } from "react-intl"

const Header = () => {
    return (
        <div className='grid content-between min-h-screen w-full max-w-screen-2xl'>
            <div className='grid grid-cols-2 items-center' >
                <div className="text-start text-lg">
                    <FormattedMessage
                        id='app.slogan'
                        defaultMessage='The world will never be round again'
                    />
                </div>
                <div className="flex justify-end">
                    <Swich />
                </div>
            </div>
            <div className="text-center mb-40">
                <CenterLogo />
            </div>
            <div></div>
        </div>

    );
}

export default Header;
