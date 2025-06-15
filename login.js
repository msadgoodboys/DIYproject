import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ielcfgdvxyldviqqantu.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGNmZ2R2eHlsZHZpcXFhbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg2NzMsImV4cCI6MjA2NTU5NDY3M30.gcgDJHjOq_dYdrxIPgQ_gaTVIgN5BPYyI0B7YRqNvSA'
);


document.getElementById("login-button").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Login successful! ✅");
    window.location.href = "mainmenu.html";
  }
});
