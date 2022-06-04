/*< input type = "text" id = "textInput" value = "Initial" >
    < button type = "submit" id = "btnId" > add button </button> 
    <div > Here come the text: < span id = "textSpan" > < /span></div >*/

//const btnAdd = document.querySelector('#btnId'); //w?y
//const input = document.querySelector('#textInput'); //w? y
//const inputValue = document.querySelector('#textInput').value; //w?y
//const textSpan = document.querySelector('#textSpan'); //W? y
//console.log('textSpan:', textSpan);

//btnAdd.addEventListener('click', (event) => {
//  console.log("textInput value; ", input.value)
//textSpan.innerHTML = input.value;
//console.log('to enter event properties: ', event);
//});

/*start delete request W? yes good job*/
const baseUrl = "http://localhost:3000/";
const eachLoadList_Id = "2de9529a-74b8-47be-a2f4-8ad6aea52213";
const noWhiteSpace = eachLoadList_Id.replace(/\s/g, '');
console.log("noWhiteSpace", noWhiteSpace);
const result = baseUrl.concat(noWhiteSpace);
console.log('result:  ', result);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

const deleteData = async(delData) => {
        try {
            const delResponse = await fetch(result, requestOptions)
        } /*try*/
        catch (err) {
            console.erro(err)
        } //catch
    } //async

deleteData();
/*end delete request*/

/*hieronder van script.js idem*/
/*kladblok-----------------------------------------------------------*/
/* start eventlistener to newDelBtn */
//newDelBtn.addEventListener('click', (eventDelBtn) => {
//  console.log('entering eventlistener newDelBtn', eventDelBtn);

//});
/*end eventlistener delete btn----------------------------------------------*/


/*einde kladblok*/