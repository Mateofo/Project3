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
      <div className="flex-row my-4">
        {foods &&
          foods.map((food) => (
            <div key={food._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <div className="card-body px-1 py-1">
                  <img alt={food.name} src={`/images/${food.image}`}  width="300" height="200"/>
                  <p>Food: {food.name}</p>
                  <p>Category: {food.category}</p>
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