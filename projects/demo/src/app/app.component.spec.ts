import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { KeysPipe } from './pipes/keys.pipe';
import { DeviceDetectorService } from 'projects/ngx-device-detector/src/public-api';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent, KeysPipe],
      providers: [DeviceDetectorService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render demo heading in an element having class demo-heading-text', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.demo-heading-text').textContent).toContain(
      'ngx-device-detector'
    );
  }));

  it('should render device information inside table in <tr> tags ', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('table tr.info-item').length).toEqual(9); // all the 6 required properties
  }));
});
