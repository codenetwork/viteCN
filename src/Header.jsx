import Sponsor from './Sponsor';
import { Launch, Link } from '@mui/icons-material';

function Header() {
    return (
        <div id="header">
            <div id="header-content">
                <div className="contentwrapper">
                    <div className='edges'>
                        <img src="./logo.png" alt="Code Network logo" />
                        <h1>Join the community</h1>
                        <div style={{ marginBottom: "32px" }}>
                            <a style={{ backgroundColor: "#34cd3c", color: "white", padding: "0.5em 2em", borderRadius: "0.5em", fontSize: "1.5em", fontWeight: "bold" }} href="/competition">Can you design our new website? <Link style={{ marginLeft: "0.5rem" }} /></a>
                        </div>
                        <a href="https://qutcode.getqpay.com/" id="action">Sign up <Launch style={{ marginLeft: "0.5rem" }} /></a>
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
