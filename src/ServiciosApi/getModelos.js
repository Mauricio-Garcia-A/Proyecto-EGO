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

export function getModeloSeleccionado({id}) {
    const API_URL_MODELO_SELECCIONADO=`${API_URL}/${id}`
    return fetch(API_URL_MODELO_SELECCIONADO)
        .then(res => res.json())
        .then(data => { 
            const {id, name, segment, year, thumbnail, photo , title, model_features, model_highlights}=data
            const description=data.description.split('>')[1].split('<')[0]
            const price= Intl.NumberFormat('es-AR', {style:'currency', currency:'ARS'}).format(data.price)
            const model={id, name, segment, year, thumbnail, photo , title, description, price}
            
            const features = model_features

            const highlights = model_highlights.map((highlight)=>{
                const {image,title}=highlight
                const content =highlight.content.split('>')[1].split('<')[0]
                return {title, image, content}
            })
            
            return {model, features, highlights}
        })
        .catch(error => {
            const data={}
            return data
        })       
}