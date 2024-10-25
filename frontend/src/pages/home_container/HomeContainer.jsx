// import React from 'react'
// // import { DiHeroku } from 'react-icons/di'
// import Hero from './hero/Hero'
// import Search from '../search/Search'
// import Category from './category/Category'
// import { Link } from 'react-router-dom'; // Make sure to import Link
// import Offer from './offer/Offer';

// const HomeContainer = () => {
//     return (
//         <div>
//             {/* This is home container section */}
//             <Hero/>
//             <Search />
//             <Category />
//             <Offer/>
//             <Bus/>
//         </div>
//     )
// }

// export default HomeContainer
import React from 'react';
import Hero from './hero/Hero';
import Search from '../search/Search';
import Category from './category/Category';
import Offer from './offer/Offer';
import Bus from '../bus/Bus'; // Import the Bus component

const HomeContainer = () => {
    return (
        <div>
            {/* This is home container section */}
            <Hero/>
            <Search />
            <Category />
            <Offer/>
            <Bus/> {/* Now the Bus component is properly used */}
        </div>
    )
}

export default HomeContainer;
