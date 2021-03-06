//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
    addScore(score){
      this.scores.push(score);
    }
    average(){
      let total = 0

      for(let i = 0; i < this.scores.length; i++){
        total = total + this.scores[i];
      }
      return Math.floor((total/this.scores.length)*10)/10;
    }
    status(){
    let status = '';
      if(this.average() >= 90){
        status = 'Accepted';
      } else if(this.average() < 90 && this.average() > 80){
        status = 'Reserve';
      } else if(this.average() < 80 && this.average() > 70){
        status = 'Probationary';
      } else if (this.average() < 70){
        status = 'Rejected';
      }
      
       return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gladGator = new CrewCandidate('Glad Gator', 1.5, [75,78,62]);

console.log(bubbaBear.scores);
bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(bubbaBear.status());




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

console.log(gladGator.status());

while(gladGator.average() <= 90){
  gladGator.addScore(100);
}

console.log(gladGator.status());