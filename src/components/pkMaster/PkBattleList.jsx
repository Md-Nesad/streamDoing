import { pkBattles } from "../../data/data";
import PkBattleCard from "./PkBattleCard";

export default function PKBattleList() {
  return (
    <div className="pb-20">
      {pkBattles.map((battle) => (
        <PkBattleCard key={battle.id} battle={battle} />
      ))}
    </div>
  );
}
