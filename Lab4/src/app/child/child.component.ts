import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{

  @Input() inpText:string;

  procText:string = "nate higgers";

    
  ngOnChanges(): void {
    this.procText = this.inpText.split(" ").sort().toString();
  }
}
