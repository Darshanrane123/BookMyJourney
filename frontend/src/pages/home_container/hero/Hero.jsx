// import React from 'react'
// import Bus2 from "../../../assets/bus5.png"
// import { Link } from 'react-router-dom'; // Make sure to import Link
// import Bus from "../../../assets/bg1.jpg"

// import { animate, delay, motion } from 'framer-motion'


// const Hero = () => {


//     const imageVariants = {
//         initial: {
//             x: "100%",
//         },
//         animate: {
//             x: "3%",
//             transition:{
//                 duration: 3,
//                 ease: "easeInOut",
//             }
//         }
//     }

//     return (
//         <div className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero relative'
// >
//         <div
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5)), url(${Bus})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center bottom',
//                 backgroundRepeat: 'no-repeat',
//               }}
//               className="Hero"
//             >
//               {/* Content */}
//         </div>
//             <div className='flex-1 w-full flex item-stretch justify between gap-12 pb-10'>
//                 <motion.dev className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14"
//                     initial={{opacity :0,y:-10}}
//                     animate={{opacity:1,y:0}}
//                     transition={{duration:0.5, ease:'linear', delay:0.2}}
//                 >
//                     <motion className="space-y-5"
//                         initial={{opacity :0,y:-10}}
//                         animate={{opacity:1,y:0}}
//                         transition={{duration:1, ease:'linear', delay:0.2}}
//                     >
//                         <motion.h1 className="text-7x1 font-extrabold text-neutral-700 dark:text-neutral-300 leading-[1.15]"
//                             initial={{opacity :0,y:-10}}
//                             animate={{opacity:1,y:0}}
//                             transition={{duration:2, ease:'linear', delay:0.4}}
//                         >
//                             Reserve Your Bus
//                             <span className='text-red-400 tracking-wider'>Tickets</span>
//                             Now
//                         </motion.h1>
//                         <motion.p className="text-lg font-normal text-neutral-700 dark:text-neutral-300 leading-[1.15] line-clamp-3 text-ellipsis"
//                             initial={{opacity :0,y:-10}}
//                             animate={{opacity:1,y:0}}
//                             transition={{duration:2, ease:'linear', delay:0.6}}
//                         >
//                             Find and book your bus tickets with ease
//                         </motion.p>
//                     </motion>

//                     <motion.button className='w-fit bg-red-700 hover:bg-green-500 text-neutral-50 font-semibold px-3 py-6 rounded-md ease-in-out duration-300'>
//                         Reserve seat Now
//                     </motion.button>

//                 </motion.dev>

//                 <div className="w h-full rounded-md flex items-end justify-end absolute top-0 -right-48">
//                     <motion.img className="
//                     w-full aspect-[4/2] object-contain"
//                         src={Bus2}
//                         alt='Bus img'
//                         initial="initial"
//                         animate="animate"
//                         variants={imageVariants}/>
//                 </div>

//             </div>
//         </div>
//     )
// }

// // import bgImage from "../../../assets/bg1.jpg";

// // const Hero = () => {
// //   return (
// //     <div
// //       style={{
// //         backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5)), url(${bgImage})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center bottom',
// //         backgroundRepeat: 'no-repeat',
// //       }}
// //       className="Hero"
// //     >
// //       {/* Content */}
// //     </div>
// //   );
// // };
// export default Hero


import React from 'react';
import Bus2 from "../../../assets/bus5.png";
import { Link } from 'react-router-dom'; // Make sure to import Link
import Bus from "../../../assets/bg1.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
    const imageVariants = {
        initial: {
            x: "100%",
        },
        animate: {
            x: "3%",
            transition: {
                duration: 3,
                ease: "easeInOut",
            }
        }
    };

    return (
        <div
            className='w-full h-[calc(100vh-8ch)] flex items-center justify-center flex-col hero relative'
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5)), url(${Bus})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='flex-1 w-full flex items-stretch justify-between gap-12 pb-10 relative z-10'>
                <motion.div className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
                >
                    <motion.div className="space-y-5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                    >
                        <motion.h1 className="text-7xl font-extrabold text-neutral-700 dark:text-neutral-300 leading-[1.15]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
                        >
                            Reserve Your Bus
                            <span className='text-red-400 tracking-wider'> Tickets</span> Now
                        </motion.h1>
                        <motion.p className="text-lg font-normal text-neutral-700 dark:text-neutral-300 leading-[1.15] line-clamp-3 text-ellipsis"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                        >
                            Find and book your bus tickets with ease
                        </motion.p>
                    </motion.div>

                    <motion.button className='w-fit bg-red-700 hover:bg-green-500 text-neutral-50 font-semibold px-3 py-6 rounded-md ease-in-out duration-300'>
                        Reserve seat Now
                    </motion.button>
                </motion.div>

                {/* Bus Image */}
                <motion.div className="absolute w-auto h-full right-0 top-0"
                    initial="initial"
                    animate="animate"
                    variants={imageVariants}
                >
                    <motion.img
                        className="w-full h-full object-contain"
                        src={Bus2}
                        alt='Bus'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
