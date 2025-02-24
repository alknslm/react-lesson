import React from 'react'

export const users = [
    {
        username: "selim",
        password: "1"
    },
    {
        username: "ali",
        password: "2"
    },
]
// Componenetin tamamını dışarı açmak için export default kullanılır
// Componenet içinde sadece bir methodu dışarı açmak için method başında export kullanılır

function Login() {
    // birden fazla div kullanmak için divle sarmak gerekiyor
    // <> </> şeklinde de kullanılabilir (fragment)
    return (
        <div>
            <div>
                <p>Kullanıcı Adı : </p>
                <input type="text" />
            </div>
            <div>
                <p>Şifreniz : </p>
                <input type="text" />
            </div>
            <button>Giriş Yap</button>
        </div>
    )
}

export default Login