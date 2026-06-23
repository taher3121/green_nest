import { useParams } from "react-router";
import usePlants from "../Hooks/UsePlants";


const PlantsDetails = () => {
    const { id } = useParams();
    const { data } = usePlants();
    // console.log(data)
    const plant = data.find(p => p.plantId === Number(id));

    if (!plant) {
        return <div>Loading...</div>;
    }

    const { plantName, category, price, rating, availableStock, careLevel, description, providerName } = plant

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{plantName}</h2>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{availableStock}</p>
                    <p>{careLevel}</p>
                    <p>{description}</p>
                    <p>{providerName}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PlantsDetails;