import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import FoodForm from '../components/FoodForm'
import FoodList from '../components/FoodList'

import { GET_SINGLEBODY } from '../utils/queries';

const SingleBody =()=>{
  const {bodyId} = useParams();

  const { loading, data } = useQuery(GET_SINGLEBODY, {
    variables: { bodyId: bodyId },
  });

  const body = data?.body || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return(
    <div>
    <div className="my-5">
    <FoodList foods={body.foods} />
  </div>
  <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
    <FoodForm  bodyId={body._id}/>
    </div>
    </div>


  )
}

export default SingleBody;