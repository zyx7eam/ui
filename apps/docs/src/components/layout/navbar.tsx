import React from 'react';

const Navbar = () => {
  return (
    <header className='border-primary border-b-2 p-4'>
      <nav className='flex items-center justify-between'>
        <h1>@Geeks/UI</h1>
        <div className='flex'>
          <div>Links</div>
          <div>Additional Actions</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
