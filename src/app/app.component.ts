import { Component } from '@angular/core';
import { PostsService } from './posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mealApp';
  data: any;
  listMeal: any;
  selectedCat: any;
  showHide: boolean = false;
  constructor(private postData: PostsService) { }

  ngOnInit() {
    this.postData.getCategory().subscribe((result) => {
      this.data = result;
      this.data = this.data.meals;
    });
  }

  public onOptionsSelected(event: any) {
    this.selectedCat = event.target.value;
    this.showHide = true;
    this.postData.getEachCategory(this.selectedCat).subscribe((result) => {
      this.listMeal = result;
      this.listMeal = this.listMeal.meals;
    });
  }
}
