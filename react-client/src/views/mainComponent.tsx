import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <>
        <div className='bg-customSimilar4 shadow-lg mx-auto my-0 max-w-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8'>
            <div className='sm:flex sm:items-center sm:justify-between bg-gradient-to-t bg-red-100 bg-clip-text text-transparent'>
                <div>
                    <a href="/">
                        <img src="/icons/logo.png" className="w-64 h-auto" />
                    </a>
                </div>
                <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                            <img src="/icons/ubicacion.png" alt="Icono de ubicación" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="flex items-center justify-center align-middle h-8 w-auto rounded-md border border-customGreen bg-customGreen px-4 py-3 text-center font-medium text-white transition hover:bg-transparent hover:text-customGreen">
                        Log in / Log out
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default MyComponent;