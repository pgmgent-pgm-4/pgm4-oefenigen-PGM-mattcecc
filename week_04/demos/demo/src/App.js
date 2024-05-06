import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeArea } from "./context/ThemeContext";
import {useFetch} from "./hooks/useFetch";

const url = "https://fakestoreapi.com/products";
function App() {
  const { data: products, isLoading, isError } = useFetch(url);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <ThemeArea> 
      <ThemeSwitcher />
      <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>€{product.price}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
    </ThemeArea>
    
  );
}

export default App;
