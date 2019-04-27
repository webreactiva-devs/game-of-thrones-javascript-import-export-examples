import "./styles.css";
import melisandre from "./modules/redWomanMelisandre";
import starkSisters from "./modules/starkSisters";
import LannisterBrothers from "./modules/evilLannisters";
import { says as littlefingerSays } from "./modules/littlefinger";
import Daenerys, {
  drogon,
  Rhaegal,
  Viserion
} from "./modules/daenerysTargaryen";

melisandre.says();

starkSisters.sansaSays();
starkSisters.aryaSays();

const evilHouse = new LannisterBrothers();
evilHouse.jaimeSays();
evilHouse.tyronSays();

littlefingerSays();

const daenerys = new Daenerys();
drogon();
new Rhaegal();
new Viserion().says();
daenerys.says();

document.getElementById("app").innerHTML = `
<h1>Game of Thrones Import Export Modules Test ⚔</h1>
<div>
  Open Console :)
  Made with ❤️ and 🔥 by <a href="https://www.danielprimo.io">daniel primo</a>
</div>
`;
