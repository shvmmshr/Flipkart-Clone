
import { Fragment } from "react";

//components
import NavBar from "./navbar";
import Banner from "./banner";

import { styled ,Box} from "@mui/material";

const Component=styled(Box)`
    padding :10px 10px;
    background: #F2F2F2;
`

const Home=() =>{
    return(
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </Fragment>
    )
}
export default Home;