import React from 'react'
import Banderole from '../../components/banderole';
import LandingRedirectionButton from '../../components/landingRedirectionButton';
import "../../fonts/Monument/PPMonumentExtended-Black.otf";
import "../../fonts/Monument/PPMonumentExtended-Regular.otf";
import "./styles/style.css";

export const LandingPage = () => {
    return(
        <div>
            <div className='landingWrapper'>
                <img className='logo' src="../../../assets/whogotnext_logo.svg"></img>
                <div>
                    <div className='container'>
                        <h4 className='asktext'>Ask</h4>
                        <h2 className='titletext'>Who Got Next<br/>Cherchez votre partenaire</h2>
                        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing Morbin' Martin Time : Rise of Gru 4 Endgame. Duis pulvinar mauris est faucibus. Vestibulum un urna, lacinia eu sit amet, tempus porta ante. Nullam in velit vitae risus aliquet. </p>
                    </div>
                    <LandingRedirectionButton goto={"login"} innerButton={"Se connecter"}/>
                </div>
                <Banderole/>
            </div>
        </div>
    )
}

export default LandingPage;