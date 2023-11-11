import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposgridComponent } from './reposgrid.component';

describe('ReposgridComponent', () => {
  let component: ReposgridComponent;
  let fixture: ComponentFixture<ReposgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposgridComponent]
    });
    fixture = TestBed.createComponent(ReposgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
