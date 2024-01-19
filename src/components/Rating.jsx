import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';

import styles from './Rating.module.css';

export default function Rating({ initialRating }) {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                    key={star}
                    icon={rating >= star ? filledStar : emptyStar}
                    style={{ color: "#03045E" }}
                    onClick={() => handleStarClick(star)}
                />
            ))}
        </div>
    );
};
