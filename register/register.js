
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ielcfgdvxyldviqqantu.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGNmZ2R2eHlsZHZpcXFhbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg2NzMsImV4cCI6MjA2NTU5NDY3M30.gcgDJHjOq_dYdrxIPgQ_gaTVIgN5BPYyI0B7YRqNvSA' // ✅ Your anon key
);

document.getElementById("register-button").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter.");
    return;
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Signup failed: " + error.message);
  } else {
    alert("Signup successful! 🎉 Please check your email to verify.");
  }
});
