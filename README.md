# Menu Project 🍽️

  - This project is very **special** for me because it is an *update* of the [Menu Project](https://github.com/kauanzin222/bootcamp-devjr-ProjetoMenu.git) that I had just done with:
    
      - HTML;
      - CSS;
      - JavaScript.
        
  - Now, in this project, I must remaster it with **BootStrap**, and this brought a new vision to me, I tried to make the site new with a much better interface, I applied components that I had learned and I was very concerned about responsiveness.
    
## Final Result:

![menu1](https://github.com/kauanzin222/bootcamp-devjr-projectmenu-bootstrap/blob/main/images/exemplos/menu1.png)
![menu2](https://github.com/kauanzin222/bootcamp-devjr-projectmenu-bootstrap/blob/main/images/exemplos/menu2.png)

--- 

### Modal
  - By clicking "Calcular" I used the modal component to display a summary of the order. Warning if an **item has not been selected or the name is invalid**.
    
![modal](https://github.com/kauanzin222/bootcamp-devjr-projectmenu-bootstrap/blob/main/images/exemplos/modal.png)

---
### Invalid name!
![nome](https://github.com/kauanzin222/bootcamp-devjr-projectmenu-bootstrap/blob/main/images/exemplos/nome.png)

---
### No items selected
![item](https://github.com/kauanzin222/bootcamp-devjr-projectmenu-bootstrap/blob/main/images/exemplos/item.png)

### Function of Result:
```js
modalResumo.on('show.bs.modal',

    function result() {
        var output = $("#output");
        
        /* Verificando se nome está vazio */
        var name = $("#name").val();
        if (name == '') {
            output.html(`<br><strong><h2 class="alert alert-warning">NOME INVÁLIDO!</h2><strong><br>`)
            return;
        }

        var quantities = $("[name='quantity']");

        var verificaQuantity = 0;
        var total = 0;

        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        for (var input of quantities) {
            var id = input.id;

            if (input.value > 0)
                verificaQuantity++;
        }

        if (verificaQuantity == 0) {
            output.html(`<br><strong><h2 class="alert alert-warning">NENHUM ITEM SELECIONADO!</h2><strong><br>`)
            return;
        }

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
````
