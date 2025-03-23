const accessKey = "X1csJBbXEXtAfa3q9EH6LEEIh-Z7rQ-hfljFBA4-IZo";
const content = [
    {query: "programming", elementId: "unsplash-image-programming"},
    {query: "mechanical+keyboard", elementId: "unsplash-image-keyboard"},
    {query: "coffee", elementId: "unsplash-image-coffee"},
];

function ambilGambar() {
    const fetchPromise = content.map(item => 
        fetch(`https://api.unsplash.com/photos/random?query=${item.query}&w=360&h=200&fit=crop&client_id=${accessKey}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById(item.elementId).src = data.urls.regular;
            })
            .catch(error => console.error(`Error mengambil gambar untuk ${item.query}: `, error))
    );

    Promise.all(fetchPromise).then(() => console.log("semua gambar telah disimpan"));
}

window.onload = ambilGambar;


// unsplash sekarang harus menggunakan api 
// maka kita gunakan fetch untuk api ke unsplash

// limit ambil gambar 50