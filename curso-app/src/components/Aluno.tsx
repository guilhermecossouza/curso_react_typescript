interface AlunosProps {
    nome: string,
    idade: number,
}

export function Aluno({ nome, idade }: AlunosProps) {
    return (
        <div>
            <h2>Aluno: {nome}</h2>
            <h3>Idade: {idade}</h3>
        </div>
    );
}