const form = document.getElementById("registrationForm");

const success = document.getElementById("success");

const whatsappButton =
  document.getElementById("whatsappButton");

const submitButton =
  document.getElementById("submitButton");


form.addEventListener("submit", function(event) {
  
  event.preventDefault();
  
  
  /* ================= DATA ================= */
  
  const team =
    document.getElementById("team").value.trim();
  
  const captain =
    document.getElementById("captain").value.trim();
  
  const phone =
    document.getElementById("whatsapp").value.trim();
  
  const player1 =
    document.getElementById("player1").value.trim();
  
  const player2 =
    document.getElementById("player2").value.trim();
  
  const player3 =
    document.getElementById("player3").value.trim();
  
  const player4 =
    document.getElementById("player4").value.trim();
  
  const player5 =
    document.getElementById("player5").value.trim();
  
  const payment =
    document.getElementById("payment").files[0];
  
  
  /* ================= PAYMENT CHECK ================= */
  
  if (!payment) {
    
    alert("Silakan upload bukti pembayaran.");
    
    return;
  }
  
  
  /* ================= LOADING ================= */
  
  submitButton.disabled = true;
  
  submitButton.innerHTML =
    "<span>SUBMITTING...</span><b>...</b>";
  
  
  /* ================= ADMIN ================= */
  
  const admin = "6283176586304";
  
  
  /* ================= WHATSAPP MESSAGE ================= */
  
  const message = `MLA SUPER LEAGUE — SEASON 01

Halo Admin MLA 👋
Saya ingin melakukan konfirmasi pendaftaran.

━━━━━━━━━━━━━━
TEAM INFORMATION
━━━━━━━━━━━━━━

Nama Team:
${team}

Captain:
${captain}

WhatsApp:
${phone}

━━━━━━━━━━━━━━
ROSTER
━━━━━━━━━━━━━━

1. ${player1}
2. ${player2}
3. ${player3}
4. ${player4}
5. ${player5}

━━━━━━━━━━━━━━
PAYMENT
━━━━━━━━━━━━━━

Entry Fee:
Rp30.000

Bukti pembayaran sudah saya upload.

Mohon dilakukan verifikasi pendaftaran.

Terima kasih.`;
  
  
  /* ================= WHATSAPP LINK ================= */
  
  const whatsappURL =
    "https://wa.me/" +
    admin +
    "?text=" +
    encodeURIComponent(message);
  
  
  whatsappButton.href = whatsappURL;
  
  
  /* ================= SUCCESS ================= */
  
  setTimeout(function() {
    
    form.style.display = "none";
    
    success.classList.add("show");
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  }, 700);
  
});