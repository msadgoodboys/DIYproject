import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ielcfgdvxyldviqqantu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGNmZ2R2eHlsZHZpcXFhbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg2NzMsImV4cCI6MjA2NTU5NDY3M30.gcgDJHjOq_dYdrxIPgQ_gaTVIgN5BPYyI0B7YRqNvSA'
);

document.getElementById("update-button").addEventListener("click", async () => {
  const newPassword = document.getElementById("new-password").value;

  if (!newPassword) {
    alert("Please enter your new password.");
    return;
  }

  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) {
    alert("❌ Failed to update password: " + error.message);
  } else {
    alert("✅ Password updated successfully!");
    window.location.href = "../index/index.html";
  }
});
