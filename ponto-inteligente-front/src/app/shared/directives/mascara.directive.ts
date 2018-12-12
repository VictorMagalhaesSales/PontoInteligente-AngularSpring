import { 
  Directive, 
  HostListener, 
  Input, 
  ElementRef 
} from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor 
} from '@angular/forms';

@Directive({
  selector: '[mascara]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, // DEFINE QUE A DIRETIVA VAI ALTERAR O VALOR DO CAMPO DE TEXTO
    useExisting: MascaraDirective, 
    multi: true 
  }]
})
export class MascaraDirective implements ControlValueAccessor { // CLASSE QUE FORNECE MÉTODOS PARA MODIFICAR VALORES DO CAMPO DE TEXTO

  onTouched: any;
  onChange: any;

  @Input('mascara') mascara: string;

  constructor(private el: ElementRef) { }

  writeValue(value: any) {
    if (value) {
      this.el.nativeElement.value = this.aplicarMascara(value);
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event']) // SEMPRE QUE A TECLA FOR PRESSIONADA EXECUTA O MÉTODO
  onKeyup($event: any) {
    let valor: string = $event.target.value.replace(/\D/g, '');

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }

    let pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }

    $event.target.value = this.aplicarMascara(valor);
  }

  @HostListener('blur', ['$event']) // SEMPRE QUE A TECLA FOR SOLTADA EXECUTA O MÉTODO
  onBlur($event: any) {
    if ($event.target.value.length === this.mascara.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }

  aplicarMascara(valor: string): string {
    valor = valor.replace(/\D/g, '');
    let pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    let valorMask = valor + pad.substring(0, pad.length - valor.length);
    let valorMaskPos = 0;
    
    valor = '';
    for (let i = 0; i < this.mascara.length; i++) {
      if (isNaN(parseInt(this.mascara.charAt(i)))) {
        valor += this.mascara.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    return valor;
  }

}
