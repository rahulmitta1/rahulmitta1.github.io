export const downloadBlob = (/** @type {Blob | MediaSource} */ blob, /** @type {string} */ filename) => {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}