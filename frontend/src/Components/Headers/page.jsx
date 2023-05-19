import React from 'react';
import Header from './header';
import Testimonial from './testimonal';
import Flex from './flex';
import Footer from './footer';

function Page() {
    return (
        <div>
            <Header/>
            <Testimonial/>
            <Flex/>
            <Footer/>
        </div>
    );
}

export default Page;