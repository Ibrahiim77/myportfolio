 document.querySelector(".a").onclick = () => { window.location.href = "index.html"; };
  document.querySelector(".b").onclick = () => { window.location.href = "skills.html"; };
  document.querySelector(".d").onclick = () => { window.location.href = "projects.html"; };
  document.querySelector(".c").onclick = () => { window.location.href = "contacts.html"; };

  document.getElementById("GoToprojects").onclick =() => {window.location.href= "projects.html";};

  const navToggleO = document.getElementById('nav');
  const sidebar = document.getElementById('sidebar');
  const navToggleB = document.getElementById('navb');

  navToggleO.addEventListener('click', ()=> {

    sidebar.classList.toggle('active')
  });

  navToggleB.addEventListener('click', ()=> {

    sidebar.classList.remove('active')
  });