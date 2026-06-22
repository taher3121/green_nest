import SingleCard from "../Components/SingleCard";
import usePlants from "../Hooks/UsePlants";


const Plants = () => {
    
    const{data}= usePlants()
    return (
        <div className="m-3 grid grid-cols-3 gap-3">
            {
                data.map(plant => <SingleCard plant={plant} key={plant.plantId}></SingleCard>)
            }
        </div>
    );
};

export default Plants;