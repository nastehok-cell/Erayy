import Search from '../components/search'

//renderöi Home-sivun ja search-komponentin
const Home = () => {
  return (
    <main className="home">
      <h1 className="hometitle"> Translate words into Somali</h1>
      <Search />
      <div className="info">
        <div className="word">
        </div>
      </div>
    </main>
  )
};

export default Home;