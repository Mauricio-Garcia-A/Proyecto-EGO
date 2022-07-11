const API_URL = `https://challenge.agenciaego.tech/api/models`

export function getModelos({segment, ordering}) {
    const API_URL_MODELOS=`${API_URL}/?ordering=${ordering}&segment=${segment}`
    return fetch(API_URL_MODELOS)
        .then(res => res.json())
        .then(data => { 
            if (data.length !== 0) {
                const items = data.map(item => {
                    const {id, name, segment, photo, thumbnail, year} = item 
                    const price= Intl.NumberFormat('es-AR', {style:'currency', currency:'ARS'}).format(item.price)

                    return {id, name, price, segment, photo, thumbnail, year}
                })
                return items                
            } else {
                const items = []
                return items 
            } 
        })
        .catch(error => {
            const items=[]
            return items
        })       
}
