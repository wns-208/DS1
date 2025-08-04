// criando um objeto/instância
const p = new Pessoa();

p.nome = "Chico";
p.cpf = "564.543.453-55";
p.celular = "(23) 999594056-5645";

// p.nome = usar a função get nome
// p.nome =usar a função personalizada criada lá dentro


const a = new Aluno();
a.nome = "Gabriela";
a.cpf = "123.456.789-10";
a.celular = "(25) 887643242"
a.turma = "div 2";
a.curso = "DS";
a.nota1 = 8;
a.nota2 = 10;
document.writeln(a.exibirNome("Celular:"+a.celular));
document.writeln(a.exibirNotas());
document.writeln(a.calcularMedia());

//crie uma nova instacia da classe professor
//exibir o nome,cpf, celular, e a função exebirtitulacao()

const prof = new Professor();
prof.nome = "helio";
prof.cpf = "123.677.855-45";
prof.celular = "(99) 685094321";
prof.area = "sexyboy";
prof.titulacao = "Mestre";

document.writeln(`${prof.nome} - ${prof.cpf} - ${prof.celular} <br>`);
document.writeln(prof.exibirTtulacao());
