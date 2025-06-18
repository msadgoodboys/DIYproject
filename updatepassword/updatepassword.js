import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://ielcfgdvxyldviqqantu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGNmZ2R2eHlsZHZpcXFhbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg2NzMsImV4cCI6MjA2NTU5NDY3M30.gcgDJHjOq_dYdrxIPgQ_gaTVIgN5BPYyI0B7YRqNvSA'
);

// ✅ Step 1: Extract tokens from URL
const hashParams = new URLSearchParams(window.location.hash.substr(1));
const access_token = hashParams.get('access_token');
const refresh_token = hashParams.get('refresh_token');
const type = hashParams.get('type');

if (access_token && refresh_token && type === 'recovery') {
  const { error } = await supabase.auth.setSession({
    access_token,
    refresh_token
  });

  if (error) {
    alert('❌ Failed to restore session: ' + error.message);
  } else {
    console.log('✅ Auth session restored');
  }
} else {
  alert('❌ Missing access token or refresh token in the URL');
}

// ✅ Step 2: Update password
document.getElementById("update-button").addEventListener("click", async () => {
  const newPassword = document.getElementById("new-password").value;

  if (!newPassword) {
    alert("Please enter your new password.");
    return;
  }

  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) {
    alert("❌ Failed to update password: " + error.message);
  } else {
    alert("✅ Password updated successfully!");
    window.location.href = "../index/index.html";
  }
});
