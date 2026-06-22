import { useEffect, useState } from "react";

const usePlants = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch("/Data.json")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });
}, []);

    return{data,loading}
}

export default usePlants;