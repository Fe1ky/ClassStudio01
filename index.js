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
    avrage(){
      let total = 0 

      for(let i = 0; i < this.scores.length; i++){
        total = total + this.scores[i];
      }
      return total/this.scores.length;
    }
    status(){
      let status = ''
      if(this.avrage >= 90){
        status = 'Accepted';
      } else if(this.avrage < 90 && this.average > 80){
        status = 'Reserve';
      } else if(this.avrage < 80 && this.average > 70){
        status = 'Probationary';
      } else {
        status = 'Rejected'
      }
      return `${this.name} earned an average test score of ${this.avrage()}% and has a status of ${status}.`
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