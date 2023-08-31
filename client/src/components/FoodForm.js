import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_FOOD} from '../utils/mutations';

const FoodForm =({bodyId}) => {
  const [nameText, setNameText] = useState('');
  const [calorieText, setCalorieText] = useState('');
  const [fatText, setFatText] = useState('');
  const [carbText, setCarbText] = useState('');
  const [proteinText, setProteinText] = useState('');
  const [categoryText,setCategoryText] =useState('');
    const [AddFood] = useMutation(ADD_FOOD);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await AddFood({
            variables: { bodyId,categoryText,nameText,calorieText,fatText,carbText,proteinText },
          });
    
          setNameText('');
          setCalorieText('')
          setFatText('')
          setCarbText('')
          setProteinText('')
          setCategoryText('')
         

        } catch (err) {
          console.error(err);
        }
      };



      const handleNameChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'foodName') {
          setNameText(value);  
        }
      };
      const handleCategoryChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'foodCategory') {
          setCategoryText(value);  
        }
      };



      const handleCalorieChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'foodcalories') {
          setCalorieText(value);  
        }
      };

      const handleFatChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'foodfats') {
          setFatText(value);  
        }
      };

      const handleCarbChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'foodcarbs') {
          setCarbText(value);  
        }
      };

      const handleProteinChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'foodprotein') {
          setProteinText(value);  
        }
      };


      

    return (
        <div>
          <p>{bodyId}</p>
          <h4>Add your own customized food to the plan</h4>
          <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
        <div className="col-12 col-lg-9">
          <textarea
            name="foodName"
            placeholder="Add your food's name..."
            value={nameText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleNameChange}
          ></textarea>
        </div>

        { <div className="col-12 col-lg-9">
          <textarea
            name="foodCategory"
            placeholder="Add your food's Category..."
            value={categoryText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleCategoryChange}
          ></textarea>
        </div> }

        <div className="col-12 col-lg-9">
          <textarea
            name="foodcalories"
            placeholder="Add your food's calories..."
            value={calorieText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleCalorieChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-9">
          <textarea
            name="foodfats"
            placeholder="Add your food's fats..."
            value={fatText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleFatChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-9">
          <textarea
            name="foodcarbs"
            placeholder="Add your food's carbs..."
            value={carbText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleCarbChange}
          ></textarea>
        </div>


        <div className="col-12 col-lg-9">
          <textarea
            name="foodprotein"
            placeholder="Add your food's protein..."
            value={proteinText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleProteinChange}
          ></textarea>
        </div>


        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Food
          </button>
        </div>
      </form>
    </div>
  )
}

  export default FoodForm











