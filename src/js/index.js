/*const workerList = [
  {
    nome: "Luzia",
    posto: "porta",
    dias: ["quarta", "sexta", "domingo"],
  },
  {
    nome: "Ueverton",
    posto: "porta",
    dias: ["quarta", "sexta", "domingo"],
  },
  {
    nome: "Dalila",
    posto: "esquerda",
    dias: ["quarta", "sexta", "domingo"],
  },
  {
    nome: "Daniela",
    posto: "direita",
    dias: ["quarta", "sexta", "domingo"],
  },
  {
    nome: "Bruno",
    posto: "porta",
    dias: ["domingo"],
  },
];

function createTableFromArray(objArr, className) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const tbody = document.createElement("tbody");

  for (let keys of Object.keys(...objArr)) {
    const th = document.createElement("th");
    th.textContent = keys.replace(/(?:^|\s)\S/g, function (capitalize) {
      return capitalize.toUpperCase();
    });
    tr.appendChild(th);
  }

  thead.appendChild(tr);

  objArr.forEach((e) => {
    const tr = document.createElement("tr");
    for (let i in e) {
      const td = document.createElement("td");
      if (Array.isArray(e[i])) {
        td.textContent = e[i]
          .join(", ")
          .replace(/(?:^|\s)\S/g, function (capitalize) {
            return capitalize.toUpperCase();
          });
      } else {
        td.textContent = e[i].replace(/(?:^|\s)\S/g, function (capitalize) {
          return capitalize.toUpperCase();
        });
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  table.className = className;
  return table;
} */

const container = document.querySelector(".tabela");
//Tabela com todos os obreiros.
// container.appendChild(createTableFromArray(workerList, "table-obreiros"));

// const referenceDate = new Date("2022-2-21");
