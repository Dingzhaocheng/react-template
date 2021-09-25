import React from "react";
import { render } from "react-dom";
import Index from "./pages/Index";

const App:React.FC<{}> = ()=>(<div>
    <Index/>
</div>)

render(<App/>,document.getElementById('app'))