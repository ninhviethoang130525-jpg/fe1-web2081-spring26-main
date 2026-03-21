import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Story {
  title: string;
  author: string;
  views: number;
  genre: string;
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: Story[] = [
    { title: 'One Piece', author: 'Oda', views: 100000, genre: 'Hành động' },
    { title: 'Naruto', author: 'Kishimoto', views: 90000, genre: 'Hành động' },
    { title: 'Doraemon', author: 'Fujiko F Fujio', views: 70000, genre: 'Hài hước' },
  ];

  addStoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addStoryForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      views: [0, [Validators.required, Validators.min(0)]],
      genre: ['', Validators.required],
    });

    this.addStoryForm.valueChanges.subscribe(value => {
      console.log('Stories form value:', value);
    });
  }

  get title() {
    return this.addStoryForm.get('title');
  }

  get author() {
    return this.addStoryForm.get('author');
  }

  get views() {
    return this.addStoryForm.get('views');
  }

  get genre() {
    return this.addStoryForm.get('genre');
  }

  addStory() {
    if (this.addStoryForm.valid) {
      const newStory: Story = {
        title: this.title?.value,
        author: this.author?.value,
        views: Number(this.views?.value),
        genre: this.genre?.value,
      };
      this.stories.push(newStory);
      this.addStoryForm.reset({ title: '', author: '', views: 0, genre: '' });
    }
  }

  deleteStory(index: number) {
    this.stories.splice(index, 1);
  }
}
