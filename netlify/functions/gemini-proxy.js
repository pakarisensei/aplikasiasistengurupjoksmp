/**
 * FUNGSI INI BERJALAN DI SERVER NETLIFY (BUKAN DI BROWSER)
 * Tujuannya adalah untuk:
 * 1. Menerima 'prompt' dari aplikasi web Anda.
 * 2. Mengambil API Key yang Anda simpan secara rahasia di Netlify.
 * 3. Memanggil Google Gemini API menggunakan API Key tersebut.
 * 4. Mengirimkan kembali hasilnya ke aplikasi web Anda.
 *
 * Dengan cara ini, API Key Anda tidak pernah terlihat oleh pengguna.
 */
exports.handler = async function(event, context) {
    // Hanya izinkan request dengan metode POST untuk keamanan
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Ambil 'prompt' yang dikirim dari file index.html
        const { prompt } = JSON.parse(event.body);
        if (!prompt) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Request tidak valid: prompt tidak ditemukan.' }) };
        }

        // Ambil API Key dari Environment Variable yang Anda atur di Netlify (CARA AMAN)
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
             return { statusCode: 500, body: JSON.stringify({ error: 'Kesalahan server: GEMINI_API_KEY tidak diatur.' }) };
        }

        // Siapkan request untuk dikirim ke Google Gemini API
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const payload = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        };

        // Panggil Gemini API dari sisi server
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await geminiResponse.json();

        // Jika respons dari Gemini tidak OK, kirim pesan error
        if (!geminiResponse.ok) {
            console.error("Gemini API Error:", result);
            const errorMessage = result.error?.message || 'Gagal menghubungi Gemini API.';
            return { statusCode: geminiResponse.status, body: JSON.stringify({ error: errorMessage }) };
        }

        // Ekstrak teks dari respons Gemini
        const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text 
            || (result.candidates?.[0]?.finishReason === 'SAFETY' ? "Respons diblokir karena pengaturan keamanan. Coba gunakan prompt yang berbeda." : "Respons dari AI tidak valid atau kosong.");

        // Kirim kembali hasil teks yang sudah bersih ke browser
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: responseText })
        };

    } catch (error) {
        console.error("Internal Proxy Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};