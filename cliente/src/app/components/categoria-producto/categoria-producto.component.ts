import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.css']
})
export class CategoriaProductoComponent {

  categoriaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoriaForm = this.fb.group({
      nombreCategoria: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  agregarCategoria() {
    const CATEGORIA = {
      nombre: this.categoriaForm.get('nombreCategoria')?.value
    };
    console.log(CATEGORIA);
  }
}
