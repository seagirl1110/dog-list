import { fetchDog } from '../../redux/thunks';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function DogList() {
  const { data: dogs, status, error } = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDog());
  }, []);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;
  if (status === 'succeeded')
    return (
      <div>
        <h1>Dog Breeds</h1>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <div>Breed: {dog.name}</div>
            <div>Temperament: {dog.temperament}</div>
            <hr />
          </div>
        ))}
      </div>
    );
}

export default DogList;
