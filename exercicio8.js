const listaImoveis = [];
let opcao = "";

do {
    opcao = prompt(
        "Número de imóveis cadastrados: " + listaImoveis.length +
        "\n1 - Cadastrar Imóvel" +
        "\n2 - Listar Imóveis" +
        "\n3 - Remover Imóvel" +
        "\n4 - Sair"
    );

    switch (opcao) {
        case "1":
            const imovel = {};

            imovel.proprietario = prompt("Insira o nome do proprietário:");
            imovel.quartos = parseFloat(prompt("Insira a quantidade de quartos:"));
            imovel.banheiros = parseFloat(prompt("Insira a quantidade de banheiros:"));
            imovel.garagem = prompt("O imóvel possui garagem (S/N)");

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            );

            if (confirma) {
                listaImoveis.push(imovel);
            }

            break;

        case "2":
            for (let i = 0; i < listaImoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + listaImoveis[i].proprietario +
                    "\nQuartos: " + listaImoveis[i].quartos +
                    "\nBanheiros: " + listaImoveis[i].banheiros +
                    "\nPossui Garagem? " + listaImoveis[i].garagem
                );
            }
            break;

        case "3":
            indexImovel = parseFloat(prompt("Indique o número do imóvel que deseja excluir:"))
            listaImoveis.splice(indexImovel - 1)
            alert("Imóvel removido")
            break
        
        case "4":
            alert("Finalizando")
            break

        default:
            alert("Opção Inválida")
            break
        
    }
} while (opcao !== "4");