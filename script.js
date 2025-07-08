document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    // --- DATABASE PJOK SMP (INTI APLIKASI) ---
    const capaianPerElemen = {
        'Terampil Bergerak': { D: "Peserta didik menganalisis dan menghaluskan keterampilan gerak serta mentransfernya ke dalam berbagai situasi gerak. Peserta didik menyusun dan memeragakan strategi gerak yang dapat dimanfaatkan untuk meningkatkan capaian keterampilan gerak. Peserta didik memeragakan dan menjelaskan konsep gerak yang dapat dimanfaatkan untuk meningkatkan capaian keterampilan gerak." },
        'Belajar melalui Gerak': { D: "Peserta didik mengemukakan dan membuktikan strategi gerak yang paling efektif dalam situasi gerak yang berbeda. Peserta didik menginvestigasi modifikasi peralatan, peraturan, dan sistem skoring yang mendukung fair play dan partisipasi inklusif. Peserta didik menerapkan kepemimpinan, kolaborasi, dan proses pengambilan keputusan kelompok ketika berpartisipasi di dalam berbagai aktivitas jasmani." },
        'Bergaya Hidup Aktif': { D: "Peserta didik berpartisipasi dalam aktivitas jasmani untuk menggambarkan reaksi tubuh terhadap berbagai tingkat intensitas yang berbeda. Peserta didik berpartisipasi dalam aktivitas jasmani yang menyehatkan di luar ruang dan/atau lingkungan alam dan menggambarkan sumber daya yang dibutuhkan untuk meningkatkan partisipasi. Peserta didik menjelaskan dan mengusulkan strategi peningkatan aktivitas jasmani dan pencegahan perilaku sedenter." },
        'Memilih Hidup yang Menyehatkan': { D: "Peserta didik menganalisis risiko kesehatan akibat gaya hidup dan merancang tindakan pencegahan melalui aktivitas jasmani berdasarkan rekomendasi otoritas kesehatan. Peserta didik merancang pilihan makanan sehat berdasarkan analisis kandungan gizi sesuai kebutuhan aktivitas jasmani. Peserta didik mempraktikkan prosedur untuk menangani cedera yang berisiko terhadap kesehatan dan keselamatan berdasarkan prinsip pertolongan pertama." }
    };
    const elemenList = [ 'Terampil Bergerak', 'Belajar melalui Gerak', 'Bergaya Hidup Aktif', 'Memilih Hidup yang Menyehatkan' ];
    const materiByKelas = {
        '7': { 'sepak-bola-7': { text: 'Permainan Sepak Bola', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Dasar Menendang' }, 'bola-voli-7': { text: 'Permainan Bola Voli', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Passing Bawah dan Atas' }, 'bola-basket-7': { text: 'Permainan Bola Basket', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Dribbling dan Chest Pass' }, 'kasti-7': { text: 'Permainan Kasti', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Melempar dan Menangkap Bola' }, 'bulutangkis-7': { text: 'Permainan Bulutangkis', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Pukulan Servis' }, 'tenis-meja-7': { text: 'Permainan Tenis Meja', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Pukulan Forehand' }, 'atletik-jalan-cepat-7': { text: 'Aktivitas Atletik Jalan Cepat', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Gerak Langkah dan Ayunan Lengan' }, 'atletik-lari-pendek-7': { text: 'Aktivitas Atletik Lari Jarak Pendek', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Start Jongkok' }, 'atletik-lompat-jauh-7': { text: 'Aktivitas Atletik Lompat Jauh', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Awalan dan Tolakan' }, 'atletik-tolak-peluru-7': { text: 'Aktivitas Atletik Tolak Peluru (The Short Pot)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Memegang dan Menolak Peluru' }, 'beladiri-silat-7': { text: 'Seni Bela Diri (Pencak Silat)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Sikap Kuda-kuda dan Pukulan' }, 'kebugaran-jasmani-7': { text: 'Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Latihan Kekuatan Otot' }, 'senam-lantai-7': { text: 'Senam Lantai (Guling Depan dan Guling Belakang Serta Keseimbangan)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Rangkaian Guling Depan dan Belakang' }, 'senam-irama-7': { text: 'Senam Irama', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Gerak Langkah Dasar' }, 'kebugaran-kesehatan-7': { text: 'Aktivitas Kebugaran untuk Kesehatan dan pengukurannya', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Tes Kebugaran Jasmani Indonesia (TKJI)' }, 'pola-makan-sehat-7': { text: 'Pola Makan Sehat Begizi dan Seimbang', elemenTerkait: 'Memilih Hidup yang Menyehatkan', saranSpesifik: 'Konsep Isi Piringku' } },
        '8': { 'sepak-bola-8': { text: 'Permainan Sepak Bola', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Kombinasi Gerak Spesifik' }, 'bola-voli-8': { text: 'Permainan Bola Voli', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Servis Atas' }, 'bola-basket-8': { text: 'Permainan Bola Basket', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Shooting (Lay-up)' }, 'softball-8': { text: 'Permainan Softball', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Memegang Stik dan Memukul' }, 'bulutangkis-8': { text: 'Permainan Bulutangkis', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Pukulan Lob dan Smash' }, 'tenis-meja-8': { text: 'Permainan Tenis Meja', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Pukulan Backhand dan Servis' }, 'atletik-jalan-cepat-8': { text: 'Aktivitas Atletik Jalan Cepat', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Analisis Gerak Jalan Cepat' }, 'atletik-lari-pendek-8': { text: 'Aktivitas Atletik Lari Jarak Pendek', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Analisis Gerak Lari Cepat' }, 'atletik-lompat-jauh-8': { text: 'Aktivitas Atletik Lompat Jauh', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Melayang dan Mendarat' }, 'atletik-tolak-peluru-8': { text: 'Aktivitas Atletik Tolak Peluru', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Analisis Gerak Tolak Peluru' }, 'beladiri-silat-8': { text: 'Seni Bela Diri (Pencak Silat)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Kombinasi Pukulan dan Tendangan' }, 'kebugaran-jasmani-8': { text: 'Kebugaran Jasmani (Konsep dan Latihan)', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Konsep Latihan Daya Tahan' }, 'senam-lantai-8': { text: 'Senam Lantai (Meroda dan Guling Lenting)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Dasar Meroda' }, 'gerak-berirama-8': { text: 'Gerak Berirama (Langkah Kaki dan Ayunan Lengan)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Kombinasi Gerak Langkah dan Ayunan' }, 'renang-dada-8': { text: 'Aktivitas Air (Renang Gaya Dada)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Koordinasi Gerak Renang Gaya Dada' }, 'pergaulan-bebas-8': { text: 'Pencegahan Pergaulan Bebas (Etika dan Solusi Pergaulan Sehat)', elemenTerkait: 'Memilih Hidup yang Menyehatkan', saranSpesifik: 'Analisis Dampak Pergaulan Bebas' }, 'keselamatan-jalan-raya-8': { text: 'Keselamatan di Jalan Raya (Rambu, Marka, dan Etika Berkendara)', elemenTerkait: 'Memilih Hidup yang Menyehatkan', saranSpesifik: 'Identifikasi Rambu Lalu Lintas' } },
        '9': { 'sepak-bola-9': { text: 'Permainan Sepak Bola', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Strategi dan Taktik Permainan' }, 'bola-voli-9': { text: 'Permainan Bola Voli', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Strategi Menyerang dan Bertahan' }, 'bola-basket-9': { text: 'Permainan Bola Basket', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Pola Permainan Sederhana' }, 'rounders-9': { text: 'Permainan Rounders', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Peraturan dan Strategi Bermain' }, 'bulutangkis-9': { text: 'Permainan Bulutangkis', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Taktik Permainan Ganda' }, 'tenis-meja-9': { text: 'Permainan Tenis Meja', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Taktik Permainan Tunggal' }, 'atletik-jalan-cepat-9': { text: 'Aktivitas Atletik Jalan Cepat', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Perancangan Program Latihan' }, 'atletik-lari-estafet-9': { text: 'Aktivitas Atletik Lari Jarak Pendek (Lari Sambung/Estafet)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Pemberian dan Penerimaan Tongkat' }, 'atletik-lompat-jauh-9': { text: 'Aktivitas Atletik Lompat Jauh', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Analisis Hasil Lompatan' }, 'atletik-lempar-cakram-9': { text: 'Aktivitas Atletik Lempar Cakram', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Teknik Awalan dan Lemparan' }, 'beladiri-silat-9': { text: 'Seni Bela Diri (Pencak Silat)', elemenTerkait: 'Belajar melalui Gerak', saranSpesifik: 'Kombinasi Gerak dalam Jurus Sederhana' }, 'kebugaran-jasmani-9': { text: 'Kebugaran Jasmani', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Evaluasi Tingkat Kebugaran' }, 'senam-lantai-kombinasi-9': { text: 'Senam Lantai (Gerak Kombinasi Rangkaian Senam Lantai)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Merangkai Gerakan Guling dan Keseimbangan' }, 'gerak-berirama-aerobik-9': { text: 'Gerak Berirama (Menggunakan Senam Aerobik)', elemenTerkait: 'Bergaya Hidup Aktif', saranSpesifik: 'Menciptakan Rangkaian Senam Aerobik' }, 'renang-bebas-9': { text: 'Aktivitas Air (Renang Gaya Bebas)', elemenTerkait: 'Terampil Bergerak', saranSpesifik: 'Koordinasi Gerak Renang Gaya Bebas' }, 'p3k-9': { text: 'Pertolongan Pertama pada Kecelakaan (P3K)', elemenTerkait: 'Memilih Hidup yang Menyehatkan', saranSpesifik: 'Penanganan Cedera Ringan (Luka, Memar)' }, 'aktivitas-fisik-penyakit-9': { text: 'Aktivitas Fisik dalam Pencegahan Penyakit', elemenTerkait: 'Memilih Hidup yang Menyehatkan', saranSpesifik: 'Hubungan Aktivitas Fisik dan Penyakit Tidak Menular' } }
    };
    const modelPembelajaranList = [ "Direct Instruction", "Tactical Games Model", "Sport Education Model (SEM)", "Cooperative Learning", "Project-Based Learning (PjBL)", "Problem-Based Learning (PBL)", "Inquiry Learning", "Discovery Learning", "Experiential Learning", "Blended Learning" ];
    const profilLulusanDatabase = { base: ['Keimanan', 'Kemandirian', 'Kesehatan'], desc: { 'Keimanan': 'Terintegrasi melalui kegiatan berdoa sebelum dan sesudah pelajaran serta menumbuhkan rasa syukur atas kesehatan tubuh.', 'Kewargaan': 'Dikembangkan melalui sportivitas, kepatuhan pada aturan main, dan menghargai teman maupun lawan.', 'Penalaran Kritis': 'Diasah saat siswa menganalisis taktik, mengevaluasi gerakan, dan memecahkan masalah dalam situasi permainan.', 'Kreativitas': 'Didorong saat siswa merancang variasi latihan, strategi permainan, atau menciptakan rangkaian gerak baru.', 'Kolaborasi': 'Dibangun melalui kerja sama tim, komunikasi efektif, dan memberikan umpan balik konstruktif kepada rekan.', 'Kemandirian': 'Tumbuh saat siswa mengambil inisiatif untuk berlatih, mengelola peralatannya sendiri, dan bertanggung jawab atas kemajuan belajarnya.', 'Kesehatan': 'Menjadi fokus utama dengan memahami manfaat aktivitas fisik bagi tubuh dan menerapkan pola hidup sehat.', 'Komunikasi': 'Dilatih secara verbal dan non-verbal saat berinteraksi dengan teman satu tim, menyampaikan ide, dan memahami isyarat dalam permainan.' }, byElemen: { 'Terampil Bergerak': ['Penalaran Kritis', 'Kemandirian'], 'Belajar melalui Gerak': ['Kolaborasi', 'Komunikasi', 'Kewargaan'], 'Bergaya Hidup Aktif': ['Kesehatan', 'Kemandirian'], 'Memilih Hidup yang Menyehatkan': ['Penalaran Kritis', 'Kesehatan', 'Kolaborasi'] } };
    const kelasByFase = { D: [7, 8, 9] };

    const sintaksDatabase = {
        'Direct Instruction': [ { phase: 'Fase 1: Menyampaikan Tujuan', activity: 'Guru menjelaskan tujuan pembelajaran dan mempersiapkan siswa.', experience: 'memahami' }, { phase: 'Fase 2: Demonstrasi (I Do)', activity: 'Guru mendemonstrasikan keterampilan {materi_spesifik} dengan benar dan jelas.', experience: 'memahami' }, { phase: 'Fase 3: Latihan Terbimbing (We Do)', activity: 'Siswa meniru gerakan dengan bimbingan dan umpan balik langsung dari guru.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Latihan Mandiri (You Do)', activity: 'Siswa berlatih secara mandiri atau berpasangan untuk memantapkan gerakan.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Evaluasi & Refleksi', activity: 'Guru mengevaluasi penguasaan keterampilan dan mengajak siswa merefleksikan kesulitan yang dihadapi.', experience: 'merefleksi' } ],
        'Tactical Games Model': [ { phase: 'Fase 1: Permainan Awal', activity: 'Siswa memainkan permainan yang dimodifikasi terkait {materi_spesifik} dengan aturan sederhana.', experience: 'mengaplikasi' }, { phase: 'Fase 2: Pertanyaan Taktis', activity: 'Guru mengajukan pertanyaan pemantik: "Bagaimana cara agar tim kita bisa mencetak skor?" atau "Apa yang membuat kita sulit merebut bola?"', experience: 'memahami' }, { phase: 'Fase 3: Praktik Keterampilan', activity: 'Siswa berlatih keterampilan spesifik ({materi_spesifik}) yang dibutuhkan untuk memecahkan masalah taktis.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Permainan Akhir', activity: 'Siswa kembali memainkan permainan dengan menerapkan pemahaman taktis dan keterampilan yang baru dilatih.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Refleksi Kelompok', activity: 'Setiap kelompok merefleksikan strategi yang berhasil dan yang perlu diperbaiki.', experience: 'merefleksi' } ],
        'Cooperative Learning': [ { phase: 'Fase 1: Penyampaian Tujuan', activity: 'Guru menjelaskan tujuan pembelajaran dan pentingnya kerja sama tim.', experience: 'memahami' }, { phase: 'Fase 2: Pembentukan Kelompok', activity: 'Siswa dibagi menjadi kelompok-kelompok kecil yang heterogen.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Kerja Kelompok', activity: 'Setiap kelompok diberi tugas atau tantangan gerak yang melibatkan {materi_spesifik} untuk diselesaikan bersama.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Presentasi/Kompetisi Antar Kelompok', activity: 'Setiap kelompok menampilkan hasil kerja atau berkompetisi secara sportif.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Evaluasi & Refleksi Tim', activity: 'Guru bersama siswa mengevaluasi proses kerja sama dan hasil yang dicapai setiap kelompok.', experience: 'merefleksi' } ],
        'Project-Based Learning (PjBL)': [ { phase: 'Fase 1: Pertanyaan Mendasar', activity: 'Guru mengajukan pertanyaan pemicu: "Bagaimana kita bisa menciptakan sebuah kampanye atau proyek tentang pentingnya {materi_spesifik}?"', experience: 'memahami' }, { phase: 'Fase 2: Merancang Proyek', activity: 'Siswa secara berkelompok merancang produk (misal: poster, video, presentasi) dan langkah-langkah penyelesaiannya.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Menyusun Jadwal & Melaksanakan', activity: 'Siswa mengerjakan proyek sesuai jadwal, guru memfasilitasi dan memonitor.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Menguji Hasil & Presentasi', activity: 'Setiap kelompok mempresentasikan hasil proyeknya di depan kelas.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Evaluasi & Refleksi Pengalaman', activity: 'Siswa dan guru mengevaluasi produk dan proses, serta merefleksikan pembelajaran yang didapat.', experience: 'merefleksi' } ],
        'Sport Education Model (SEM)': [ { phase: 'Fase 1: Pengenalan Musim', activity: 'Guru memperkenalkan tema musim kompetisi (misal: "Liga Juara Kelas") dan durasinya.', experience: 'memahami' }, { phase: 'Fase 2: Pembentukan Tim', activity: 'Siswa dibagi menjadi tim tetap yang memiliki nama, kapten, dan yel-yel.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Sesi Latihan', activity: 'Tim berlatih keterampilan {materi_spesifik} melalui berbagai pos latihan atau permainan drill.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Pertandingan Resmi', activity: 'Tim saling berkompetisi dalam format liga atau turnamen. Ada wasit, pencatat skor, dan suporter.', experience: 'mengaplikasi' }, { phase: 'Fase 5: Festival & Selebrasi', activity: 'Puncak musim diakhiri dengan sebuah festival, pengumuman juara, dan pemberian penghargaan (tim terbaik, pemain paling sportif, dll).', experience: 'merefleksi' } ],
        'Default': [ { phase: 'Fase 1: Pemahaman Konsep', activity: 'Guru menjelaskan dan mendemonstrasikan konsep dasar dari {materi_spesifik}.', experience: 'memahami' }, { phase: 'Fase 2: Praktik Terbimbing', activity: 'Siswa mencoba mempraktikkan {materi_spesifik} dalam sebuah aktivitas atau permainan dengan panduan guru.', experience: 'mengaplikasi' }, { phase: 'Fase 3: Aplikasi & Eksplorasi', activity: 'Siswa menerapkan keterampilan dalam situasi yang lebih kompleks atau melakukan eksplorasi variasi gerak.', experience: 'mengaplikasi' }, { phase: 'Fase 4: Refleksi Pembelajaran', activity: 'Siswa diajak untuk merefleksikan apa yang telah dipelajari, kesulitan, dan perasaan mereka selama aktivitas.', experience: 'merefleksi' } ]
    };

    const ui = {
        form: document.getElementById('settingsForm'),
        fase: document.getElementById('fase'),
        kelas: document.getElementById('kelas'),
        semester: document.getElementById('semester'),
        elemenCp: document.getElementById('elemen-cp'),
        materiPembelajaran: document.getElementById('materi-pembelajaran'),
        materiSpesifik: document.getElementById('materi-spesifik'),
        modelPembelajaran: document.getElementById('model-pembelajaran'),
        includeCoding: document.getElementById('include-coding-activity'),
        codingTimeContainer: document.getElementById('coding-time-container'),
        output: { container: document.getElementById('outputContainer'), content: document.getElementById('modulContent'), placeholder: document.getElementById('placeholder'), loader: document.getElementById('loader'), actionButtonsWrapper: document.getElementById('action-buttons-wrapper'), copyBtn: document.getElementById('copy-btn'), backBtn: document.getElementById('back-btn') },
        gemini: { featuresSection: document.getElementById('gemini-features'), modal: document.getElementById('gemini-modal'), modalTitle: document.getElementById('gemini-modal-title'), modalContent: document.getElementById('gemini-modal-content'), modalClose: document.getElementById('gemini-modal-close'), modalCopy: document.getElementById('gemini-modal-copy'), warmupBtn: document.getElementById('gemini-warmup-btn'), materiBtn: document.getElementById('gemini-materi-btn'), quizBtn: document.getElementById('gemini-quiz-btn'), codingBtn: document.getElementById('gemini-coding-btn') }
    };

    function setupInitialOptions() {
        ui.elemenCp.innerHTML = '';
        elemenList.forEach(el => {
            const option = document.createElement('option');
            option.value = el;
            option.textContent = el;
            ui.elemenCp.appendChild(option);
        });

        ui.modelPembelajaran.innerHTML = '';
        modelPembelajaranList.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            ui.modelPembelajaran.appendChild(option);
        });
    }

    function populateKelas() {
        const fase = ui.fase.value;
        const kelasUntukFase = kelasByFase[fase];
        ui.kelas.innerHTML = '';
        kelasUntukFase.forEach(k => {
            const option = document.createElement('option');
            option.value = k;
            option.textContent = `${k}`;
            ui.kelas.appendChild(option);
        });
        populateMateri();
    }

    function populateMateri() {
        const kelas = ui.kelas.value;
        const materiUntukKelas = materiByKelas[kelas] || {};
        ui.materiPembelajaran.innerHTML = '';
        const sortedMateri = Object.entries(materiUntukKelas).sort(([,a],[,b]) => a.text.localeCompare(b.text));

        for (const [key, value] of sortedMateri) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = value.text;
            ui.materiPembelajaran.appendChild(option);
        }
        updateSuggestionsFromMateri();
    }

    function updateSuggestionsFromMateri() {
        const kelas = ui.kelas.value;
        const materiKey = ui.materiPembelajaran.value;
        const materiData = materiByKelas[kelas] ? materiByKelas[kelas][materiKey] : null;

        if (materiData) {
            if (materiData.elemenTerkait) {
                ui.elemenCp.value = materiData.elemenTerkait;
            }
            if (materiData.saranSpesifik) {
                ui.materiSpesifik.value = materiData.saranSpesifik;
                ui.materiSpesifik.placeholder = `Contoh: ${materiData.saranSpesifik}`;
            } else {
                ui.materiSpesifik.value = '';
                ui.materiSpesifik.placeholder = 'Contoh: Passing bawah, Guling depan';
            }
        }
    }

    function getFormInputs() {
        return {
            namaPenyusun: document.getElementById('nama-penyusun').value || '________________',
            guruNip: document.getElementById('guru-nip').value || '________________',
            kepsekNama: document.getElementById('kepsek-nama').value || '________________',
            kepsekNip: document.getElementById('kepsek-nip').value || '________________',
            institusi: document.getElementById('institusi').value || '________________',
            lokasiTtd: document.getElementById('lokasi-ttd').value || '___________',
            fase: ui.fase.value,
            kelas: ui.kelas.value,
            semester: ui.semester.value,
            elemenCp: ui.elemenCp.value,
            materiKey: ui.materiPembelajaran.value,
            materiJudul: ui.materiPembelajaran.options[ui.materiPembelajaran.selectedIndex].text,
            materiSpesifik: document.getElementById('materi-spesifik').value,
            modelPembelajaran: ui.modelPembelajaran.value,
            alokasiWaktu: {
                jumlahPertemuan: parseInt(document.getElementById('jumlah-pertemuan').value, 10) || 1,
                jpPerPertemuan: parseInt(document.getElementById('jp-per-pertemuan').value, 10) || 2,
                menitPerJP: parseInt(document.getElementById('menit-per-jp').value, 10) || 40,
            },
            includeCoding: ui.includeCoding.checked,
            codingTime: parseInt(document.getElementById('coding-time').value, 10) || 0,
        };
    }

    function handleGenerate(event) {
        event.preventDefault();
        ui.output.placeholder.classList.add('hidden');
        ui.output.loader.classList.remove('hidden');
        ui.output.content.innerHTML = '';
        ui.output.actionButtonsWrapper.classList.add('hidden');
        setTimeout(generateModulAjar, 500);
    }
    
    function generateModulAjar() {
        const inputs = getFormInputs();
        if (!inputs.materiSpesifik) {
            ui.output.loader.classList.add('hidden');
            ui.output.placeholder.classList.remove('hidden');
            ui.output.placeholder.querySelector('p').textContent = "Harap isi bagian 'Fokus Pembelajaran' untuk melanjutkan.";
            return;
        }
        ui.output.content.innerHTML = buildModulHtml(inputs);
        ui.output.loader.classList.add('hidden');
        ui.output.actionButtonsWrapper.classList.remove('hidden');
        ui.output.placeholder.classList.add('hidden');
        ui.output.container.scrollIntoView({ behavior: 'smooth' });
        lucide.createIcons();
    }

    function getStyledLabel(type, text) {
        const baseStyle = `font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 9999px; margin-left: 0.5rem; vertical-align: middle; display: inline-block; margin-top: 0.25rem; border: 1px solid transparent;`;
        const styles = {
            'joyful': 'background-color: #fef9c3; color: #713f12;', 'meaningful': 'background-color: #dcfce7; color: #14532d;', 'mindful': 'background-color: #e0e7ff; color: #312e81;', 'memahami': 'background-color: #cffafe; color: #155e75; border-color: #0e7490;', 'mengaplikasi': 'background-color: #dcfce7; color: #166534; border-color: #16a34a;', 'merefleksi': 'background-color: #ede9fe; color: #4c1d95; border-color: #5b21b6;',
        };
        return `<span style="${baseStyle + (styles[type] || '')}">${text}</span>`;
    }

    function getLearningLabel(langkah) {
        const lowerLangkah = langkah.toLowerCase();
        const joyfulKeywords = ['permainan', 'bernyanyi', 'menampilkan', 'bermain', 'ice breaking', 'berkelompok', 'presentasi', 'kompetisi', 'yel-yel', 'festival', 'selebrasi'];
        const meaningfulKeywords = ['analisis', 'menganalisis', 'evaluasi', 'diskusi', 'refleksi', 'apersepsi', 'menyimpulkan', 'umpan balik', 'strategi'];
        const mindfulKeywords = ['praktik', 'latihan', 'mengamati', 'menirukan', 'mencatat', 'mengidentifikasi', 'menyampaikan tujuan', 'demonstrasi', 'drill', 'eksplorasi'];
        if (joyfulKeywords.some(keyword => lowerLangkah.includes(keyword))) return getStyledLabel('joyful', 'Joyful');
        if (meaningfulKeywords.some(keyword => lowerLangkah.includes(keyword))) return getStyledLabel('meaningful', 'Meaningful');
        if (mindfulKeywords.some(keyword => lowerLangkah.includes(keyword))) return getStyledLabel('mindful', 'Mindful');
        return '';
    }

    function getPengalamanLabel(type) {
        return getStyledLabel(type, { 'memahami': 'Memahami', 'mengaplikasi': 'Mengaplikasi', 'merefleksi': 'Merefleksi' }[type] || '');
    }

    function buildModulHtml(d) {
        const alokasi = d.alokasiWaktu;
        const totalJP = alokasi.jumlahPertemuan * alokasi.jpPerPertemuan;
        const alokasiWaktuText = `${totalJP} JP (${alokasi.jumlahPertemuan} Pertemuan @ ${alokasi.jpPerPertemuan} JP x ${alokasi.menitPerJP} Menit)`;
        const capaianPembelajaran = capaianPerElemen[d.elemenCp] ? capaianPerElemen[d.elemenCp][d.fase] : "Capaian tidak ditemukan.";
        const tujuanPembelajaran = `Peserta didik dapat menganalisis, mempraktikkan, dan menerapkan konsep ${d.materiSpesifik.toLowerCase()} dalam berbagai situasi pembelajaran yang relevan dan menantang.`;
        const pemahamanBermakna = `Dengan menguasai ${d.materiSpesifik.toLowerCase()}, saya dapat meningkatkan performa dalam permainan, memahami strategi, dan menerapkan gaya hidup aktif yang lebih baik.`;
        const pertanyaanPemantik = `<ul><li>Apa saja elemen kunci yang perlu diperhatikan saat melakukan ${d.materiSpesifik.toLowerCase()}?</li><li>Bagaimana penguasaan teknik ${d.materiSpesifik.toLowerCase()} dapat membantu kita dalam sebuah permainan atau aktivitas fisik?</li></ul>`;

        return `
            <h1 class="main-title">MODUL AJAR PENDIDIKAN JASMANI, OLAHRAGA, DAN KESEHATAN (PJOK)</h1>
            <h2 class="subtitle">${d.materiJudul.toUpperCase()}: FOKUS PADA ${d.materiSpesifik.toUpperCase()}</h2>
            <hr class="main-divider">
            <h2 class="section-title">A. INFORMASI UMUM</h2>
            <table class="info-table"><tbody>
                <tr><td>Nama Penyusun</td><td>: ${d.namaPenyusun}</td></tr>
                <tr><td>Nama Sekolah</td><td>: ${d.institusi}</td></tr>
                <tr><td>Tahun Pelajaran</td><td>: ${new Date().getFullYear()}/${new Date().getFullYear() + 1}</td></tr>
                <tr><td>Fase / Kelas</td><td>: ${d.fase} / ${d.kelas}</td></tr>
                <tr><td>Elemen</td><td>: ${d.elemenCp}</td></tr>
                <tr><td>Capaian Pembelajaran</td><td>: ${capaianPembelajaran}</td></tr>
                <tr><td>Alokasi Waktu</td><td>: ${alokasiWaktuText}</td></tr>
            </tbody></table>
            <h2 class="section-title">B. KOMPONEN INTI</h2>
            <h3 class="subsection-title">1. Tujuan Pembelajaran</h3><p>${tujuanPembelajaran}</p>
            <h3 class="subsection-title">2. Pemahaman Bermakna & Pertanyaan Pemantik</h3>
            <p><strong>Pemahaman Bermakna:</strong> ${pemahamanBermakna}</p>
            <p><strong>Pertanyaan Pemantik:</strong></p>${pertanyaanPemantik}
            ${buildDelapanDimensi(d)}
            <h2 class="section-title">C. KEGIATAN PEMBELAJARAN</h2>
            ${buildKerangkaPembelajaran(d)}
            <h3 class="subsection-title">2. Rincian Kegiatan Pembelajaran</h3>
            ${buildLangkahPembelajaran(d)}
            <h2 class="section-title">D. ASESMEN / PENILAIAN</h2>
            ${buildAsesmenSection(d)}
            <h2 class="section-title">E. PENGAYAAN DAN REMEDIAL</h2>
            ${buildPengayaanRemedial(d)}
            <h2 class="section-title">F. REFLEKSI GURU DAN PESERTA DIDIK</h2>
            ${buildRefleksi(d)}
            <h2 class="section-title">G. LAMPIRAN</h2>
            ${buildLkpd(d)}
            ${buildAsesmenOtentik(d)}
            ${buildCodingPJOKLampiran(d)}
            <h2 class="section-title">H. GLOSARIUM & DAFTAR PUSTAKA</h2>
            ${buildGlosarium(d)}
            ${buildDaftarPustaka(d)}
            <table style="width: 100%; border: none; margin-top: 60px; page-break-inside: avoid;"><tbody><tr>
                <td style="width: 50%; text-align: center; border: none; vertical-align: top;">
                    Mengetahui,<br>Kepala Sekolah
                    <div style="height: 80px;"></div>
                    <strong style="text-decoration: underline;">${d.kepsekNama}</strong><br>
                    NIP. ${d.kepsekNip}
                </td>
                <td style="width: 50%; text-align: center; border: none; vertical-align: top;">
                    ${d.lokasiTtd}, ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br>
                    Guru Mata Pelajaran
                    <div style="height: 80px;"></div>
                    <strong style="text-decoration: underline;">${d.namaPenyusun}</strong><br>
                    NIP. ${d.guruNip}
                </td>
            </tr></tbody></table>
        `;
    }

    function buildDelapanDimensi(d) {
        const { elemenCp, modelPembelajaran } = d;
        const allDimensions = profilLulusanDatabase.desc;
        let relevantDimensions = new Set(profilLulusanDatabase.base);
        if (profilLulusanDatabase.byElemen[elemenCp]) {
            profilLulusanDatabase.byElemen[elemenCp].forEach(dim => relevantDimensions.add(dim));
        }
        const modelMap = { 'Project-Based Learning (PjBL)': ['Kolaborasi', 'Penalaran Kritis', 'Kreativitas'], 'Problem-Based Learning (PBL)': ['Penalaran Kritis', 'Kolaborasi'], 'Cooperative Learning': ['Kolaborasi', 'Komunikasi'], 'Tactical Games Model': ['Penalaran Kritis', 'Kolaborasi'], 'Sport Education Model (SEM)': ['Kolaborasi', 'Kewargaan', 'Komunikasi'] };
        if (modelMap[modelPembelajaran]) {
            modelMap[modelPembelajaran].forEach(dim => relevantDimensions.add(dim));
        }
        let html = `<h3 class="subsection-title">3. 8 Dimensi Profil Lulusan Pembelajaran Mendalam</h3>
            <div class="info-box"><p>Melalui tujuan, materi, dan model pembelajaran yang dipilih, pembelajaran ini secara khusus berfokus pada pengembangan dimensi-dimensi berikut:</p><ul>`;
        Array.from(relevantDimensions).sort().forEach(dim => {
            html += `<li><strong>${dim}:</strong> ${allDimensions[dim]}</li>`;
        });
        return html + `</ul></div>`;
    }

    function buildKerangkaPembelajaran(d) {
        return `
            <h3 class="subsection-title">1. Kerangka Pembelajaran Mendalam</h3>
            <p>Agar pembelajaran berjalan efektif, kerangka pembelajaran ini mencakup empat komponen utama:</p>
            <ol>
                <li><strong>Praktik Pedagogis:</strong> Model <strong>${d.modelPembelajaran}</strong> dipilih untuk mendorong siswa aktif bergerak, berkolaborasi, dan memecahkan masalah.</li>
                <li><strong>Kemitraan Pembelajaran:</strong> Melibatkan orang tua untuk mendukung aktivitas fisik anak di rumah dan komunitas sekolah.</li>
                <li><strong>Lingkungan Pembelajaran:</strong> Menciptakan suasana belajar yang suportif, aman, dan menyenangkan.</li>
                <li><strong>Pemanfaatan Teknologi Digital:</strong> Memanfaatkan stopwatch digital dan proyektor untuk menampilkan video contoh gerakan.</li>
            </ol>
        `;
    }

    function buildLangkahPembelajaran(d) {
        let allMeetingsHTML = '';
        const { alokasiWaktu, modelPembelajaran, materiSpesifik, includeCoding, codingTime } = d;
        const totalMenitPerPertemuan = alokasiWaktu.jpPerPertemuan * alokasiWaktu.menitPerJP;
        let durasiIntiAwal = totalMenitPerPertemuan - (Math.round(totalMenitPerPertemuan * 0.20) * 2);
        let durasiIntiRevisi = includeCoding && codingTime > 0 && codingTime < durasiIntiAwal ? durasiIntiAwal - codingTime : durasiIntiAwal;
        const durasi = { pendahuluan: Math.round(totalMenitPerPertemuan * 0.20), penutup: Math.round(totalMenitPerPertemuan * 0.20), inti: durasiIntiRevisi };

        for (let i = 0; i < alokasiWaktu.jumlahPertemuan; i++) {
            let kegiatanHTML = `<h4>Pertemuan Ke-${i + 1} (${alokasiWaktu.jpPerPertemuan} JP x ${alokasiWaktu.menitPerJP} Menit)</h4>`;
            kegiatanHTML += `<p><strong>Kegiatan Pendahuluan (${durasi.pendahuluan} Menit):</strong></p><ol>
                <li>Guru membuka pelajaran, berdoa, memeriksa kehadiran. ${getLearningLabel("ice breaking")}</li>
                <li>Apersepsi: Guru mengaitkan pengalaman siswa dengan topik. ${getLearningLabel("apersepsi")}</li>
                <li>Guru menyampaikan tujuan pembelajaran. ${getPengalamanLabel('memahami')} ${getLearningLabel("menyampaikan tujuan")}</li>
                <li>Pemanasan dengan permainan yang relevan. ${getLearningLabel("permainan")}</li>
            </ol>`;
            kegiatanHTML += `<p><strong>Kegiatan Inti (${durasiIntiAwal} Menit):</strong></p>`;
            let modelSintaks = JSON.parse(JSON.stringify(sintaksDatabase[modelPembelajaran] || sintaksDatabase['Default']));
            if(includeCoding) {
                const enrichmentStep = { isEnrichment: true, content: `⭐ <strong>Aktivitas Pengayaan (Opsional): Coding PJOK (${codingTime} Menit)</strong><br>Lakukan aktivitas 'Coding PJOK' pada <strong>Lampiran G.3</strong>.` };
                modelSintaks.splice(modelSintaks.length - 1, 0, enrichmentStep);
            }
            kegiatanHTML += `<p>Sintaks Model ${modelPembelajaran}:</p><table style="width: 100%; border-collapse: collapse; margin-top: 1em; font-size: 0.9em; page-break-inside: avoid;">
                <thead style="background-color: #f9fafb;"><tr>
                    <th style="width: 25%; border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; font-weight: 600;">Fase Pembelajaran</th>
                    <th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; font-weight: 600;">Aktivitas Guru dan Peserta Didik (Alokasi: ${durasi.inti} Menit)</th>
                    <th style="width: 20%; border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; font-weight: 600;">Pengalaman Belajar</th>
                </tr></thead><tbody>`;
            modelSintaks.forEach(step => {
                if (step.isEnrichment) {
                    kegiatanHTML += `<tr><td colspan="3" style="border: 1px solid #d1d5db; padding: 0.75rem; background-color: #fefce8;">${step.content}</td></tr>`;
                } else {
                    const activityText = step.activity.replace(/{materi_spesifik}/g, `<strong>${materiSpesifik}</strong>`);
                    kegiatanHTML += `<tr>
                        <td style="border: 1px solid #d1d5db; padding: 0.75rem; font-weight: 600; vertical-align: top;">${step.phase}</td>
                        <td style="border: 1px solid #d1d5db; padding: 0.75rem; vertical-align: top;">${activityText} ${getLearningLabel(activityText)}</td>
                        <td style="border: 1px solid #d1d5db; padding: 0.75rem; vertical-align: top;">${getPengalamanLabel(step.experience)}</td>
                    </tr>`;
                }
            });
            kegiatanHTML += `</tbody></table>`;
            kegiatanHTML += `<p><strong>Kegiatan Penutup (${durasi.penutup} Menit):</strong></p><ol>
                <li>Pendinginan dengan peregangan statis. ${getLearningLabel("mindful")}</li>
                <li>Siswa dan guru menyimpulkan dan merefleksikan pembelajaran. ${getPengalamanLabel('merefleksi')} ${getLearningLabel("refleksi")}</li>
                <li>Guru memberikan umpan balik dan apresiasi.</li>
                <li>Guru menutup pelajaran dengan doa.</li>
            </ol>`;
            allMeetingsHTML += kegiatanHTML + (i < alokasiWaktu.jumlahPertemuan - 1 ? '<hr style="border-top: 1px dashed #ccc; margin: 2rem 0;">' : '');
        }
        return allMeetingsHTML;
    }

    function buildAsesmenSection(d) {
         return `
              <table class="info-table">
                  <thead><tr><th>Jenis Asesmen</th><th>Tujuan</th><th>Teknik & Instrumen</th></tr></thead>
                  <tbody>
                      <tr><td><strong>Diagnostik</strong></td><td>Mengidentifikasi kemampuan awal.</td><td>Tanya jawab, permainan singkat.</td></tr>
                      <tr><td><strong>Formatif</strong></td><td>Memantau kemajuan belajar.</td><td>Observasi, penilaian diri/teman.</td></tr>
                      <tr><td><strong>Sumatif</strong></td><td>Mengukur ketercapaian tujuan.</td><td>Unjuk kerja, tes keterampilan.</td></tr>
                  </tbody>
              </table>`;
    }

    function buildPengayaanRemedial(d) {
        return `<p><strong>Pengayaan:</strong><br>Siswa yang sudah mahir diminta mencoba variasi gerakan ${d.materiSpesifik.toLowerCase()} yang lebih kompleks dan menjadi tutor sebaya.</p><p class="mt-4"><strong>Remedial:</strong><br>Siswa yang masih kesulitan diberikan bimbingan ulang secara personal atau dalam kelompok kecil.</p>`;
    }

    function buildRefleksi(d) {
        return `
            <h5><strong>Refleksi Guru</strong></h5>
            <ul><li>Apakah seluruh siswa mengikuti pelajaran dengan antusias?</li><li>Apakah siswa mengalami kesulitan dalam model pembelajaran "${d.modelPembelajaran}"?</li></ul>
            <h5 class="mt-6"><strong>Refleksi Peserta Didik</strong></h5>
            <ul><li>Bagian mana dari pelajaran hari ini yang paling menantang?</li><li>Apa kesulitan terbesarmu saat mencoba ${d.materiSpesifik.toLowerCase()}?</li></ul>`;
    }
    
    function buildLkpd(d) {
        const lkpdDatabase = {
            'default': { title: "Lembar Kerja Pengamatan", tujuan: "Mengamati kemampuan siswa dalam {materi_spesifik}.", alat: ["Area/lapangan", "Alat tulis"], langkah: ["Amati setiap siswa.", "Berikan tanda centang (✓).", "Tuliskan catatan."], tabel: `<table><thead><tr><th rowspan="2">Nama</th><th colspan="3">Aspek</th><th rowspan="2">Catatan</th></tr><tr><th>Persiapan</th><th>Proses</th><th>Hasil</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>` },
            'sepak-bola-7': { title: "LKPD Observasi Sepak Bola", tujuan: "Mengamati penerapan teknik {materi_spesifik} dalam permainan.", alat: ["Bola", "Cone", "Rompi"], langkah: ["Bagi siswa ke tim 4 vs 4.", "Fokus pada efektivitas keputusan.", "Gunakan tabel ceklis."], tabel: `<table><thead><tr><th rowspan="2">Nama</th><th colspan="3">Keputusan</th><th rowspan="2">Catatan</th></tr><tr><th>Passing</th><th>Dribbling</th><th>Menembak</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>` },
            'pola-makan-sehat-7': { title: "LKPD Analisis Studi Kasus", tujuan: "Menganalisis skenario hidup sehat.", alat: ["Lembar studi kasus"], langkah: ["Baca kasus.", "Identifikasi perilaku.", "Diskusikan solusi."], tabel: `<table><thead><tr><th>Studi Kasus</th><th>Perilaku Tidak Sehat</th><th>Rekomendasi</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>`},
            'senam-lantai-7': { title: "LKPD Penilaian Rangkaian Gerak", tujuan: "Menilai kemampuan merangkai gerakan {materi_spesifik}.", alat: ["Matras"], langkah: ["Siswa melakukan rangkaian.", "Guru menilai kualitas.", "Berikan skor dan umpan balik."], tabel: `<table><thead><tr><th rowspan="2">Nama</th><th colspan="4">Kualitas Gerakan</th><th rowspan="2">Total</th></tr><tr><th>Keseimbangan</th><th>Kelenturan</th><th>Keberanian</th><th>Kerapian</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>` }
        };
        const lkpdData = lkpdDatabase[d.materiKey] || lkpdDatabase.default;
        return `<h3>1. Lembar Kerja Peserta Didik (LKPD)</h3><div class="lampiran-box">
            <h4>${lkpdData.title.replace(/{materi_spesifik}/g, d.materiSpesifik)}</h4>
            <p><strong>Tujuan:</strong> ${lkpdData.tujuan.replace(/{materi_spesifik}/g, d.materiSpesifik)}</p>
            <p><strong>Alat & Bahan:</strong> ${Array.isArray(lkpdData.alat) ? lkpdData.alat.join(', ') : ''}</p><hr class="my-2">
            <h5><strong>Langkah Kerja:</strong></h5><ol>${Array.isArray(lkpdData.langkah) ? lkpdData.langkah.map(l => `<li>${l}</li>`).join('') : ''}</ol>
            ${lkpdData.tabel.replace(/{materi_spesifik}/g, d.materiSpesifik)}</div>`;
    }

    function buildAsesmenOtentik(d) {
        const criteria = [ { name: 'Sikap Awal', desc: 'Posisi tubuh awal.' }, { name: 'Pelaksanaan Gerak', desc: 'Kualitas gerakan inti.' }, { name: 'Sikap Akhir', desc: 'Posisi tubuh akhir.' }, { name: 'Koordinasi', desc: 'Kelancaran gerak.' } ];
        let rubrikHTML = `<h3>2. Format Penilaian Otentik (Sumatif)</h3><div class="lampiran-box">
            <p><strong>Bentuk Asesmen:</strong> Unjuk Kerja: Praktik ${d.materiSpesifik}</p>
            <h5 style="margin-top:1.5rem;"><strong>Rubrik Penilaian:</strong></h5>
            <table style="font-size:0.85em;">
                <thead><tr><th>Kriteria</th><th>Skor 4 (Sangat Baik)</th><th>Skor 3 (Baik)</th><th>Skor 2 (Cukup)</th><th>Skor 1 (Kurang)</th></tr></thead>
                <tbody>`;
        criteria.forEach(c => {
            rubrikHTML += `<tr><td><strong>${c.name}</strong><br><small>${c.desc}</small></td>
                <td>Sangat baik & konsisten.</td><td>Baik, sedikit kesalahan.</td>
                <td>Cukup, banyak kekurangan.</td><td>Perlu bimbingan intensif.</td></tr>`;
        });
        return rubrikHTML + `</tbody></table></div>`;
    }

    function buildCodingPJOKLampiran(d) {
        let content = `<p>Aktivitas pengayaan ini tidak diaktifkan.</p>`;
        if(d.includeCoding) {
            content = `<p class="font-semibold">Petunjuk:</p>
                <p>Gunakan tombol <strong class="text-sky-600">'Ide Coding PJOK'</strong> untuk menghasilkan ide, lalu tempelkan hasilnya di sini.</p>
                <div class="mt-4 p-4 border-2 border-dashed rounded-md bg-gray-50 text-center text-gray-500">[ Tempelkan hasil 'Ide Coding PJOK' di sini ]</div>`;
        }
        return `<h3>3. Aktivitas Coding PJOK (Unplugged)</h3><div class="lampiran-box">${content}</div>`;
    }
    
    function buildGlosarium(d) {
        const glosariumDatabase = { 'default': { "Lokomotor": "Gerak pindah tempat.", "Non-lokomotor": "Gerak di tempat.", "Manipulatif": "Gerak dengan objek." }, 'sepak-bola': { "Passing": "Mengoper bola.", "Controlling": "Menghentikan bola.", "Dribbling": "Menggiring bola." }, 'bola-voli': { "Servis": "Pukulan awal.", "Passing Bawah": "Menerima bola dengan lengan bawah.", "Smash": "Pukulan keras menukik." }, 'bola-basket': { "Dribbling": "Menggiring bola.", "Shooting": "Melempar bola ke keranjang.", "Lay-up": "Tembakan jarak dekat." }, 'kasti': { "Melempar": "Melontarkan bola.", "Menangkap": "Menguasai bola.", "Base": "Tempat hinggap." }, 'bulutangkis': { "Servis": "Pukulan awal.", "Smash": "Pukulan keras.", "Dropshot": "Pukulan tipuan." }, 'tenis-meja': { "Bet": "Alat pemukul.", "Spin": "Putaran bola.", "Rally": "Pukulan bolak-balik." }, 'atletik-jalan-cepat': { "Kontak Tanah": "Satu kaki harus selalu menyentuh tanah." }, 'atletik-lari-pendek': { "Start Jongkok": "Posisi awal lari.", "Sprinter": "Pelari jarak pendek." }, 'atletik-lompat-jauh': { "Awalan": "Lari ancang-ancang.", "Tolakan": "Menolak pada papan tumpuan." }, 'atletik-tolak-peluru': { "Gaya O'Brien": "Gaya membelakangi tolakan.", "Sektor Tolakan": "Area tolakan." }, 'beladiri-silat': { "Kuda-kuda": "Posisi dasar tumpuan kaki.", "Tangkisan": "Gerakan bertahan." }, 'kebugaran-jasmani': { "Kekuatan": "Kemampuan otot menahan beban.", "Daya Tahan": "Kemampuan kerja dalam waktu lama." }, 'senam-lantai': { "Guling Depan": "Berguling ke depan.", "Meroda": "Memutar tubuh ke samping." }, 'senam-irama': { "Irama": "Ketukan acuan gerak.", "Koordinasi": "Keterpaduan gerak." }, 'renang-dada': { "Gerak Kaki Katak": "Gerakan kaki seperti katak.", "Strok": "Satu siklus gerak lengkap." }, 'pola-makan-sehat': { "Kalori": "Satuan energi.", "Gizi Seimbang": "Komposisi gizi sesuai kebutuhan." }, 'pergaulan-bebas': { "NAPZA": "Narkotika, Psikotropika, Zat Adiktif.", "Asertif": "Sikap tegas dan jujur." } };
        const getGlosariumKey = (materiKey) => { if (!materiKey) return 'default'; const keys = Object.keys(glosariumDatabase); for (const key of keys) { if (materiKey.includes(key.split('-')[0])) return key; } return 'default'; };
        const glosariumData = glosariumDatabase[getGlosariumKey(d.materiKey)] || glosariumDatabase.default;
        let glosariumHTML = `<h3>1. Glosarium</h3><div class="lampiran-box"><ul>`;
        Object.entries(glosariumData).forEach(([istilah, definisi]) => {
            glosariumHTML += `<li><strong>${istilah}:</strong> ${definisi}</li>`;
        });
        return glosariumHTML + `</ul></div>`;
    }

    function buildDaftarPustaka(d) {
        const year = new Date().getFullYear();
        return `<h3 class="subsection-title">2. Daftar Pustaka</h3><div class="lampiran-box"><ul>
            <li>Muhajir, dkk. (${year}). <em>Buku Panduan Guru & Siswa PJOK Kelas ${d.kelas}</em>. Jakarta: Kemendikbudristek.</li>
            <li>YouTube & Platform Video Edukasi lainnya.</li>
        </ul></div>`;
    }

    // --- FUNGSI-FUNGSI BANTUAN AI (GEMINI) ---
    async function callGemini(prompt, retries = 3) {
        const proxyUrl = '/api/gemini-proxy';
        const payload = { contents: [{ parts: [{ text: prompt }] }] };

        try {
            const response = await fetch(proxyUrl, { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(payload) 
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.error?.message || `API Error: ${response.status}`;
                
                // Periksa error spesifik "overloaded" dan coba lagi jika memungkinkan
                if (response.status === 429 || errorMessage.includes("overloaded") || errorMessage.includes("model is overloaded")) {
                    if (retries > 0) {
                        console.warn(`Model overloaded. Retrying... (${retries} retries left)`);
                        await new Promise(res => setTimeout(res, 1500)); // Tunggu 1.5 detik sebelum mencoba lagi
                        return callGemini(prompt, retries - 1);
                    } else {
                         throw new Error("Model AI sedang sibuk. Mohon coba beberapa saat lagi.");
                    }
                }
                throw new Error(errorMessage);
            }

            const result = await response.json();
            if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
                return result.candidates[0].content.parts[0].text;
            }
             if (result.candidates && result.candidates[0]?.finishReason === 'SAFETY') {
                return "Respons diblokir karena pengaturan keamanan. Coba gunakan prompt yang berbeda.";
            }
            throw new Error("Respons API tidak valid atau kosong.");
        } catch (error) {
            console.error("callGemini Error:", error);
            // Memberikan pesan yang lebih ramah pengguna
            return `Terjadi kesalahan: ${error.message}. Pastikan fungsi Netlify sudah di-deploy dan API Key sudah diatur dengan benar.`;
        }
    }

    function markdownToHtml(text) {
        const lines = text.replace(/\r/g, '').split('\n');
        let html = ''; let inList = null;
        const closeList = () => { if (inList) { html += `</${inList}>`; inList = null; } };
        for (let line of lines) {
            line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('### ')) { closeList(); html += `<h3>${line.substring(4)}</h3>`; }
            else if (trimmedLine.startsWith('## ')) { closeList(); html += `<h2>${line.substring(3)}</h2>`; }
            else if (trimmedLine.startsWith('# ')) { closeList(); html += `<h1>${line.substring(2)}</h1>`; }
            else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) { if (inList !== 'ul') { closeList(); html += '<ul>'; inList = 'ul'; } html += `<li>${line.substring(line.indexOf(' ') + 1)}</li>`; } 
            else if (/^\d+\.\s/.test(trimmedLine)) { if (inList !== 'ol') { closeList(); html += '<ol>'; inList = 'ol'; } html += `<li>${line.substring(line.indexOf(' ') + 1)}</li>`; } 
            else { closeList(); if (trimmedLine.length > 0) { html += `<p>${line}</p>`; } }
        }
        closeList(); return html;
    }

    function showModal(title, content) {
        ui.gemini.modalTitle.innerText = title;
        ui.gemini.modalContent.innerHTML = content;
        ui.gemini.modal.classList.remove('hidden');
        lucide.createIcons();
    }
    
    function setupGeminiListeners() {
        const geminiPromptSuffix = " Format jawaban dalam bentuk markdown (gunakan ### untuk subjudul, * atau 1. untuk list, dan **teks** untuk bold).";
        async function handleGeminiRequest(button, icon, title, prompt) {
            const loadingHTML = `<div class="text-center p-4"><div class="text-4xl mb-4">${icon}</div><p class="animate-pulse text-gray-600">Memproses permintaan Anda...</p></div>`;
            showModal(title, loadingHTML);
            const result = await callGemini(prompt);
            showModal(title, markdownToHtml(result));
        }
        ui.gemini.warmupBtn.addEventListener('click', () => { 
            const d = getFormInputs(); 
            handleGeminiRequest(ui.gemini.warmupBtn, '🔥', `Ide Pemanasan untuk ${d.materiJudul}`, `Berikan 3 ide permainan pemanasan kreatif untuk materi '${d.materiJudul}' (fokus: ${d.materiSpesifik}) untuk siswa Kelas ${d.kelas}. Jelaskan tujuan dan cara bermainnya.` + geminiPromptSuffix);
        });
        ui.gemini.materiBtn.addEventListener('click', () => { 
            const d = getFormInputs(); 
            handleGeminiRequest(ui.gemini.materiBtn, '📚', `Materi Mendalam: ${d.materiJudul}`, `Jelaskan materi '${d.materiJudul}' fokus pada '${d.materiSpesifik}' untuk remaja Kelas ${d.kelas}. Sertakan analogi, poin kunci, dan kesalahan umum.` + geminiPromptSuffix);
        });
        ui.gemini.quizBtn.addEventListener('click', () => { 
            const d = getFormInputs(); 
            handleGeminiRequest(ui.gemini.quizBtn, '🧩', `Kuis Interaktif: ${d.materiJudul}`, `Buat 5 soal kuis HOTS pilihan ganda (A, B, C, D) untuk materi '${d.materiJudul}' (fokus: '${d.materiSpesifik}') Kelas ${d.kelas}. Sertakan kunci jawaban dan penjelasan.` + geminiPromptSuffix);
        });
        ui.gemini.codingBtn.addEventListener('click', () => { 
            const d = getFormInputs(); 
            handleGeminiRequest(ui.gemini.codingBtn, '🤖', `Ide Unplugged Coding`, `Berikan 2 ide "Unplugged Coding" yang terintegrasi dengan materi PJOK '${d.materiJudul}' (Fokus: ${d.materiSpesifik}) untuk Kelas ${d.kelas}. Jelaskan konsep coding, integrasi, dan langkah-langkahnya.` + geminiPromptSuffix);
        });
    }

    function copyToClipboard(htmlContent, plainText, buttonElement, successIcon, originalContent) {
        const listener = (ev) => {
            ev.preventDefault();
            ev.clipboardData.setData('text/html', htmlContent);
            ev.clipboardData.setData('text/plain', plainText);
        };
        document.addEventListener('copy', listener);
        document.execCommand('copy');
        document.removeEventListener('copy', listener);
        buttonElement.innerHTML = successIcon;
        lucide.createIcons();
        setTimeout(() => { buttonElement.innerHTML = originalContent; lucide.createIcons(); }, 2000);
    }

    function setupEventListeners() {
        ui.kelas.addEventListener('change', populateMateri);
        ui.materiPembelajaran.addEventListener('change', updateSuggestionsFromMateri);
        ui.form.addEventListener('submit', handleGenerate);
        ui.includeCoding.addEventListener('change', () => ui.codingTimeContainer.classList.toggle('hidden', !ui.includeCoding.checked));
        ui.gemini.modalClose.addEventListener('click', () => ui.gemini.modal.classList.add('hidden'));
        ui.gemini.modalCopy.addEventListener('click', () => {
            const contentHTML = ui.gemini.modalContent.innerHTML;
            const title = ui.gemini.modalTitle.innerText;
            const fullHtml = `<!DOCTYPE html><html><head><title>${title}</title></head><body>${contentHTML}</body></html>`;
            copyToClipboard(fullHtml, ui.gemini.modalContent.innerText, ui.gemini.modalCopy, '<i data-lucide="check" class="inline-block mr-2 h-5 w-5"></i> Tersalin!', 'Salin Teks');
        });
        ui.output.copyBtn.addEventListener('click', () => {
            const htmlContent = ui.output.content.innerHTML;
            const title = ui.output.content.querySelector('.subtitle')?.innerText || 'Modul Ajar PJOK';
            const fullHtml = `<!DOCTYPE html><html><head><title>${title}</title><style>body{font-family:sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}</style></head><body>${htmlContent}</body></html>`;
            copyToClipboard(fullHtml, ui.output.content.innerText, ui.output.copyBtn, '<i data-lucide="check" class="mr-2 h-4 w-4"></i> Tersalin!', '<i data-lucide="copy" class="mr-2 h-4 w-4"></i> Salin');
        });
        ui.output.backBtn.addEventListener('click', () => {
            ui.output.content.innerHTML = '';
            ui.output.placeholder.classList.remove('hidden');
            ui.output.actionButtonsWrapper.classList.add('hidden');
        });
    }
    setupInitialOptions();
    populateKelas();
    setupEventListeners();
    setupGeminiListeners();
});