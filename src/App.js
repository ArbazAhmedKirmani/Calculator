import React, { useState } from 'react';


const App = () => {

    const [calculate, setCAlculate] = useState('')

    return (
        <>
            <input name='result' placeholder='0' value={calculate} />
        </>
    );
};


export default App;