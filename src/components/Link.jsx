

const Link = ({route}) => {
  return (
    
       <li className='mr-2' > <a href={route.path}> {route.name}</a>
            
       </li>
  
  );
};

export default Link;