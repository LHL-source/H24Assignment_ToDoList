/*initialization---------------------------------------*/
const addbutton = document.querySelector("#btnId");
const textInput_1 = document.querySelector("#textInput");
const container_Ul = document.querySelector('#containerUl');

/*start: eventlistener button add-------------------------------------*/

addbutton.addEventListener('click', (event) => {
        console.log('textInput_1.value', textInput_1.value);

        /*start function newTask-------------*/
        const postNewTask = async() => {
            const todo = {
                description: textInput_1.value,
                done: false
            };
            await itemPost(todo);
            container_Ul.innerHTML = "";
            await getDataOnDom();
            textInput_1.value = " ";
        };
        postNewTask();
        /*end function new task------------------*/
    })
    /*end : eventlistener button add---------------------------------------*/

/*get all data from the server, so call the getAllData */
getAllData();
/*end get all data from the server, so call the getAllData */

const getDataOnDom = async(doek) => {
    const list = await getAllData();

    var loadList_1 = list.map((eachLoadList) => {
        /*start put into the Dom*/
        const getNewLi = document.createElement('li');
        const getNewLiAppContUl = container_Ul.appendChild(getNewLi);
        const getNewInput = document.createElement('input');
        const getNewInputApp_getNewLi = getNewLi.appendChild(getNewInput);
        getNewInput.value = (eachLoadList.description);
        //make a delete button
        let getDelBtn = document.createElement('button');
        getNewLi.appendChild(getDelBtn);
        getDelBtn.setAttribute('id', 'getDelBtn');
        getDelBtn.setAttribute('type', 'submit');
        //make the trash icon
        const makeClass = document.createAttribute("class");
        makeClass.value = 'fa-solid fa-trash-can';
        getDelBtn.setAttributeNode(makeClass);

        //make a checkbox
        const theCheckBox = document.createElement('input');
        getNewLi.appendChild(theCheckBox);
        theCheckBox.setAttribute('type', 'checkbox');

        /* start eventlistener to newDelBtn , lees uit de eachLoadList._id-------------*/
        getDelBtn.addEventListener('click', (eventDelBtn) => {
            console.log('enter getDelBtn');
            const deleteTodo = (todoDomElement) => {
                const id = eachLoadList._id;
                const delDataTest = deleteData(id);
            }
            deleteTodo();
            container_Ul.innerHTML = "";
            /*start invoke getDataAfterDelete function----------------------------- */
            getDataOnDom();
        });
        /*end eventlistener delete btn----------------------------------------------*/

        return list
    });

    const loadList_2 = loadList_1
    return loadList_2
}

const getDataOnDom_1 = getDataOnDom();