import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      let dx = Math.pow((Point.x- center.x), 2);
      let dy = Math.pow((Point.y-center.y), 2);
      if ((dx+dy) <= Math.pow(radius, 2)){ return true } else { return false;}
    }
  }
}
