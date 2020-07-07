import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcontentComponent } from './htmlcontent.component';

describe('HtmlcontentComponent', () => {
  let component: HtmlcontentComponent;
  let fixture: ComponentFixture<HtmlcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
