"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../services/api";
import styles from "../styles/Registro.module.css";

export default function Register() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e) {
        e.preventDefault();

        try {
            const res = await api.post("/api/auth/register", { email, password });
            alert("Registro bem-sucedido! Faça login para continuar.");
            router.push("/login");
        } catch {
            alert("Falha no registro. Tente novamente.");
        }
    }

    return (
        <div className={styles.container}>

            <form className={styles.form} onSubmit={handleRegister}>

                <h1 className={styles.logo}>Code<span>Tutor AI</span></h1>

                <h3 className={styles.title}>Registrar</h3>

                <div className={styles.inputGroup}>
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
                </div>

                <button className={styles.button} type="submit">Registrar</button>

                <p className={styles.link} onClick={() => router.push("/login")} > Já tem uma conta? <span>Faça login</span></p>

            </form>
        </div>
    )
}