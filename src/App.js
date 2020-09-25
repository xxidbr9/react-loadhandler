import React from "react";
import { useLoad } from "./utils/hooks";

function App() {
    const { handlerLoad, loadRef, percentage, loading } = useLoad();

    let range = [];
    const nMax = 32;
    for (let i = 0; i < nMax; i++) {
        range.push(i);
    }

    return (
        <div className='App' id='test'>
            {!!loading && (
                <div style={{ fontSize: "100px", fontWeight: "900" }}>
                    {percentage} %
                </div>
            )}
            <div style={{ display: !loading ? "" : "none" }}>
                {range.map(e => (
                    <img
                        key={e}
                        ref={loadRef}
                        alt={`is a ${e}`}
                        src={`https://source.unsplash.com/random/${e}`}
                        onLoad={handlerLoad}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
