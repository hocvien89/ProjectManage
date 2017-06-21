import { Component, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { ModalComponent } from 'ng2-bs3-modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DBOperation } from '../../Share/enum';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}
@Component({
    moduleId: module.id,
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.scss']
})
export class PersonComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    persons: Person[] = [];
    person: Person;
    // @ViewChild('search') name: any;
    @ViewChild('personmodal') modal: ModalComponent;
    indLoading: boolean;
    msg: string;
    userFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Person> = new Subject();

  constructor(private http: Http, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.userFrm = this.fb.group({
            id: [''],
            firstName: ['', Validators.required],
            lastName: ['']
        });

        this.dtOptions = {
        pagingType: 'full_numbers',
        displayStart: 10
        };
        this.http.get('../../../assets/data/person.json')
        .map(this.extractData)
        .subscribe(data => {
            this.persons = data;
            this.indLoading = false;
            // Calling the DT trigger to manually render the table
            this.dtTrigger.next();
        });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

    editUser(id: number) {
        console.log(id);
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = 'Edit User';
        this.modalBtnTitle = 'Update';
        this.person = this.persons.filter(x => x.id === id)[0];
        this.userFrm.setValue(this.person);
        this.modal.open();
    }
    deleteUser(id: number) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = 'Confirm to Delete?';
        this.modalBtnTitle = 'Delete';
        this.person = this.persons.filter(x => x.id === id)[0];
        this.userFrm.setValue(this.person);
        this.modal.open();
    }
    SetControlsState(isEnable: boolean) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }
    onSubmit(formData: any) {
        this.msg = 'submit';
    }
}
