import { useFetchData } from "./hooks/useFetchData";
import { useTrackMouse } from "./hooks/useTrackMouse";

function App() {
  const {
    data: recipes,
    isLoading,
    error,
  } = useFetchData("https://restapi.fr/api/recipes");

  const [x, y] = useTrackMouse();

  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ backgroundColor: "#fefefe", height: "100vh", width: "100%" }}
    >
      <p>
        x : {x} | y: {y}
      </p>
      {isLoading ? (
        <p>Chargement ....</p>
      ) : (
        <ul>
          {recipes.map((r) => (
            <li key={r._id}>{r.title}</li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

// function App() {
//   const [x, y] = useTrackMouse();

//   return (
//     <div
//       className="d-flex flex-row justify-content-center align-items-center"
//       style={{ backgroundColor: "#fefefe", height: "100vh", width: "100%" }}
//     >
//       <h1>
//         x : {x} | y : {y}
//       </h1>
//     </div>
//   );
// }

export default App;
