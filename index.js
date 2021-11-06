function iniciar() {
    const buscarCep =  () => {
        const form = document.querySelector('[data-form]');
        const cp = document.querySelector('[data-cep]');
        const rua = document.querySelector('[data-rua]');
        const bairro = document.querySelector('[data-bairro]');
        const cidade = document.querySelector('[data-cidade]');
        const estado = document.querySelector('[data-estado]');

      
      
       
        let armazenarStr = '';
        
      
 
        form.addEventListener('submit', (e) => {
            e.preventDefault();
           

            const nuns = /[a-z]/;
            const result = nuns.test(cp.value)
            if (result == false) {

                const url = `https://viacep.com.br/ws/${cp.value}/json/`;

                fetch(url).then(endereco => {
                    return endereco.json();
                }).then(endereco => {



                    if (endereco.logradouro) {

                        rua.innerHTML = `Logradouro - ${endereco.logradouro}`;
                        bairro.innerHTML = ` Bairro - ${endereco.bairro}`;
                        cidade.innerHTML = `Cidade - ${endereco.localidade}`;
                        estado.innerHTML = `Estado - ${endereco.uf}`;


                    }
                    console.log(endereco)
                     if(endereco.erro == true) {
                        alert("Digite um CEP valido!");
                        location.reload();



                    }


                }

                );

            } else {
                alert("Digite um CEP válido");
                location.reload();
            }
           
           
            
        });

        cp.addEventListener('focus', () => {
            cp.placeholder = '';
        });

        cp.addEventListener('input', () => {


            console.log(cp.value)
            if (cp.value.length == 5 && cp.value.indexOf('-') == -1) {
                armazenarStr = cp.value;
                //console.log(cp.value.length)

                cp.value = `${cp.value}-`
            } else if (cp.value.length == 6 && cp.value.indexOf('-') == 5) {


                //   console.log(armazenarStr, cp.value.indexOf('-'))
                cp.value = armazenarStr;
            }
            if (cp.value == false) {
                armazenarStr = ''
                console.log(cp.value, armazenarStr, cp.value.indexOf('-'))
                cp.focus();
                rua.innerHTML = '';
                bairro.innerHTML = '';
                cidade.innerHTML = '';
                estado.innerHTML = '';
                cp.addEventListener('focusout', () => {
                    cp.placeholder = 'ex 00000-000';
                })
            }
        })
       

    };
    buscarCep();
  }
  iniciar();