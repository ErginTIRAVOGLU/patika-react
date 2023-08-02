import "./App.css";
import MyHeader from "./components/MyHeader";

import User from "./components/User";

const otherFriends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Tayun" },
  { id: 3, name: "Gökhan" },
  { id: 4, name: "Ayşe" },
  { id: 5, name: "Fatma" }

];
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <User
        adi="Ergin"
        yasi={41}
        isLoggedIn={true}
        digerYasi={40}
        friends={["Ahmet", "Tayun", "Gökhan", "Ayşe", "Fatma"]}
        otherFriends={otherFriends}
      />
      <MyHeader />
    </div>
  );

  //adi={12} Error on console
}

export default App;
