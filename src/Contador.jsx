export const Contador = ({valor, nome, idade, casado, children})=>{
    return (
        <div>
            Valor de mercado {valor} <br/>
            nome: {nome} <br/>
            idade: {idade} <br/>
            estado civil:  {casado ? "Casado" : "Solteiro"} <br/>
            {children}
        </div>
    )
}

