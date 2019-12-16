import ANA from "../assets/logos/ANA.svg";
import ARI from "../assets/logos/ARI.svg";
import BOS from "../assets/logos/BOS.svg";
import BUF from "../assets/logos/BUF.svg";
import CAR from "../assets/logos/CAR.svg";
import CBJ from "../assets/logos/CBJ.svg";
import CGY from "../assets/logos/CGY.svg";
import CHI from "../assets/logos/CHI.svg";
import COL from "../assets/logos/COL.svg";
import DAL from "../assets/logos/DAL.svg";
import DET from "../assets/logos/DET.svg";
import EDM from "../assets/logos/EDM.svg";
import FLA from "../assets/logos/FLA.svg";
import LAK from "../assets/logos/LAK.svg";
import MIN from "../assets/logos/MIN.svg";
import MTL from "../assets/logos/MTL.svg";
import NJD from "../assets/logos/NJD.svg";
import NSH from "../assets/logos/NSH.svg";
import NYI from "../assets/logos/NYI.svg";
import NYR from "../assets/logos/NYR.svg";
import OTT from "../assets/logos/OTT.svg";
import PHI from "../assets/logos/PHI.svg";
import PIT from "../assets/logos/PIT.svg";
import SJS from "../assets/logos/SJS.svg";
import STL from "../assets/logos/STL.svg";
import TBL from "../assets/logos/TBL.svg";
import TOR from "../assets/logos/TOR.svg";
import VAN from "../assets/logos/VAN.svg";
import VGK from "../assets/logos/VGK.svg";
import WPG from "../assets/logos/WPG.svg";
import WSH from "../assets/logos/WSH.svg";

import React from "react";

const TeamLogo = ({ teamName }) => {
  const logos = {
    ANA: ANA,
    ARI: ARI,
    BOS: BOS,
    BUF: BUF,
    CAR: CAR,
    CBJ: CBJ,
    CGY: CGY,
    CHI: CHI,
    COL: COL,
    DAL: DAL,
    DET: DET,
    EDM: EDM,
    FLA: FLA,
    LAK: LAK,
    MIN: MIN,
    MTL: MTL,
    NJD: NJD,
    NSH: NSH,
    NYI: NYI,
    NYR: NYR,
    OTT: OTT,
    PHI: PHI,
    PIT: PIT,
    SJS: SJS,
    STL: STL,
    TBL: TBL,
    TOR: TOR,
    VAN: VAN,
    VGK: VGK,
    WPG: WPG,
    WSH: WSH
  };

  return <img src={logos[teamName]} alt={teamName}></img>;
};

export default TeamLogo;
