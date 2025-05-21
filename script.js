function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function showLogin() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

function backToLanding() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("landingPage").style.display = "flex";
}

function handleLogin(e) {
  e.preventDefault();
  alert("Login berhasil! Kembali ke halaman beranda.");
  backToLanding();
  return false;
}
