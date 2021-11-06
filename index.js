function iniciar() {
    const buscarCep =  () => {
        const form = document.querySelector('[data-form]');
        const cp = document.querySelector('[data-cep]');
        const rua = document.querySelector('[data-rua]');
        const bairro = document.querySelector('[data-bairro]');
        const cidade = document.querySelector('[data-cidade]');
        const estado = document.querySelector('[data-estado]');

        let cep = '';
        console.log(typeof cep);
       


        cp.addEventListener('focus', () => {
            cp.placeholder = '';

         cp.addEventListener('input', ()=> {

             cep = cp.value;
             //console.log(cp.value.length)
             if (cep.length == 5 && cp.value.indexOf('-') == -1) {

                 console.log('Primeiro', cp.value.indexOf('-'), 'index e', cp.value.length)
                cp.value = `${cp.value}-`
            } else {
                console.log('Segundo', cp.value.indexOf('-'),'index e',cp.value.length)
            }
             if (cp.value == false) {

                 rua.innerHTML = '';
                 bairro.innerHTML = '';
                 cidade.innerHTML = '';
                 estado.innerHTML = '';
                 cp.addEventListener('focusout', () => {
                     cp.placeholder = 'ex 00000-000';
                 })
             }
         })
           
        })
        form.addEventListener('submit', (e) => {
            e.preventDefault();

           
           
            const url = `https://viacep.com.br/ws/${cep}/json/`;
           
            fetch(url).then(endereco => {
                return endereco.json();
            }).then( endereco => {
               
                
               
                if (endereco.logradouro) {
                    rua.innerHTML = endereco.logradouro;
                    bairro.innerHTML = endereco.bairro;
                    cidade.innerHTML = endereco.localidade;
                    estado.innerHTML = endereco.uf;
                   
                    
                }  else {
                    alert("Digite um CEP válido");
                    cep = '';
                    cp.focus();
                    rua.innerHTML = '';
                    bairro.innerHTML = '';
                    estado.innerHTML = '';

                } 


            }
      
            );
        });
       

    };
    buscarCep();
  }
  iniciar();