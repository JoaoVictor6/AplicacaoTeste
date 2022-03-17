import React from "react";
import { Link } from "react-router-dom"; 

import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HistoryEdu from "@mui/icons-material/HistoryEdu";

import {AreaHeader} from './styled'
import { Title } from './styled';

function Header(){
    return (
        <AreaHeader>
         <div className="container">
             <div className="logo">
                 <img src="../../../logo.png" />

                 <tile className="title"><strong>Portal de Relacinamento Taugor</strong></tile>
             </div>

             

             <nav>
                 <ul>
                     <li><Link to="/"><ReceiptLongIcon/>Solicitações</Link></li>
                     <li><Link to="/nova-solicitacao"><HistoryEdu/>Nova Solicitação</Link></li>
                     <li><img className="avatar" src="../../../avatar.png"/></li>
                 </ul>
             </nav>
         </div>
        </AreaHeader>
    );
}

export default Header;