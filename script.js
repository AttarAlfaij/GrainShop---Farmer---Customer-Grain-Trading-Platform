
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("loginMessage");

  let user=null;
  if(username==="farmer" && password==="1234") user={name:"Farmer", role:"Farmer"};
  else if(username==="customer" && password==="1234") user={name:"Customer", role:"Customer"};
  else { msg.textContent="Invalid username or password"; msg.style.color="red"; return; }

  localStorage.setItem("grainshopUser", JSON.stringify(user));
  msg.textContent="Login successful!";
  msg.style.color="green";
  setTimeout(()=>{ window.location.href="viewproduct.html"; },1000);
});


if(window.location.pathname.endsWith("profile.html")){
  const user = JSON.parse(localStorage.getItem("grainshopUser"));
  if(!user){ 
    alert("Please login first"); 
    window.location.href = "index.html"; 
  }

  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileRole").textContent = `Role: ${user.role}`;

  
  if(user.role === "Customer") document.getElementById("customerLink").classList.remove("hidden");
}


document.getElementById("logoutBtn")?.addEventListener("click", function(){
  localStorage.removeItem("grainshopUser");
  window.location.href="index.html";
});

document.getElementById("sellForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const name=document.getElementById("farmerName").value;
  const phone=document.getElementById("farmerPhone").value;
  const grain=document.getElementById("grainType").value;
  const qty=document.getElementById("grainQty").value;
  document.getElementById("sellMsg").textContent=`Thank you ${name}! You offered ${qty}kg of ${grain}. We'll contact you soon at ${phone}.`;
  document.getElementById("sellMsg").style.color="green";
  document.getElementById("sellForm").reset();
});


function buyProduct(product){
  alert(`You selected to buy ${product}. (Feature coming soon)`);
}
