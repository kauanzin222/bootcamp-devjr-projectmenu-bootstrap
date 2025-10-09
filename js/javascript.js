var prods = [
    { id: 1, name: "Carne com batata", price: 30.0 },
    { id: 2, name: "Coxa de frango crocante", price: 25.0 },
    { id: 3, name: "Carne na panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 }
]

const modalResumo = $("#modalResumo");

modalResumo.on('show.bs.modal',

    function result() {
        var output = $("#output");
        var name = $("#name").val();
        var quantities = $("[name='quantity']");

        var total = 0;

        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })


        output.html(`<br>Caro(a) <strong>${name}</strong>, <br><br><br>
                    Seguem os dados do seu pedido <br><br>
                    O seu pedido é: <br><br>`);

        for (var input of quantities) {
            var id = input.id;

            if (input.value > 0) {
                output.append(`<li> Prato: ${prods[id - 1].name} - Preço unitário: ${formatter.format(prods[id - 1].price)} 
                        - Quantidade: ${input.value} - Total: ${formatter.format(input.value * prods[id - 1].price)}. </li>`);
                total += prods[id - 1].price * input.value;
            }
        }

        output.append(`<br><br><strong>Preço final: ${formatter.format(total)}<strong> <br><br>`);
    }
)

