import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
  searchText: string = '';
  carsData: any[] = [];
  filteredCarsData: any[] = [];
  selectedFilter: string = 'carName';
  modelFilter: string = '';
  priceFilter: number | null = null;
  kilometerFilter: number | null = null;

  @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:3000/files').subscribe(data => {
      this.carsData = data.map(car => ({ ...car, enlargeImage: false }));
      this.updateFilter();
    });
  }

  updateFilter() {
    const searchLowerCase = this.searchText.toLowerCase();
    this.filteredCarsData = this.carsData.filter(car => {
      return (
        car.carName.toLowerCase().includes(searchLowerCase) &&
        car.carModel.toLowerCase().includes(this.modelFilter.toLowerCase()) &&
        (this.priceFilter === null || car.carPrice <= this.priceFilter) &&
        (this.kilometerFilter === null || car.carkilometre <= this.kilometerFilter)
      );
    });
  }

  deleteCar(car: any): void {
    console.log(car);
    const endpoint = "/deletecar";
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: car,
    };

    this.http.delete(`http://localhost:3000${endpoint}`, httpOptions).subscribe(
      (response: any) => {
        console.log("Car deleted successfully");
      },
      (error) => {
        console.error('Car deletion failed:', error);
        // Add your error handling logic here
      }
    );
  
    const index = this.carsData.indexOf(car);
    if (index !== -1) {
      this.carsData.splice(index, 1);
      this.updateFilter();
    }
  }

  toggleImageSize(car: any): void {
    car.enlargeImage = !car.enlargeImage;
  }



  nextImage(): void {
    if (this.carousel && this.carousel.activeSlide < this.filteredCarsData.length - 1) {
      this.carousel.nextSlide();
    }
  }


  confirmDelete(car: any): void {
    const isVerified = this.verifyEmailOrPhoneNumber(car.email, car.c);

    if (isVerified) {
      const confirmation = confirm("Are you sure you want to delete this car?");
      if (confirmation) {
        this.deleteCar(car);
      }
    } else {
      alert("Email or phone number does not match. Deletion not allowed.");
    }
  }

  verifyEmailOrPhoneNumber(email: string, phoneNumber: string): boolean {
    const userInputEmail = prompt("Enter your email:");
    const userInputPhoneNumber = prompt("Enter your phone number:");

    return userInputEmail === email || userInputPhoneNumber === phoneNumber;
  }
}
