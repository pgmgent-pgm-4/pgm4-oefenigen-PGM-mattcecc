import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from './graphql/queries';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
