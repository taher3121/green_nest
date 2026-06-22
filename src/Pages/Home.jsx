
import { Link } from "react-router";
import HeroSlider from "../Components/HeroSlider";
import SingleCard from "../Components/SingleCard";
import usePlants from "../Hooks/UsePlants";

const Home = () => {

    const{data}= usePlants()

    const topRated = data.slice(0,6)
    console.log(topRated)
    return (
        <div>
            <div>
                <HeroSlider></HeroSlider>
            </div>
            <div className="m-10 flex flex-col items-center">
                <div>
                    <p className="text-3xl font-semibold">Top Rated Plants</p>
                </div>
                <div className="m-3 grid grid-cols-3 gap-3">
                    {
                        topRated.map(plant => <SingleCard plant={plant} key={plant.plantId}></SingleCard>)
                    }
                </div>
                <div>
                    <button className="btn">
                        <Link to='/plants'>Show All</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;