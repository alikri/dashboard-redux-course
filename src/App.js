import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import { addPositions } from 'store/positions/position-actions';
import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(data))
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
