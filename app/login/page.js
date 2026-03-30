"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../services/api";
import styles from "../styles/Login.module.css";

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post("/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            router.push("/chat");
        } catch {
            alert("Falha no login. Verifique suas credenciais.");
        }
    }

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleLogin}>

                <h1 className={styles.logo}>Code<span>Tutor AI</span></h1>

                <h3 className={styles.title}>Login</h3>

                <input
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />

                <button className={styles.button} type="submit">Entrar</button>

                <p className={styles.registerLink}>
                    Não possui conta?
                    <Link href="./cadastro" className={styles.link}>
                        <span>Cadastre-se aqui</span>
                    </Link>
                </p>

            </form>
        </div>
    )
}