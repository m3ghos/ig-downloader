from requests import post

def ok():
    a = []
    api = 'https://v3.saveig.app/api/ajaxSearch'
    data = {
        'q':'https://www.instagram.com/reel/C66UMHGt5Yx/?igsh=MTQyNzZ0eHIxdjJoMw==',
        't':'media',
        'lang':'en'
    }
    req = post(api,data=data).json()
    return str(req).split(' href=\"')[1].split('\"')[0]
