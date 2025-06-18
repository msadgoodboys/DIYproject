import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Initialize Supabase client
const supabase = createClient(
  'https://ielcfgdvxyldviqqantu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGNmZ2R2eHlsZHZpcXFhbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg2NzMsImV4cCI6MjA2NTU5NDY3M30.gcgDJHjOq_dYdrxIPgQ_gaTVIgN5BPYyI0B7YRqNvSA'
);

// Add click event to reset button
document.getElementById("reset-button").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://127.0.0.1:5500/DIYproject-main/updatepassword/updatepassword.html'
  });

  if (error) {
    alert("❌ Failed to send reset link: " + error.message);
  } else {
    alert("📩 Password reset link sent! Please check your email.");
  }
});
