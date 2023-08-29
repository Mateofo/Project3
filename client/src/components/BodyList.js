import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const bodyList = ({bodys,title}) => {
    if(!bodys.length){
        return <h3>No bodys Yet</h3>
    }

        return (
        <div>
            <h3>{title}</h3>
            {bodys&&bodys.map((body)=>(
                <div key={body._id} className="card mb-3">
                    <img alt="">{body.plan}</img>       
                    <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/bodies/${body._id}`}
                    >
                    Join the discussion on this Body Plan.
                    </Link>
                </div>
            ))}
        </div>
        )}

export default bodyList