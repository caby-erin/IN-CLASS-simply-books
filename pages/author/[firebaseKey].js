import { useRouter } from 'next/router';

export default function ViewAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  console.warn(firebaseKey);
}
