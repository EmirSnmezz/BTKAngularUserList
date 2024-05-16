import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableHeader',
  standalone: true
})
export class TransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case "id":
        return "Id";
      case "firstName":
        return "İsim";
      case "lastName":
        return "Soyisim";
      case "age":
        return "Yaş";
      case "gender":
        return "Cinsiyet";
      case "email":
        return "Mail";
      case "company":
        return "Şirket Adı";
      case "phone":
        return "Telefon";
      default:
        return "";
    }

  }
}
