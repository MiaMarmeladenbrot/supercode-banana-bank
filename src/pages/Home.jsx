import "./Home.css";
import Account from "../components/Account/Account";

const Home = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <section className="home">
      <p>
        {day}.{month}.{year} | {hours}:{minutes}
      </p>
      <h1>Banana Bank</h1>
      <p>Willkommen in deinem Accout, Mia!</p>
      <Account />
    </section>
  );
};

export default Home;
