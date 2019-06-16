import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  editable = false;
  myTitle = 'Salam les amis';

 newPerson = {
   id: 0,
   firstName: '',
   age: 0,
  vote: {
    like: 0, 
    dislike: 0
  }
 };

 persons = [
   { id: 1, firstName: 'Mouad', age: 24, vote: { like: 12, dislike: 1} },
   { id: 2, firstName: 'Mohamed', age: 34, vote: { like: 20, dislike: 5} },
   { id: 3, firstName: 'Said', age: 24, vote: { like: 30, dislike: 2} },
 ];

 addPerson() {
   this.persons = [...this.persons, this.newPerson];
   
   this.initPerson();
 }

 deletePerson(index) {
  

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    type: 'error',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.value) {
      this.persons.splice(index, 1);
      Swal.fire({
        title: 'Deleted!',
        type: 'success',
        timer: 5000
      })
    
    }
  })

 }


 editPerson(person) {
   this.editable = true;
   this.newPerson = person;
 }

 updatePerson() {
 
  this.editable = false;

  this.initPerson();

 }

 resetPerson() {
 
  this.editable = false;

    this.initPerson();

 }


 incLike(person) {
   person.vote.like++;
 }

 incDisLike(person) {
  person.vote.dislike++;
}

initPerson() {
  this.newPerson = {
    id: 0,
    firstName: '',
    age: 0,
    vote: {
      like: 0, 
      dislike: 0
    }
  }
}


receiveData(vote, person) {

  if(vote.type == 'like') {
    person.vote.like = vote.value;
  }
  else {
    person.vote.dislike = vote.value;
  }
    
}

}
