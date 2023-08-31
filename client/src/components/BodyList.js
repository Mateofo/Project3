import React from 'react';
import { Link } from 'react-router-dom';

const bodyList = ({ bodys, title }) => {
    if (!bodys.length) {
        return <h3>No bodys Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {bodys &&
                bodys.map((body) => (
                    <div key={body._id} className="card mb-3">
                        <img
                            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt={body.plan}
                        />
                        <Link
                            className="btn btn-primary btn-block btn-squared"
                            to={`/bodies/${body._id}`}
                        >
                            Join the discussion on {body.plan}.
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default bodyList;