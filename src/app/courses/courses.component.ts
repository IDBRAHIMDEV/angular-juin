import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = [
    {
      id: 1,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta',
      label: 'formation angular',
      price: 15.1254,
      students: 2,
      publish: new Date()
    },
    {
      id: 2,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/hOmKswn5R8qt5Tp9SAg0',
      label: 'formation ionic',
      price: 17.9,
      students: 20,
      publish: new Date()
    },
    {
      id: 3,
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/XXhNsJJURr2GazTKbhfg',
      label: 'formation symfony',
      price: 30.5259,
      students: 22,
      publish: new Date()
    },
  ];

}
