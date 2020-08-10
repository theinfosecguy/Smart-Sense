const logs = document.querySelector('#nameField');

const onSnapshot = (data) => {

  let html = '';
  data.forEach(doc => {
    const userLog = doc.data();
    const li = `
    <section class="mainSection">
      <div class="logRow">
        <div> ${userLog.Date} </div>
        <div> ${userLog.Email } </div>
        <div> ${userLog.Name} </div>
        <div> ${userLog.Time} </div>
        <div> ${userLog.vNo} </div>
      </div>
      </section>
    `;
    html += li;
  });
  logs.innerHTML = html
};