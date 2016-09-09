import { MainStats } from "./mainStats";
export class SecondaryStats
{
  private hp:number;        //- Health Points (HP)
  private mp:number;        //- Mana Points (MP)
  private sp:number;        //- Stamina Points (SP)

  private phAtk:number;     //- Physical Attack (Ph. Atk.)
  private mgAtk:number;     //- Magical Attack (Mg. Atk.)
  private rgAtk:number;     //- Ranged Attack (Rg. Atk.)
  private critCh:number;    //- Critical Chance (Crit. Ch.) in %
  private acc:number;       //- Accuracy (Acc)

  private phDef:number;     //- Physical Defense (Ph. Def.)
  private mgDef:number;     //- Magical Defense (Mg. Def.)
  private dc:number;        //- Dodge Chance (D. C.) in %

  private init:number;      //- Initiative

  constructor() //base constructor
  {
    this.hp = 0;
    this.mp = 0;
    this.sp = 0;

    this.phAtk = 0;
    this.mgAtk = 0;
    this.rgAtk = 0;
    this.critCh = 0;
    this.acc = 0;

    this.phDef = 0;
    this.mgDef = 0;
    this.dc = 0;

    this.init = 0;
  }

  public calculateSecondaryStats(mainStats:MainStats)
  { //TODO: This needs to be constantly balanced throughout development
    this.hp = mainStats.getVIT() * 100;   //HP per VIT point
    this.mp = mainStats.getINT() * 10;    //MP per INT point
    this.sp = mainStats.getSTR() * 10;    //SP per STR point

    this.phAtk = mainStats.getSTR() * 50;   //phAtk per STR point
    this.mgAtk = mainStats.getINT() * 50;   //mgAtk per INT point
    this.rgAtk = mainStats.getDEX() * 50;   //rgAtk per DEX point
    this.critCh = ((mainStats.getLUK() * 10) / 1000) * 100;   //critCh%
    this.acc = mainStats.getDEX() * 10;     //acc per DEX point

    this.phDef = mainStats.getVIT() * 50; //phAtk per VIT point
    this.mgDef = mainStats.getINT() * 50; //mgAtk per INT point
    this.dc = ((mainStats.getAGI() * 10) / 1000) * 100; //dc%

    this.init = mainStats.getAGI(); //For now, they will be the same
  }
}
