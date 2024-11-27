import { useState } from "react"

import "./fixandoUseState.css"

interface UserPropos {
    nome: string,
    cargo: string,
}

export function FixandoUseState() {
    const [user, setUser] = useState<UserPropos>({nome : "Visitante", cargo: ""});   
    
    function handleLogin() {
        setUser({
            nome: "Guilherme Costa",
            cargo: "Desenvolvedor"
        });
    }

    function handleLogout() {
        setUser({
            nome: "Visitante",
            cargo: ""
        });
    }

    return(
        <div className="cls-fixando-use-state">      
            <h3>Olá {user.nome}, seja bem vindo!</h3>
            <p>Seu cargo: {user.cargo}</p>     
            <div>
                <button type="button" onClick={handleLogin}>Entrar</button>
                <button type="button" onClick={handleLogout}>Sair</button>
            </div>
        </div>
    );
}