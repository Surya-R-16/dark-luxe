export * from './types/lookbook';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /* eslint-disable @typescript-eslint/no-explicit-any */
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
      /* eslint-enable @typescript-eslint/no-explicit-any */
    }
  }
}
