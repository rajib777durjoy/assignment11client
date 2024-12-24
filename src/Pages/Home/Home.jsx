import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Bookcategories from '../../Component/BookCategories/Bookcategories';
import Success from '../../Component/Extra/Success';
import AuthorList from '../../Component/Extra/AuthorList';

const Home = () => {
    return (
        <div className='w-[100%]'>
          <div>
            <Banner></Banner>
          </div>
          <div>
            <Success></Success>
          </div>
           <div>
              <Bookcategories></Bookcategories>
           </div>
           <div>
            <AuthorList></AuthorList>
           </div>
        </div>
    );
};

export default Home;