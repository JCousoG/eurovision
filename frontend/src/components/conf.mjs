const BACKEND_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:8000"
    : "https://backend-5ja1.onrender.com"


export {BACKEND_URL}