import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorForm from '../../../components/forms/AuthorForm';

export default function EditAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  const [editItem, setEditItem] = useState({});
  console.warn(firebaseKey);

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<AuthorForm obj={editItem} />);
}
