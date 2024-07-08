import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const params = useParams();

    return (
        <>
            <h1>Ola, {params.username}</h1>
        </>
    );
}
