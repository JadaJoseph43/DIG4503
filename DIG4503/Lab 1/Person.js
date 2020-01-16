const chalk = required("chalk");

class Person {
    contructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;

        if(typeof this.favoriteColor =="string") {
           this.favoriteColr = "brown";
        }
    }

    speak() {

        console.log(chalk.keyword(this.favoriteColor)(this.name));

      }
    
    }

    module.exports = Person;



