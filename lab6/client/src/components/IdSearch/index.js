import React from 'react';

class IdSearch extends React.Component{

    IdSearch(event) {

        event.preventDefault();

        let element = document.querySelector("#pokemonId");
       

        fetch("/id/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            
            let reporting = document.querySelector("#reportingArea");

            if(processed.error) {
                reporting.innerHTML = document.getElementById("pokemonId").value + " is " + processed.error;
            } else {
                reporting.innerHTML = processed.name;
            }

        });
        

    }

 render() {
     return(
        <div>
            <h2>ID</h2>
            <form onSubmit={this.IdSearch}>
            <input id="pokemonId" type="text" />
            <button>Submit</button>
            </form>
        </div>
     );
 }
}

export default IdSearch;