html = '';
function updateView() {
    mainPage();
    document.getElementById('app').innerHTML = html;
};

function mainPage() {
    html = /*HTML*/ `
    <h1>yo my name madian</h1>
    <div>this is my description</div>
    <button>and a button</div>
    <br/><br/><br/>
    <div>hello world!</div>
    `;
    return html;
}