// Fungsi ini bertindak sebagai perantara (proxy) yang aman ke Google Gemini API.
// Tujuannya adalah untuk menyembunyikan API Key Anda dari sisi klien (browser).

exports.handler = async function(event, context) {
  // Hanya izinkan metode POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Ambil API Key dari environment variables di Netlify.
  // Ini adalah cara yang aman untuk menyimpan kunci rahasia.
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API Key tidak diatur di server.' }),
    };
  }

  // URL asli dari Google Gemini API
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    // Ambil payload (prompt) dari body permintaan yang dikirim oleh frontend
    const payload = JSON.parse(event.body);

    // Lakukan permintaan ke Google API dari sisi server
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Jika respons dari Google tidak OK, teruskan errornya
    if (!response.ok) {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify(errorData),
      };
    }

    // Jika berhasil, ambil data dan kirimkan kembali ke frontend
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

  } catch (error) {
    // Tangani jika ada error jaringan atau parsing JSON
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
