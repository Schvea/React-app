import { useEffect, useState } from "react";

function App() {

  const [jsonData, setJsonData] = useState(null)
  const fetchTrivia = async () => {
    fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=hard&type=multiple")
      .then((response) => response.json())
      .then((data) => setJsonData(data.results))
  };
  useEffect(() => {
    fetchTrivia()
  }, []);
  return (
    <div style={{ marginTop: "1rem" }}>
      {jsonData && (
        <ul>
          {jsonData.map(item => (
            <li key={item.difficulty}>{item.question}</li>
          ))}
        </ul>
      )}
    </div>);


}


export default App;


