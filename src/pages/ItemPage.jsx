import { useParams } from 'react-router-dom';

export default function ItemPage() {
  const { item } = useParams();

  return <div>{item}</div>;
}
