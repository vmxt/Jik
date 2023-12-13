import { useState } from 'react';

function AppHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative bg-light shadow dark:bg-dark-800 font-sans">
            <div className="container px-6 py-3 mx-auto md:flex">
                <div className="flex items-center justify-between">
                    <div className='i-streamline-emojis-mouse text-4xl' />

                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-dark-500 dark:text-dark-200 hover:text-dark-600 dark:hover:text-dark-400 focus:outline-none focus:text-dark-600 dark:focus:text-dark-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <div className='i-carbon-menu text-3xl' />
                            ) : (
                                <div className='i-carbon-close-large text-3xl' />
                            )}
                        </button>
                    </div>
                </div>

                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-light dark:bg-dark-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                        <a href="#" className="px-2.5 py-2 text-dark-700 transition-colors duration-300 transform rounded-lg dark:text-light hover:bg-light-700 dark:hover:bg-dark-700 md:mx-2">Genre</a>
                        <a href="#" className="px-2.5 py-2 text-dark-700 transition-colors duration-300 transform rounded-lg dark:text-light hover:bg-light-700 dark:hover:bg-dark-700 md:mx-2">Season</a>
                        <a href="#" className="px-2.5 py-2 text-dark-700 transition-colors duration-300 transform rounded-lg dark:text-light hover:bg-light-700 dark:hover:bg-dark-700 md:mx-2">Type</a>
                    </div>

                    <div className="relative mt-4 md:mt-0">
                        <form>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full md:w-90 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-dark-500 focus:border-dark-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-500 dark:focus:border-dark-500"
                                    placeholder="Search anime..."
                                    required
                                />
                                <button
                                    className="text-dark absolute end-2.5 bottom-2.5 bg-gray-50 border border-gray-300 hover:bg-light-800 focus:ring-4 focus:outline-none focus:ring-dark-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-dark-600 dark:hover:bg-dark-700 dark:focus:ring-dark-800"
                                >
                                    Filter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AppHeader;
