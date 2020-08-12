
db.collection('testUsers').get().then(snapshot => {
  onSnapshot(snapshot.docs);
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  console.log('user signed out');
  window.location = 'index.html';
});
