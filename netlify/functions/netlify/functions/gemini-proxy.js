// Mengimpor 'node-fetch' untuk melakukan permintaan HTTP di lingkungan Node.js
const fetch = require('node-fetch');

// Handler utama untuk Netlify Function
exports.handler = async (event, context) => {
  // Hanya izinkan metode POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Mengambil kunci API dari environment variables di Netlify
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: { message: "API key tidak diatur di server." } }) };
  }

  // URL endpoint Google Gemini API
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    // Meneruskan body dari permintaan frontend ke Google API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: event.body, // Langsung teruskan body dari event
    });

    // Periksa jika respons dari Google tidak OK
    if (!response.ok) {
        const errorBody = await response.json();
        console.error('Google API Error:', errorBody);
        return {
            statusCode: response.status,
            body: JSON.stringify(errorBody),
        };
    }

    // Ambil data JSON dari respons Google
    const data = await response.json();

    // Kirim kembali respons dari Google ke frontend
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    // Tangani kesalahan jaringan atau lainnya
    console.error('Proxy Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: `Terjadi kesalahan pada server proxy: ${error.message}` } }),
    };
  }
};
