import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'detailsbutton', 'deletebutton'];
  dataSource = new MatTableDataSource<Hero>();
  constructor(private heroService: HeroService, private snackBar: MatSnackBar) { }

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes:any) => {this.dataSource.data = heroes})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async deleteHero(id: any){
    await this.heroService.deleteHero(id)
    this.showSnackBar()
  }

  showSnackBar() {
    const snackBarRef: MatSnackBarRef<any> = this.snackBar.open('Deleted successfully', 'X', { duration: 500 });
    snackBarRef.afterDismissed().subscribe(() => {
      location.reload();
    });
  }
}


