import { useParams } from "react-router-dom";

export default function ProductView() {
    let id = useParams();
    return(
        <main>
            <h1>This is product view page, param id: <span className="font-bold text-xl">{id}</span></h1>
        </main>
    );
}