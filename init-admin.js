#!/usr/bin/env node

/**
 * Initialize Admin Account for AIB-AXYS
 * Creates the initial admin user: sk@horizonafrica.com
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🔐 AIB-AXYS Admin Account Setup\n');
console.log('Creating admin account for: sk@horizonafrica.com\n');

rl.question('Enter a password for the admin account: ', async (password) => {
  if (!password || password.length < 6) {
    console.log('\n❌ Password must be at least 6 characters long');
    process.exit(1);
  }

  try {
    const response = await fetch('http://localhost:3000/api/auth/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'sk@horizonafrica.com',
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('\n✅ Admin account created successfully!');
      console.log('\nLogin credentials:');
      console.log('Email: sk@horizonafrica.com');
      console.log(`Password: ${password}`);
      console.log('\nAccess admin panel at: http://localhost:3000/admin/login\n');
    } else {
      console.log('\n❌ Error:', data.error);
      if (data.error === 'Admin already exists') {
        console.log('Admin account already exists. Use your existing credentials to login.\n');
      }
    }
  } catch (error) {
    console.error('\n❌ Failed to create admin:', error.message);
  }

  rl.close();
  process.exit(0);
});
