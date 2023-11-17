export class API {
    static loginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
    }
}