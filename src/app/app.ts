import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'my-app';
  fullName = 'hoadv21';
  age: number = 10;

  sayHello() {
    console.log('hello');
    alert('hello ' + this.fullName);
  }

  // 👉 THÊM CÁI NÀY (nếu bạn hiển thị truyện ở app.html)
  stories = [
    {
      name: 'Dragon Ball',
      author: 'Akira Toriyama',
      year: 1984,
      genre: 'Hành động',
      views: 120000,
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Dragon_Ball_vol_1.jpg'
    },
    {
      name: 'Attack On Titan',
      author: 'Hajime Isayama',
      year: 2009,
      genre: 'Kinh dị',
      views: 95000,
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Shingeki_no_Kyojin_manga_volume_1.jpg'
    },
    {
      name: 'Bleach',
      author: 'Tite Kubo',
      year: 2001,
      genre: 'Hành động',
      views: 80000,
      image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleach_Volume_1.png'
    }
  ];
}