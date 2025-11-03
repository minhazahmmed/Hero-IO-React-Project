import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    const navigation = useNavigation(); 

    const isLoading = navigation.state === 'loading'; 

    return (
        <div className='flex flex-col min-h-screen relative'>
          
            <Navbar />

        
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-50">
                    <span className="loading loading-bars loading-lg text-[#001931]"></span>
                </div>
            )}

            <div className='flex-1'>
                <Outlet />
            </div>

            <Footer />
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default MainLayout;
