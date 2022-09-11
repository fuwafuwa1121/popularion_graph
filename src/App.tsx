import "./App.css";
import { fetchPrefectures } from "./resas_gateway";
import { Checkbox } from "./components/checkbox";
import { Prefecture } from "./types/prefecture";
import { ApiResponce } from "./types/api_responce";

type props = {
    prefCode: number;
    prefName: string;
};

function App() {
    const prefectures: Prefecture[] = fetchPrefectures().result;

    return (
        <div className="App">
            {prefectures.map((prefecture) => (
                <Checkbox
                    prefCode={prefecture.prefCode}
                    prefName={prefecture.prefName}
                    key={prefecture.prefCode}
                />
            ))}
        </div>
    );
}

export default App;
