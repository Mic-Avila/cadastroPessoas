import { Directive, HostListener, ElementRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective  implements Validators, OnInit{
  @Input("valorMinimo") valorMinimo: number = 0

  constructor() { }

  ngOnInit(): void {
    
  }

  validate(c: FormControl){
    let v: number = +c.value
    if(isNaN(v)){
      return{'minimo': true, 'requireValue': this.valorMinimo}
    }
    if(v < this.valorMinimo){
      return{'minimo': true, 'requireValue': this.valorMinimo}
    }
    return null
  }

}
