import Sponsor from './Sponsor';
import { Launch, Link } from '@mui/icons-material';
import "./Header.css";
import { useEffect } from 'react';

function Header() {
    useEffect(() => {
        document.title = "Home | Code Network"
    }, [])

    return (
        <div id="header">
            <div id="header-content">
                <div className="contentwrapper">
                    <div className='edges'>
                        <img src="./logo.png" alt="Code Network logo" />
                        <h1>Join the community</h1>
                        <a href="https://campus.hellorubric.com/?tab=memberships&s=4917" target="_blank" id="action">Sign up <Launch style={{ marginLeft: "0.5rem" }} /></a>
                        <p> </p>
                        <table style={{ margin: "0 auto" }}>
                            <tr>
                                <th style={{ textAlign: "right" }}>
                                    <a href="https://discordapp.com/invite/f6VRUW9"><img src="/discord.svg" className="tab" /></a>
                                </th>
                                <th style={{ textAlign: "left" }} >
                                    <a href="https://facebook.com/groups/WeCodeALot"><img src="/facebook.svg" className="tab" /></a>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
                <Sponsor />
            </div>
        </div >
    )
}

export default Header;
