import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;
  console.warn(firebaseKey);

  const seeAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={authorDetails.image} alt={authorDetails.first_name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name}{authorDetails.last_name}
        </h5>
        Author Email: {authorDetails.email}
        <hr />
        <h6>
          {authorDetails.favorite ? <span className="badge text-bg-warning">Favorite</span> : ''}
        </h6>
      </div>
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={seeAuthorDetails} />
        ))}
      </div>
    </div>
  );
}
