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
                    <div className='i-streamline-emojis-tangerine text-5xl' />

                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} type="button" aria-label="toggle menu">
                            {!isOpen ? (
                                <div className='i-carbon-menu text-3xl text transition'  />
                            ) : (
                                <div className='i-carbon-close-large text-3xl text transition' />
                            )}
                        </button>
                    </div>
                </div>

                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-light dark:bg-dark-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                        <a href="#" className="px-2.5 text py-2 transition rounded-lg md:mx-2">Genre</a>
                        <a href="#" className="px-2.5 text py-2 transition rounded-lg md:mx-2">Season</a>
                        <a href="#" className="px-2.5 text py-2 transition rounded-lg md:mx-2">Type</a>
                    </div>

                    <div className="relative mt-4 md:mt-0">
                        <form>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <div className='i-carbon-search text-lg' />
                                </div>
                                <input
                                    type="search"
                                    className="block w-full md:w-90 p-4 ps-10 text-sm text-gray-900 border bg-gray-50 rounded-lg"
                                    placeholder="Search anime..."
                                />
                                <button
                                    className="text bg-gray-50 border rounded-lg transition absolute end-2.5 bottom-2.5 text-sm px-4 py-2"
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
