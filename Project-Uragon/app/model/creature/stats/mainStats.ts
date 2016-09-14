import { StatsEnum } from "./statsEnum";
export class MainStats
{
  private str:number; //- Strength(STR)
  private int:number; //- Intelligence(INT)
  private dex:number; //- Dexterity(DEX)
  private vit:number; //- Vitality(VIT)
  private agi:number; //- Agility(AGI)
  private luk:number; //- Luck(LUK)

  private strMod:number; //- Strength Modifier
  private intMod:number; //- Intelligence Modifier
  private dexMod:number; //- Dexterity Modifier
  private vitMod:number; //- Vitality Modifier
  private agiMod:number; //- Agility Modifier
  private lukMod:number; //- Luck Modifier

  constructor()
  constructor(json:any)
  constructor(json?:any)
  {
    if(json)
    {
      this.str = json[StatsEnum.STRENGTH];
      this.int = json[StatsEnum.INTELLIGENCE];
      this.dex = json[StatsEnum.DEXTERITY];
      this.vit = json[StatsEnum.VITALITY];
      this.agi = json[StatsEnum.AGILITY];
      this.luk = json[StatsEnum.LUCK];

      this.strMod = json[StatsEnum.STRENGTH_MOD];
      this.intMod = json[StatsEnum.INTELLIGENCE_MOD];
      this.dexMod = json[StatsEnum.DEXTERITY_MOD];
      this.vitMod = json[StatsEnum.VITALITY_MOD];
      this.agiMod = json[StatsEnum.AGILITY_MOD];
      this.lukMod = json[StatsEnum.LUCK_MOD];
    }else{
      this.str = 0;
      this.int = 0;
      this.dex = 0;
      this.vit = 0;
      this.agi = 0;
      this.luk = 0;

      this.strMod = 0;
      this.intMod = 0;
      this.dexMod = 0;
      this.vitMod = 0;
      this.agiMod = 0;
      this.lukMod = 0;
    }
  }

  public toJSON()
  {
    var json = `{
      ${StatsEnum.STRENGTH}:${this.str},
      ${StatsEnum.INTELLIGENCE}:${this.int},
      ${StatsEnum.DEXTERITY}:${this.dex},
      ${StatsEnum.VITALITY}:${this.vit},
      ${StatsEnum.AGILITY}:${this.agi},
      ${StatsEnum.LUCK}:${this.luk},
      ${StatsEnum.STRENGTH_MOD}:${this.strMod},
      ${StatsEnum.INTELLIGENCE_MOD}:${this.intMod},
      ${StatsEnum.DEXTERITY_MOD}:${this.dexMod},
      ${StatsEnum.VITALITY_MOD}:${this.vitMod},
      ${StatsEnum.AGILITY_MOD}:${this.agiMod},
      ${StatsEnum.LUCK_MOD}:${this.lukMod}
    }`;
  }

  public getSTR() { return (this.str + this.strMod); }
  public getINT() { return (this.int + this.intMod); }
  public getDEX() { return (this.dex + this.dexMod); }
  public getVIT() { return (this.vit + this.vitMod); }
  public getAGI() { return (this.agi + this.agiMod); }
  public getLUK() { return (this.luk + this.lukMod); }

  public getSTRBase() { return this.str; }
  public getINTBase() { return this.int; }
  public getDEXBase() { return this.dex; }
  public getVITBase() { return this.vit; }
  public getAGIBase() { return this.agi; }
  public getLUKBase() { return this.luk; }

  public setSTRBase(newSTR:number) { this.str = newSTR; }
  public setINTBase(newINT:number) { this.int = newINT; }
  public setDEXBase(newDEX:number) { this.dex = newDEX; }
  public setVITBase(newVIT:number) { this.vit = newVIT; }
  public setAGIBase(newAGI:number) { this.agi = newAGI; }
  public setLUKBase(newLUK:number) { this.luk = newLUK; }

  public setSTRModifier(newSTR:number) { this.strMod = newSTR; }
  public setINTModifier(newINT:number) { this.intMod = newINT; }
  public setDEXModifier(newDEX:number) { this.dexMod = newDEX; }
  public setVITModifier(newVIT:number) { this.vitMod = newVIT; }
  public setAGIModifier(newAGI:number) { this.agiMod = newAGI; }
  public setLUKModifier(newLUK:number) { this.lukMod = newLUK; }

  public addModifier(mod:[StatsEnum,number])
  {
    switch(mod[0])
    {
      case StatsEnum.STRENGTH :
        this.strMod += mod[1];
        break;
      case StatsEnum.INTELLIGENCE :
        this.intMod += mod[1];
        break;
      case StatsEnum.DEXTERITY :
        this.dexMod += mod[1];
        break;
      case StatsEnum.VITALITY :
        this.vitMod += mod[1];
        break;
      case StatsEnum.AGILITY :
        this.agiMod += mod[1];
        break;
      case StatsEnum.LUCK :
        this.lukMod += mod[1];
        break;
      default :
        console.log(`
          ERROR: Unrecognised MainStatEnum in MainStat:addEquipmentModifier()
          `);
        break;
    }
  }

  public removeModifier(mod:[StatsEnum,number])
  {
    switch(mod[0])
    {
      case StatsEnum.STRENGTH :
        this.strMod -= mod[1];
        break;
      case StatsEnum.INTELLIGENCE :
        this.intMod -= mod[1];
        break;
      case StatsEnum.DEXTERITY :
        this.dexMod -= mod[1];
        break;
      case StatsEnum.VITALITY :
        this.vitMod -= mod[1];
        break;
      case StatsEnum.AGILITY :
        this.agiMod -= mod[1];
        break;
      case StatsEnum.LUCK :
        this.lukMod -= mod[1];
        break;
      default :
        console.log(`
          ERROR: Unrecognised MainStatEnum in MainStat:removeEquipmentModifier()
          `);
        break;
    }
  }
}
