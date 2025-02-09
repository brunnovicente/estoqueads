import Produto from "./Produto.js";
import Pessoa from "./Pessoa.js";
import Usuario from "./Usuario.js";

await Produto.sync()
await Pessoa.sync()
await Usuario.sync()