import React from 'react';

class NameSearch extends React.Component{

    Namesearch(event) {

        event.preventDefault();

        let element = document.querySelector("#pokemonName");

        fetch("/name/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = document.getElementById("pokemonName").value + " is " + processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }

        });
    }

 render() {
     return(
        <div>
            <h2>Name</h2>
            <form onSubmit={this.NameSearch}>
            <input id="pokemonName" type="text" />
            <button>Submit</button>
            </form>
        </div>
     );
 }
}

export default NameSearch;