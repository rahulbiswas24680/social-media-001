import React from 'react'
import { TiSocialAtCircular } from "react-icons/ti";
import { GoHome } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    const handleOnClick = ( tabName ) => {
        setSelectedTab(tabName);
    }
    

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "180px"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <TiSocialAtCircular style={{width: "40px", height: "40px"}} />
                <span className="fs-4">Socio</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={() => handleOnClick("Home")}>
                    <a href="#" className={`nav-link text-white ${selectedTab == 'Home' && 'active' }`} aria-current="page">
                        <GoHome className='me-2' />
                        Home
                    </a>
                </li>
                <li onClick={() => handleOnClick("Create Post")}>
                    <a href="#" className={`nav-link text-white ${selectedTab == 'Create Post' && 'active' }`}>
                    <IoCreateOutline className='me-2' />
                        Create Post
                    </a>
                </li>
                
            </ul>
            
        </div>
    )
}

export default Sidebar