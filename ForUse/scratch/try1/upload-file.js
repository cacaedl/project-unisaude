// Inisialisasi Dropzone.js
Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("#dropzone", {
    url: "http://localhost:5000/upload",  
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    parallelUploads: 20,
    autoQueue: false,
    previewsContainer: "#previews",
    clickable: ".fileinput-button",
    addRemoveLinks: true,
    acceptedFiles: "image/*,application/pdf,.txt",  
});



myDropzone.on("totaluploadprogress", function(progress) {
    console.log("Upload Progress: " + progress + "%");
});


document.getElementById("startUploadBtn").addEventListener("click", function() {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
});


myDropzone.on("addedfile", function(file) {
    console.log("File added: " + file.name);
});


myDropzone.on("removedfile", function(file) {
    console.log("File removed: " + file.name);
});