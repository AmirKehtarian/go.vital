const API_KEY = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzE2NzgwMDAsImVkayI6IiQwMiQ4ZDg2Z20rNk9qUjFkUjFyRVM4ZW1RPT0kZXlwWjhxTUx4VG0xQ1hmVk5UblBsQkdUYnlEYTh1SS84V3ZDSm0vU2VOYm5hbmRFbU1HNDBFOGhnMTF2ZHVReSIsInVpZCI6Mzk5LCJjaWQiOjMyNSwiY2RiIjoid29sa2VfRlJOVE5EIiwiY25tIjoiRlJOVE5EIiwibWlkIjo0MjQsIm1ubSI6IkZSTlRORCIsImVpZCI6MSwiYXBwIjoidXNlciJ9.StueqwNjHwTFXI7wkbnoehkpXhn7lEaZFwqhx-qbRuk"

const URL_HOST = 'https://test.cura-go.de/web/v3/go.vital/protocol'

export const getFetch = ( type, page, state ) => {
    fetch(`${URL_HOST}?filter=${type}&page=${page}`, {
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        }
    })
        .then(res => res.json())
        .then(data => (state(data.items), console.log(data)))
}