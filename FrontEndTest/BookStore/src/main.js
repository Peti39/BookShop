/*const fetchData = async () =>{
  try{
    const resp = await fetch("http://localhost:3000/data");
    if(!resp.ok){throw new Error("No server :(")}
    const data = await resp.json();
    return data
  }catch (error){
    console.error("Error")
  }
  
}

async function  onLoad() {
   
  const data = await fetchData();
  //document.getElementById("Test").innerText = JSON.stringify(data.books[0].title)
  let table = document.createElement("table");
  table.setAttribute("border","1")

  const headerRow = table.insertRow();
  const headers = ["title","author","price"]
  headers.forEach(hd => {
    const headerCell = document.createElement("th")
    headerCell.textContent = hd
    headerRow.appendChild(headerCell)
  });

  document.getElementById("table").appendChild(table);
}

onLoad()*/

const fetchData = async () => {
  try {
    const resp = await fetch("http://localhost:3000/data");
    if (!resp.ok) {
      throw new Error("No server :(");
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

async function onLoad() {
  const data = await fetchData();
  if (data && data.books) {
    let table = document.createElement("table");
    table.setAttribute("border", "1");

    const headerRow = table.insertRow();
    const headers = ["Title", "Author", "Price"];
    headers.forEach((hd) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = hd;
      headerRow.appendChild(headerCell);
    });

    data.books.forEach((book) => {
      const row = table.insertRow();
      const titleCell = row.insertCell();
      const authorCell = row.insertCell();
      const priceCell = row.insertCell();

      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      priceCell.textContent = book.price;
    });

    document.getElementById("app").appendChild(table);
  }
}

onLoad();

