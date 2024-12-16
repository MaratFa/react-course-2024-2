import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Leo" age={40} isStudent={true} />
      <Student name="Ken" age={30} isStudent={false} />
      <Student name="Bob" age={20} isStudent={false} />
      <Student name="Den" age={24} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
