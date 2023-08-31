import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_BODYS } from '../utils/queries';
import BodyList from '../components/BodyList';
const MainPage = () => {
  const { loading, data } = useQuery(GET_BODYS);
   const bodys = data?.bodys || [];

  return(
    <main>
      { <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
             <BodyList
               bodys={bodys}
               title="Some Feed for Body(s)..."
             />
            
          )}
        </div> }
    </main>
  )

}

export default MainPage;