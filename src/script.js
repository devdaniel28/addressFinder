const cepNumber = Number(document.querySelector('#cep'))

async function searchCep() {
    try {
        const cepAPI = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
        const cepJson = cepAPI.json()

        return cepJson
    } catch(error) {
        console.error(`Error performing action: ${error}`)
    }
}

