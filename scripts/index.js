const logs = document.querySelector('#nameField');

const onSnapshot = (data) => {

  let html = '';
  data.forEach(doc => {
    const userLog = doc.data();
    const li = `
      <li>
        <div> ${userLog.Date} </div>
        <div> ${userLog.Email } </div>
        <div> ${userLog.Name} </div>
        <div> ${userLog.Time} </div>
        <div> ${userLog.vNo} </div>
      </li>
    `;
    html += li;
  });
  logs.innerHTML = html

};