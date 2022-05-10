
export default class Device {
  id: number = 0;
  color:  string = '';
  partnumber: number = 0;
  categoryId: number = 0;
  category: Categoria;
}

export class Categoria{
  name: string;
  categoryId: number = 0;

}



