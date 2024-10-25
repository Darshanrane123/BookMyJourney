import React from 'react';

const Checkout = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10 relative'>
            <div className="grid grid-cols-5 gap-16 items-start">
                <div className="col-span-3 space-y-7 pr-20">
                    <h2 className="text-x1 text-neutral-800 dark:text-neutral-100 font-medium">
                        Passenger Information
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="fullname" className="block mb-2 font-black text-neutral-800 dark:text-neutral-300">
                                Full Name :
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                placeholder="eg. xyz"
                                name="fullname"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="block mb-2 font-black text-neutral-800  dark:text-neutral-300">
                                Email Address :
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="eg. xyz@gmail.com"
                                name="email"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />
                            <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-400 font-normal">
                                You will get your ticket via this email address :
                            </small>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 font-black text-neutral-800 dark:text-neutral-300">
                                Phone Number :
                            </label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="eg. +91-6736788782"
                                name="phone"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />
                        </div>
                        <div>
                            <label htmlFor="altphone" className="block mb-2 font-black text-neutral-800 dark:text-neutral-300">
                                Alternate Phone Number :
                            </label>
                            <input
                                type="number"
                                id="altphone"
                                placeholder="9134-67367-88782"
                                name="altphone"
                                className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Pay Now button in the bottom-right corner */}
            <div className="absolute bottom-4 right-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default Checkout;
