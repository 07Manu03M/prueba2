export const find = async()=>{
    const url = new URL("https://67d2f8228bca322cc268a8cc.mockapi.io/");
    url.pathname += "information"
    const response = await fetch(url.toString(), {method: "get"});
    return await response.json();
}

export const search = async(id)=>{
    const url = new URL("https://67d2f8228bca322cc268a8cc.mockapi.io/");
    url.pathname += `information/${id}`
    const response = await fetch(url.toString(), {method: "get"});
    return await response.json();
}

export const save = async(data)=>{
    const url = new URL("https://67d2f8228bca322cc268a8cc.mockapi.io/");
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    url.pathname += `information`;
    const config = {
        method: "post",
        headers,
        body: JSON.stringify(data)
    }
    const response = await fetch(url.toString(), config);
    return await response.json();
}

export const edit = async(data)=>{
    const {id} = data;
    if(typeof id === "undefined") return "no se envio el id"
    data.updateAt = Math.floor(Date.now() / 1000);
    delete data.id;
    const url = new URL("https://67d2f8228bca322cc268a8cc.mockapi.io/")
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    url.pathname += `information/${id}`
    const config = {
        method: "put",
        headers,
        body: JSON.stringify(data)
    }
    const response = await (await fetch(url.toString(), config)).json();
    response.createdAt = new Date(response.createdAt * 1000);
    response.updateAt = new Date(response.updateAt * 1000);
    return response;
}

export const remove = ()=>{
    
}
