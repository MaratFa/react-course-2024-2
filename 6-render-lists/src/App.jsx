import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Bob" />
      <UserGreeting isLoggedIn={true} username="Bob" />
      <UserGreeting />
    </>
  );
}

export default App;
