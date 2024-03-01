import "./Home.css";
import Account from "../components/Account/Account";

const Home = () => {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year =
    date.getFullYear() < 10 ? `0${date.getFullYear()}` : date.getFullYear();

  return (
    <section className="home">
      <p>
        {day}.{month}.{year} | {hours}:{minutes}
      </p>
      <h1>Banana Bank</h1>
      <p>Willkommen in deinem Account, Mia!</p>
      <Account />
    </section>
  );
};

export default Home;
