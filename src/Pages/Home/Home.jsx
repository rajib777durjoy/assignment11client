import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Bookcategories from '../../Component/BookCategories/Bookcategories';

const Home = () => {
    return (
        <div className='w-[100%]'>
          <div>
            <Banner></Banner>
          </div>
           <div>
              <Bookcategories></Bookcategories>
           </div>
        </div>
    );
};

export default Home;