import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('users works!');
 });

//   it('should validate the output for getAddtion', () => {
//     component.a = 5; component.b = 10;
//     spyOn(valueservice, 'getAdditionValue').and.returnValue(component.a + component.b);
//     component.getAddtion();
//     expect(component.addition).toBe(15);
//   });
// it('should return the output with offerrate in dependency service',()=>{
//     component.a=20;component.b=50;
//     constantservice.OfferRate=20;
//     spyOn(valueservice, 'getAdditionValuewithOffer').and.returnValue(component.a + component.b-constantservice.OfferRate);
//     component.getAddtionwithOfferRate();
//     expect(component.addition).toBe(50);
// });
//  it('should return new hero object',()=>{
//     spyOn(valueservice,'getHero').and.returnValue(USER_OBJECT);
//     component.addHero();
//     expect(component.hero[0]).toBe(USER_OBJECT);
//  });
  
});
