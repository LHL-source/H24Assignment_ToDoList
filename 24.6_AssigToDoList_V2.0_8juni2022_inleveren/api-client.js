/*POST  request*/
const baseUrl = "http://localhost:3000";

const itemPost = async(aItem) => {

        const responsePost = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(aItem),
            headers: {
                "Content-Type": "application/json",
            },
        })
        try {
            (response => response.text())
            (result => console.log(result))
        } catch {
            error =>
                console.log('error', error)
        };
    }
    /*einde post request----------------------*/
    /*PUT request----------------------------*/
const baseUrl_2 = "http://localhost:3000/";

const putReqTask = async(id, todo) => {
    console.log('id:', id);
    console.log(' todo:', todo);

    const result = baseUrl_2.concat(id);
    console.log('result:  ', result);
    const responsePut = await fetch(result, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
    })
    try {
        (response => response.text())
        (result => console.log(result))
    } catch {
        error =>
            console.log('error', error)
    };
};
/*einde post request--------------------------------*/


/*start GET request -------------------------------*/
const getAllData = async(alldata) => {
    try {
        const response = await fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },


        })

        const dataJson = await response.json();

        return dataJson
    } catch (err) {
        console.error(err)
    }
};

/*end fetch loadlist-------------------------------------------------*/

/*start DELETE request-------------------------------*/
const baseUrl_1 = "http://localhost:3000/";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

const deleteData = async(id) => {
    const result = baseUrl_1.concat(id);

    try {
        const delResponse = await fetch(result, requestOptions)

    } catch (err) {
        console.error(err)
    }
}

/*end delete request-------------------------------------------------------*/