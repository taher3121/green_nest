import { Link } from "react-router";


const SingleCard = ({ plant }) => {
    
    const{plantName,description,plantId} = plant
    
    return (
        <div>
            <Link to={`/plantDetails/${plantId}`}>
                <div className="card bg-base-100 w-auto shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{plantName}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Details</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleCard;