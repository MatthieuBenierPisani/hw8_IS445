const form = document.querySelector('#form');
const res = document.querySelector('#tableValues');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    res.innerHTML = ''

    const h3 = document.createElement('h3')

    h3.innerHTML = 'Form Data Entered'
    res.appendChild(h3)

    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const tableKey = document.createElement('th');
    const tableValue = document.createElement('th');

    tableKey.innerHTML = 'Key';
    tableValue.innerHTML = 'Value';
    tr.append(tableKey);
    tr.append(tableValue);
    table.append(tr);

    const data = new FormData(form);
    for (const [key, value] of data) {
        const tr = document.createElement('tr');
        const cellKey = document.createElement('td');
        const cellValue = document.createElement('td');

        cellKey.innerHTML = key;
        cellValue.innerHTML = value;
        tr.append(cellKey);
        tr.append(cellValue);
        table.append(tr);
    }
    res.append(table);
})