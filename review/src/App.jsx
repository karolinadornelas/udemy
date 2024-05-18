import "./App.css";
import CakeDetails from "./components/CakeDetails";
import ConditionalRender from "./components/ConitionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import UserDetails from "./components/UserDetails";

function App() {
  const cakes = [
    {
      id: 1,
      flavor: "chocolate",
      topping: "musse de ninho",
      filling: "brigadeiro belga",
      fatia: "true",
    },
    {
      id: 2,
      flavor: "morango",
      topping: "musse de chocolate",
      filling: "brigadeiro de ninho",
      fatia: "false",
    },
    {
      id: 3,
      flavor: "chocolate",
      topping: "musse de chocolate",
      filling: "brigadeiro ninho",
      fatia: "false",
    },
  ];

  const users = [
    {
      id: 1,
      name: "karolina",
      age: 23,
      profissao: "desenvolvedora front-end",
    },
    {
      id: 2,
      name: "kariny",
      age: 14,
      profissao: "artesã",
    },
    {
      id: 3,
      name: "lilo",
      age: 12,
      profissão: "atriz mirim",
    },
    {
      id: 4,
      name: "nicolas",
      age: 23,
      profissao: "analista de qualidade",
    },
  ];

  function showMessage() {
    console.log("evento do componente pai");
  }

  return (
    <div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <CakeDetails
        flavor="chocolate"
        filling="musse de ninho"
        topping="brigadeiro belga"
        fatia={true}
      />
      {/*loop array*/}
      {cakes.map((cake) => (
        <CakeDetails
          key={cake.id}
          flavor={cake.flavor}
          topping={cake.topping}
          filling={cake.topping}
          fatia={cake.fatia}
        />
      ))}

      <Container>
        <h5>este é o conteúdo do container</h5>
      </Container>
      {/*função*/}
      <ExecuteFunction functionX={showMessage} />

      {users.map((pessoas) => (
        <UserDetails
          key={pessoas.id}
          name={pessoas.name}
          age={pessoas.age}
          profissao={pessoas.profissao}
        />
      ))}
    </div>
  );
}

export default App;
