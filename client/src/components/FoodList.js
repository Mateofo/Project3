import React from 'react';

const FoodList = ({ foods = [] }) => {
  if (!foods.length) {
    return <h3>No foods Yet</h3>;
  }

  return (
    <>
    <h3 className="p-5 display-inline-block" style={{ borderBottom: '1px dotted #1a1a1a' }}>
      Foods
    </h3>
    <div className="team-boxed my-4">
      {foods &&
        foods.map((food) => (
          <div key={food._id} className="item">
            <div className="box">
              <div className="card-body">
                <img alt={food.name} src={`/images/${food.image}`} />
                <p className="name">Food: {food.name}</p>
                <p className="title">Category: {food.category}</p>
                <p>Calories: {food.calories}</p>
                <p>Fats: {food.fats}</p>
                <p>Carbs: {food.carbs}</p>
                <p>Protein: {food.protein}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </>
  );
};

export default FoodList;