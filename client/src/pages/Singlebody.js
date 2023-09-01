import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import FoodForm from '../components/FoodForm';
import FoodList from '../components/FoodList';

import { GET_SINGLEBODY } from '../utils/queries';
import Auth from '../utils/auth';

const SingleBody = () => {
  const { bodyId } = useParams();


  const { loading, data } = useQuery(GET_SINGLEBODY, {
    variables: { bodyId: bodyId },
  });

  const body = data?.body || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="body">
        {Auth.loggedIn() ? (
          <div className="wrapper">
            <div className="my-5">
              <FoodList foods={body.foods} />
            </div>
            <div className="m-3 p-4 card card-has-bg">
              <FoodForm bodyId={body._id} />
            </div>
          </div>
        ) : (
          <span>(log in to check out)</span>
        )}
      </div>
    );
};

export default SingleBody;