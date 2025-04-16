// Inisialisasi Dropzone.js
Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("#dropzone", {
    url: "http://localhost:5000/upload", // Ganti dengan URL tujuan upload
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    parallelUploads: 20,
    autoQueue: false, // Agar file tidak langsung di-queue, perlu tombol "Start upload"
    previewsContainer: "#previews", // Menampilkan preview file di area yang disediakan
    clickable: ".fileinput-button", // Tombol untuk memilih file
    addRemoveLinks: true, // Menambahkan tombol "Remove" untuk setiap file
    acceptedFiles: "image/*,application/pdf,.txt", // Tipe file yang diterima
});

// Update progress bar saat upload
myDropzone.on("totaluploadprogress", function(progress) {
    console.log("Upload Progress: " + progress + "%");
});

// Mulai upload setelah tombol Start Upload diklik
document.getElementById("startUploadBtn").addEventListener("click", function() {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
});

// Batalkan upload
document.getElementById("cancelUploadBtn").addEventListener("click", function() {
    myDropzone.removeAllFiles(true);  // Hapus semua file yang di-upload
});
