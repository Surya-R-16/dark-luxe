export * from './types/lookbook';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      spotLight: any;
      ambientLight: any;
      planeGeometry: any;
      boxGeometry: any;
      torusGeometry: any;
      meshStandardMaterial: any;
      primitive: any;
      meshDistortMaterial: any;
    }
  }
}
