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

/*async function onLoad() {
  const data = await fetchData();
  data.books.forEach((book) => {
    document.getElementById("book-list").innerHTML += `
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.author}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary w-100" style="background-color: #6f4d38;">Buy Now</button>
          </div>
        </div>
      </div>
    `
  });
}*/
async function onLoad() {
  const data = await fetchData();
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  if (!data || !data.books) return;

  for (let i = 0; i < data.books.length; i += 3) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row g-4";

    for (let j = i; j < i + 3 && j < data.books.length; j++) {
      const book = data.books[j];
      rowDiv.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100">
            <img src="${book.picture}" class="card-img-top" alt="${book.title}" style="width: 100%; height: 500px;">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.author}</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary w-100" style="background-color: #6f4d38;">${book.price} Ft</button>
            </div>
          </div>
        </div>
      `;
    }

    bookList.appendChild(rowDiv);
  }
}

onLoad();
/*async function onLoad() {
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
}*/

//onLoad();

