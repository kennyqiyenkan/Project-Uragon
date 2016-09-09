import { MainStats } from "./mainStats";
import { SecondaryStats } from "./secondaryStats";
import { StatsEnum } from "./statsEnum";

export class Stats
{
  private mainStats:MainStats;
  private secondaryStats:SecondaryStats;

  constructor()
  {
    this.mainStats = new MainStats();
    this.secondaryStats = new SecondaryStats();
    this.secondaryStats.calculateSecondaryStats(this.mainStats);
  }
}
