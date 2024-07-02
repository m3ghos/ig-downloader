async function ok() {
    const api = 'https://v3.saveig.app/api/ajaxSearch';
    const data = new URLSearchParams({
        'q': document.getElementById('reels').value,
        't': 'media',
        'lang': 'en'
    });

    try {
        document.getElementById('p').style.display = 'none'
        const response = await fetch(api, {
            method: 'POST',
            body: data
        });
        const req = await response.json();
        var url = req.split(' href="')[1].split('"')[0];
        document.getElementById('src').setAttribute('src',url);
        document.getElementById('src').style.display = 'block';
        document.getElementById('vid').style.display = 'block';

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('p').style.display = 'block';
    }
}

ok().then(result => console.log(result));
