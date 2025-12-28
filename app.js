// HKGU SCHOOL - App.js

// Init User
if(!localStorage.getItem("userName")) localStorage.setItem("userName","Siswa Hebat");
if(!localStorage.getItem("level")) localStorage.setItem("level",1);

// Get Level
function getLevel(){
  return Number(localStorage.getItem("level") || 1);
}

// Increment Level
function nextLevel(){
  let level = getLevel();
  if(level<10){
    level++;
    localStorage.setItem("level",level);
    alert("🎉 Level naik! Saat ini Level: "+level);
    if(level===10){
      alert("🎊 Selamat! Kamu tamat kelas! Klik Sertifikat untuk melihat kejutan!");
      window.location.href="certificate.html";
    }
  }
}

// Simple Navigation
function go(page){window.location.href=page;}
