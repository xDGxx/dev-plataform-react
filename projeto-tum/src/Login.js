// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode processar os dados de login (ex: enviar para uma API)
        console.log('Email:', email);
        console.log('Senha:', senha);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
