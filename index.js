function iniciar() {
    const buscarCep =  () => {
        const form = document.querySelector('[data-form]');
        const cp = document.querySelector('[data-cep]');

        const cep = [] 
       

        const rua = document.querySelector('[data-rua]');
        const bairro = document.querySelector('[data-bairro]');
        const cidade = document.querySelector('[data-cidade]');
        const estado = document.querySelector('[data-estado]');
        cp.addEventListener('focus', () => {
            cp.placeholder = '';

         cp.addEventListener('input', ()=> {
             cep.push(cp.value);
             console.log(cep.length)
             if (cep.length == 5)
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
            console.log(typeof cep);
          
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