import React, { useState } from 'react';
import Link from './Link';
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ route }) => {
  const[open,setOpen]=useState(true);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/contact", name: "Contact" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/about", name: "About" },
    { id: 5, path: "/services", name: "Services" },
    { id: 6, path: "/blog", name: "Blog" },
    { id: 7, path: "/faq", name: "FAQ" },
    { id: 8, path: "/careers", name: "Careers" },
  ];
  return (
    <nav className='text-2xl'>
      <div className='md:hidden' onClick={()=>setOpen(!open)}>
        {open===true ? <TbMenu2 className=''></TbMenu2> : <RxCross2 className=''></RxCross2> }
         
      </div>
     
      <ul className={` md:static sm:absolute  md:flex  ${open===true ?'hidden':''} bg-yellow-300`}>
        {routes.map(route => <Link key={route.id} route={route}></Link>
         )}
      </ul>


    </nav>
  );
};

export default Navbar;